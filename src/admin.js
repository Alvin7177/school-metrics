import { REST_UNLOCK_USES as DEFAULT_UNLOCK } from "./config.js";
import {
  isFirebaseConfigured,
  cloudAddLog,
  cloudFetchLogs,
  cloudClearLogs,
  cloudSaveSettings,
  cloudLoadSettings,
} from "./firebase.js";
import { firebaseConfig } from "./firebase-config.js";

const ADMIN_PASSWORD = "73357442";
const SESSION_KEY = "schoolMetricsAdminSession";
const SETTINGS_KEY = "schoolMetricsAdminSettings";
const LOG_KEY = "schoolMetricsActivityLog";
const DEVICE_KEY = "schoolMetricsDeviceId";
const MAX_LOGS = 500;

const DEFAULT_SETTINGS = {
  restUnlockUses: DEFAULT_UNLOCK,
  freeGames: true,
  standardScale: [
    { letter: "A", min: 90 },
    { letter: "B", min: 80 },
    { letter: "C", min: 70 },
    { letter: "D", min: 60 },
    { letter: "E", min: 0 },
  ],
  artsScale: [
    { letter: "A", min: 80 },
    { letter: "B", min: 60 },
    { letter: "C", min: 0 },
  ],
};

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getDeviceId() {
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    id = `dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    localStorage.setItem(DEVICE_KEY, id);
  }
  return id;
}

export function isAdminSession() {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

export function tryAdminLogin(password) {
  if (String(password) === ADMIN_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "1");
    logActivity({ type: "admin_login", message: "관리자 로그인" });
    return true;
  }
  return false;
}

export function adminLogout() {
  sessionStorage.removeItem(SESSION_KEY);
}

export function getAdminSettings() {
  const saved = readJson(SETTINGS_KEY, {});
  return {
    ...DEFAULT_SETTINGS,
    ...saved,
    standardScale: saved.standardScale || DEFAULT_SETTINGS.standardScale,
    artsScale: saved.artsScale || DEFAULT_SETTINGS.artsScale,
  };
}

export function saveAdminSettings(partial) {
  const next = { ...getAdminSettings(), ...partial };
  writeJson(SETTINGS_KEY, next);
  logActivity({ type: "admin_settings", message: "관리자 설정 변경", detail: partial });
  if (isFirebaseConfigured()) {
    cloudSaveSettings(next).catch((err) => console.warn("[firebase] settings save", err));
  }
  return next;
}

/** 앱 시작 시 클라우드 설정을 가져와 모든 기기에 반영 */
export async function syncAdminSettingsFromCloud() {
  if (!isFirebaseConfigured()) return getAdminSettings();
  try {
    const remote = await cloudLoadSettings();
    if (remote && typeof remote === "object") {
      const next = {
        ...DEFAULT_SETTINGS,
        ...remote,
        standardScale: remote.standardScale || DEFAULT_SETTINGS.standardScale,
        artsScale: remote.artsScale || DEFAULT_SETTINGS.artsScale,
      };
      writeJson(SETTINGS_KEY, next);
      return next;
    }
  } catch (err) {
    console.warn("[firebase] settings load", err);
  }
  return getAdminSettings();
}

export function getEffectiveUnlockUses() {
  return Number(getAdminSettings().restUnlockUses) || DEFAULT_UNLOCK;
}

export function isAdminFreeGames() {
  return isAdminSession() && getAdminSettings().freeGames !== false;
}

export function logActivity(entry) {
  const row = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    at: new Date().toISOString(),
    deviceId: getDeviceId(),
    ...entry,
  };

  const logs = readJson(LOG_KEY, []);
  logs.unshift(row);
  writeJson(LOG_KEY, logs.slice(0, MAX_LOGS));

  if (isFirebaseConfigured()) {
    cloudAddLog(row).catch((err) => console.warn("[firebase] log", err));
  }

  return row;
}

export function getActivityLogs() {
  return readJson(LOG_KEY, []);
}

/** 관리자: 클라우드 + 로컬 기록 합치기 */
export async function getMergedActivityLogs() {
  const local = getActivityLogs();
  if (!isFirebaseConfigured()) {
    return { source: "local", logs: local };
  }
  try {
    const cloud = await cloudFetchLogs(300);
    const map = new Map();
    for (const item of [...cloud, ...local]) {
      const key = item.id || `${item.at}-${item.deviceId}-${item.type}-${item.message}`;
      if (!map.has(key)) map.set(key, item);
    }
    const logs = [...map.values()].sort((a, b) => String(b.at).localeCompare(String(a.at)));
    return { source: "firebase", logs };
  } catch (err) {
    console.warn("[firebase] fetch logs", err);
    return { source: "local-fallback", logs: local, error: String(err.message || err) };
  }
}

export async function clearActivityLogs({ cloud = true } = {}) {
  localStorage.removeItem(LOG_KEY);
  if (cloud && isFirebaseConfigured()) {
    try {
      await cloudClearLogs();
    } catch (err) {
      console.warn("[firebase] clear", err);
    }
  }
  logActivity({ type: "admin_clear_logs", message: "활동 로그 초기화" });
}

export function exportActivityLogsText(logs = getActivityLogs()) {
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      deviceId: getDeviceId(),
      firebase: isFirebaseConfigured(),
      settings: getAdminSettings(),
      logs,
    },
    null,
    2
  );
}

export function getFirebaseStatus() {
  return {
    configured: isFirebaseConfigured(),
    projectId: firebaseConfig.projectId || "",
  };
}
