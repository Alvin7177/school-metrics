/** 예체능 과목 (음악·미술·체육) */
export const ARTS_SUBJECTS = ["음악", "미술", "체육"];

const STANDARD_SCALE = [
  { letter: "A", min: 90, label: "A (90점 이상)" },
  { letter: "B", min: 80, label: "B (80점 이상)" },
  { letter: "C", min: 70, label: "C (70점 이상)" },
  { letter: "D", min: 60, label: "D (60점 이상)" },
  { letter: "E", min: 0, label: "E (60점 미만)" },
];

const ARTS_SCALE = [
  { letter: "A", min: 80, label: "A (80점 이상)" },
  { letter: "B", min: 60, label: "B (60점 이상)" },
  { letter: "C", min: 0, label: "C (60점 미만)" },
];

export function isArtsSubject(subject) {
  return ARTS_SUBJECTS.includes(subject);
}

export function roundScore(score) {
  if (score === null || score === undefined || Number.isNaN(score)) return null;
  return Math.round(score);
}

export function getScale(subject) {
  return isArtsSubject(subject) ? ARTS_SCALE : STANDARD_SCALE;
}

export function scoreToLetter(score, subject) {
  const rounded = roundScore(score);
  if (rounded === null) return "-";
  const scale = getScale(subject);
  for (const row of scale) {
    if (rounded >= row.min) return row.letter;
  }
  return scale[scale.length - 1].letter;
}

export function letterLabel(letter) {
  return `${letter}등급`;
}

const GRADE_CHEER_MESSAGES = [
  "조금만 더 올리면 된다. 할 수 있어!",
  "상위 등급이 코앞이다. 끝까지 달려보자!",
  "지금의 노력이 등급을 바꾼다. 포기하지 마!",
  "아직 끝나지 않았어. 충분히 올릴 수 있어!",
  "남은 항목이 기회다. 집중해서 마무리하자!",
  "한 걸음만 더 가면 등급이 달라진다. 파이팅!",
  "가능성은 아직 살아 있다. 믿고 가보자!",
  "오늘의 한 문제가 등급을 바꿀 수도 있어!",
  "목표 등급까지 거의 다 왔다. 조금만 더!",
  "실력은 거짓말하지 않는다. 계속 밀어붙여!",
];

export function canStillImproveGrade(result) {
  return (
    result.projection.remainingCount > 0 &&
    result.letter !== result.projLetter
  );
}

export function getGradeCheerMessage() {
  const idx = Math.floor(Math.random() * GRADE_CHEER_MESSAGES.length);
  return GRADE_CHEER_MESSAGES[idx];
}

export function gradeCriteriaBar(subject = null) {
  const arts = subject ? isArtsSubject(subject) : false;
  const typeNote = subject
    ? arts
      ? `${subject}은(는) 예체능 과목 (A·B·C)`
      : `${subject}은(는) 일반 과목 (A·B·C·D·E)`
  : "과목 유형에 따라 등급 기준이 다릅니다.";

  return `
    <div class="grade-criteria-wrap">
      <button type="button" class="grade-criteria-bar" data-toggle="criteria" aria-expanded="false">
        ▶ 등급 기준표 확인
      </button>
      <div class="grade-criteria-panel hidden" id="criteria-panel">
        <p class="criteria-note">${typeNote}</p>
        <p class="criteria-note muted">총점은 소수점을 반올림한 뒤 등급을 산출합니다.</p>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">일반 과목 (국·영·수·사·과 등)</th></tr>
          </thead>
          <tbody>
            ${STANDARD_SCALE.map((r) => `<tr><td>${r.letter}</td><td>${r.min === 0 ? "60점 미만" : `${r.min}점 이상`}</td></tr>`).join("")}
          </tbody>
        </table>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">예체능 (음악·미술·체육)</th></tr>
          </thead>
          <tbody>
            ${ARTS_SCALE.map((r) => `<tr><td>${r.letter}</td><td>${r.min === 0 ? "60점 미만" : `${r.min}점 이상`}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

export function bindGradeCriteriaBar(container) {
  const btn = container.querySelector("[data-toggle='criteria']");
  const panel = container.querySelector("#criteria-panel");
  if (!btn || !panel) return;

  btn.addEventListener("click", () => {
    const open = panel.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!open));
    btn.textContent = open ? "▶ 등급 기준표 확인" : "▼ 등급 기준표 닫기";
  });
}

export function calcNeededForNextLetter(items, scores, average, subject) {
  if (average === null) return null;

  const rounded = roundScore(average);
  const current = scoreToLetter(rounded, subject);
  const scale = getScale(subject);
  const idx = scale.findIndex((row) => row.letter === current);

  if (idx <= 0) {
    return { targetLetter: current, needed: null, message: "이미 최고 등급입니다." };
  }

  const target = scale[idx - 1];
  const targetScore = target.min;

  const empty = items.filter((item) => {
    const raw = scores[item.key];
    return raw === "" || raw === null || raw === undefined || Number.isNaN(Number(raw));
  });

  if (empty.length === 0) {
    return {
      targetLetter: target.letter,
      needed: null,
      message: "모든 항목이 입력되었습니다.",
    };
  }

  let filledWeight = 0;
  let filledSum = 0;
  let emptyWeight = 0;

  for (const item of items) {
    const raw = scores[item.key];
    if (raw === "" || raw === null || raw === undefined || Number.isNaN(Number(raw))) {
      emptyWeight += item.weight;
      continue;
    }
    filledWeight += item.weight;
    filledSum += Number(raw) * item.weight;
  }

  if (emptyWeight === 0) return null;

  const totalWeight = filledWeight + emptyWeight;
  const needed = (targetScore * totalWeight - filledSum) / emptyWeight;
  const clamped = Math.max(0, Math.min(100, needed));

  return {
    targetLetter: target.letter,
    needed: Math.ceil(clamped * 10) / 10,
    remainingCount: empty.length,
    message: null,
  };
}

/** 남은 항목에 동일 점수를 넣을 때 현재 등급을 유지하기 위한 최소 점수 */
export function calcMinToConfirmLetter(items, scores, currentLetter, subject) {
  const scale = getScale(subject);
  const row = scale.find((r) => r.letter === currentLetter);
  if (!row) return null;

  let filledSum = 0;
  let filledWeight = 0;
  let emptyWeight = 0;
  let remainingCount = 0;

  for (const item of items) {
    const raw = scores[item.key];
    if (raw === "" || raw === null || raw === undefined || Number.isNaN(Number(raw))) {
      emptyWeight += item.weight;
      remainingCount += 1;
      continue;
    }
    filledWeight += item.weight;
    filledSum += Number(raw) * item.weight;
  }

  if (emptyWeight === 0) return null;

  const totalWeight = filledWeight + emptyWeight;
  const threshold = row.min - 0.5;
  const rawMin = (threshold * totalWeight - filledSum) / emptyWeight;
  const minScore = Math.ceil(Math.max(0, Math.min(100, rawMin)) * 10) / 10;

  return { minScore, remainingCount };
}
