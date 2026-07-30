import { getEffectiveUnlockUses, isAdminFreeGames } from "./admin.js";

const SUBJECTS_KEY = "schoolMetricsUniqueSubjects";

function loadSubjects() {
  try {
    const raw = localStorage.getItem(SUBJECTS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function saveSubjects(list) {
  localStorage.setItem(SUBJECTS_KEY, JSON.stringify(list));
}

/** 서로 다른 과목 계산 기록 (같은 과목은 1회만 인정) */
export function recordSubjectCalculation(subject) {
  const unlockUses = getEffectiveUnlockUses();
  const subjects = loadSubjects();
  const isNew = !subjects.includes(subject);
  if (isNew) {
    subjects.push(subject);
    saveSubjects(subjects);
  }
  return {
    isNew,
    uniqueCount: subjects.length,
    justUnlocked: isNew && subjects.length >= unlockUses,
  };
}

export function getUniqueSubjectCount() {
  return loadSubjects().length;
}

export function getCalculatedSubjects() {
  return loadSubjects();
}

export function isRestUnlocked() {
  if (isAdminFreeGames()) return true;
  return getUniqueSubjectCount() >= getEffectiveUnlockUses();
}

export function getUsesUntilRest() {
  return Math.max(0, getEffectiveUnlockUses() - getUniqueSubjectCount());
}

/** 미니게임 이용 후 진행도 초기화 (관리자 자유 이용 시 유지) */
export function lockRestAfterUse() {
  if (isAdminFreeGames()) return;
  localStorage.removeItem(SUBJECTS_KEY);
}

export function getUnlockProgressText() {
  const unlockUses = getEffectiveUnlockUses();
  const count = getUniqueSubjectCount();
  const remaining = getUsesUntilRest();
  if (isAdminFreeGames()) {
    return "관리자 모드: 미니게임 자유 이용";
  }
  if (isRestUnlocked()) {
    return `서로 다른 과목 ${count}개 달성! 휴식 미니게임 이용 가능`;
  }
  return `서로 다른 과목 ${remaining}개 더 계산하면 해금 (${count}/${unlockUses})`;
}
