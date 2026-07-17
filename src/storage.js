import { REST_UNLOCK_USES } from "./config.js";

const SUBJECTS_KEY = "schoolMetricsUniqueSubjects";
const QUOTE_INDEX_KEY = "schoolMetricsQuoteIndex";

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
  const subjects = loadSubjects();
  const isNew = !subjects.includes(subject);
  if (isNew) {
    subjects.push(subject);
    saveSubjects(subjects);
  }
  return {
    isNew,
    uniqueCount: subjects.length,
    justUnlocked: isNew && subjects.length >= REST_UNLOCK_USES,
  };
}

export function getUniqueSubjectCount() {
  return loadSubjects().length;
}

export function getCalculatedSubjects() {
  return loadSubjects();
}

export function isRestUnlocked() {
  return getUniqueSubjectCount() >= REST_UNLOCK_USES;
}

export function getUsesUntilRest() {
  return Math.max(0, REST_UNLOCK_USES - getUniqueSubjectCount());
}

/** 미니게임 이용 후 진행도 초기화 */
export function lockRestAfterUse() {
  localStorage.removeItem(SUBJECTS_KEY);
}

export function getUnlockProgressText() {
  const count = getUniqueSubjectCount();
  const remaining = getUsesUntilRest();
  if (isRestUnlocked()) {
    return `서로 다른 과목 ${count}개 달성! 휴식 미니게임 이용 가능`;
  }
  return `서로 다른 과목 ${remaining}개 더 계산하면 해금 (${count}/${REST_UNLOCK_USES})`;
}
