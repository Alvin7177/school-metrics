import { APP_INFO, REST_UNLOCK_USES } from "./config.js";
import {
  recordSubjectCalculation,
  isRestUnlocked,
  getUniqueSubjectCount,
  lockRestAfterUse,
  getUnlockProgressText,
} from "./storage.js";
import { getNextQuote } from "./data/quotes.js";
import {
  getGradeRule,
  getSubjectNames,
  getSemesterKeys,
  getSemesterLabel,
  flattenSemesterItems,
} from "./data/grades.js";
import { buildResultSummary } from "./data/calc.js";
import {
  gradeCriteriaBar,
  bindGradeCriteriaBar,
  letterLabel,
  isArtsSubject,
  canStillImproveGrade,
  getGradeCheerMessage,
} from "./data/grading.js";
import {
  wireframeGlobe,
  titleBackground,
  goButtonBg,
  gradeThemeClass,
  phoneScreen,
  screenFooter,
  backToMainLink,
} from "./components/ui.js";
import { renderDartGame } from "./games/dart.js";
import { renderMinesweeperGame } from "./games/minesweeper.js";
import { renderCricketGame } from "./games/cricket.js";

const root = document.getElementById("app");
let selectedGrade = null;
let selectedSubject = null;
let selectedSemester = null;
let cleanupGame = null;
let inRestZone = false;

const REST_ROUTES = new Set(["rest", "game-dart", "game-mine", "game-cricket"]);

const routes = {
  main: renderMain,
  help: renderHelp,
  grade: renderGradeSelect,
  subject: renderSubjectSelect,
  calculator: renderCalculator,
  rest: renderRestHub,
  "game-dart": () => renderGame("dart"),
  "game-mine": () => renderGame("mine"),
  "game-cricket": () => renderGame("cricket"),
};

init();

function init() {
  navigate("main");
}

function navigate(name, params = {}) {
  if (cleanupGame) {
    cleanupGame();
    cleanupGame = null;
  }

  if (inRestZone && !REST_ROUTES.has(name)) {
    lockRestAfterUse();
  }

  const render = routes[name];
  if (!render) return;
  root.innerHTML = "";
  render(params);
  inRestZone = REST_ROUTES.has(name);
  window.scrollTo(0, 0);
}

function bindActions(container) {
  container.querySelectorAll("[data-action]").forEach((el) => {
    el.addEventListener("click", () => handleAction(el.dataset.action));
  });
}

function handleAction(action) {
  if (action === "main") {
    selectedGrade = null;
    selectedSubject = null;
    selectedSemester = null;
    navigate("main");
    return;
  }
  if (action === "grade") {
    selectedSubject = null;
    selectedSemester = null;
    navigate("grade");
    return;
  }
  if (action === "help") navigate("help");
  if (action === "rest") navigate("rest");
  if (action === "subject") navigate("subject", { grade: selectedGrade });
  if (action === "game-dart") navigate("game-dart");
  if (action === "game-mine") navigate("game-mine");
  if (action === "game-cricket") navigate("game-cricket");

  if (action.startsWith("pick-grade-")) {
    selectedGrade = Number(action.replace("pick-grade-", ""));
    selectedSubject = null;
    selectedSemester = null;
    navigate("subject", { grade: selectedGrade });
    return;
  }

  if (action.startsWith("pick-subject-")) {
    const subject = decodeURIComponent(action.replace("pick-subject-", ""));
    selectedSubject = subject;
    const semesters = getSemesterKeys(selectedGrade, subject);
    selectedSemester = semesters.length === 1 ? semesters[0] : semesters[0];
    navigate("calculator", {
      grade: selectedGrade,
      subject,
      semester: selectedSemester,
    });
    return;
  }

  if (action.startsWith("pick-semester-")) {
    selectedSemester = Number(action.replace("pick-semester-", ""));
    navigate("calculator", {
      grade: selectedGrade,
      subject: selectedSubject,
      semester: selectedSemester,
    });
  }
}

function renderMain() {
  const quote = getNextQuote();
  root.innerHTML = phoneScreen(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${titleBackground()}
          <h1 class="app-title">${APP_INFO.title}</h1>
        </div>
        <p class="app-subtitle">${APP_INFO.subtitle}</p>
        <p class="main-quote">"${quote}"</p>
      </div>
      <div class="main-body">
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${goButtonBg()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${APP_INFO.footer}</p>
    </div>
  `);
  bindActions(root);
}

function renderHelp() {
  root.innerHTML = phoneScreen(`
    <div class="stack-screen">
      ${wireframeGlobe()}
      <h2 class="screen-title">앱 정보</h2>
      <div class="info-card">
        <h3>이 앱의 목적</h3>
        <ol>
          <li>데이터 기반의 자기주도적 성적 관리</li>
          <li>미니게임을 통한 스트레스 완화</li>
        </ol>
        <h3>2026학년도 부산 해연중</h3>
        <ul>
          <li>학년 → 과목 → 학기별 점수 입력</li>
          <li>지필·수행 반영비율 자동 합산</li>
          <li>예상 등급·상위 등급 필요 점수 안내</li>
          <li>서로 다른 과목 ${REST_UNLOCK_USES}개 계산 시 미니게임 1회 해금</li>
          <li>미니게임 이용 후에는 다시 잠금</li>
        </ul>
        <p class="muted">제작: ${APP_INFO.creator}</p>
        <p class="muted">기록된 과목: ${getUniqueSubjectCount()}개</p>
      </div>
      ${backToMainLink()}
      ${screenFooter(APP_INFO.subtitle)}
    </div>
  `);
  bindActions(root);
}

function renderGradeSelect() {
  const unlocked = isRestUnlocked();
  const progress = getUnlockProgressText();

  root.innerHTML = phoneScreen(`
    <div class="stack-screen grade-screen">
      ${wireframeGlobe()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${
        unlocked
          ? `<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>`
          : `<p class="unlock-hint">${progress}</p>`
      }
      ${backToMainLink()}
      ${screenFooter(APP_INFO.subtitle)}
    </div>
  `);
  bindActions(root);
}

function renderSubjectSelect({ grade }) {
  if (!grade || !getGradeRule(grade)) {
    navigate("grade");
    return;
  }

  selectedGrade = grade;
  const rule = getGradeRule(grade);
  const subjects = getSubjectNames(grade);

  root.innerHTML = phoneScreen(`
    <div class="stack-screen ${gradeThemeClass(grade)}">
      ${wireframeGlobe()}
      <h2 class="screen-title">${rule.label} 과목 선택</h2>
      ${rule.note ? `<p class="screen-note">${rule.note}</p>` : ""}
      ${gradeCriteriaBar()}
      <div class="subject-list">
        ${subjects
          .map(
            (name) =>
              `<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(name)}">${name}</button>`
          )
          .join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${backToMainLink()}
      </div>
      ${screenFooter(APP_INFO.subtitle)}
    </div>
  `);
  bindActions(root);
  bindGradeCriteriaBar(root);
}

function renderCalculator({ grade, subject, semester }) {
  if (!grade || !subject || !semester) {
    navigate("subject", { grade: selectedGrade });
    return;
  }

  selectedGrade = grade;
  selectedSubject = subject;
  selectedSemester = semester;

  const rule = getGradeRule(grade);
  const semesters = getSemesterKeys(grade, subject);
  const items = flattenSemesterItems(grade, subject, semester);
  const semLabel = getSemesterLabel(grade, subject, semester);
  const scores = {};

  const semesterTabs =
    semesters.length > 1
      ? `<div class="semester-tabs">
          ${semesters
            .map((s) => {
              const active = s === semester ? "active" : "";
              return `<button type="button" class="semester-tab ${active}" data-action="pick-semester-${s}">${getSemesterLabel(grade, subject, s)}</button>`;
            })
            .join("")}
        </div>`
      : `<p class="semester-only">${semLabel}</p>`;

  root.innerHTML = phoneScreen(`
    <div class="stack-screen calculator-screen ${gradeThemeClass(grade)}">
      ${wireframeGlobe("globe globe-small")}
      <h2 class="screen-title subject-title">${subject}</h2>
      <p class="screen-desc">${rule.label} · ${semLabel}${isArtsSubject(subject) ? " · 예체능(A·B·C)" : " · 일반(A~E)"}</p>
      ${gradeCriteriaBar(subject)}
      ${semesterTabs}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${backToMainLink()}
      </div>
      ${screenFooter(APP_INFO.subtitle)}
    </div>
  `);

  const form = root.querySelector("#calc-form");

  let lastKind = "";
  for (const item of items) {
    if (item.kind !== lastKind) {
      lastKind = item.kind;
      const heading = document.createElement("h3");
      heading.className = "section-heading";
      heading.textContent = item.kind === "exam" ? "지필고사" : "수행평가";
      form.appendChild(heading);
    }

    const row = document.createElement("label");
    row.className = "score-row";
    row.innerHTML = `
      <span>${item.label} <em>${item.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${item.key}" placeholder="점수" />
    `;
    form.appendChild(row);
  }

  const resultEl = root.querySelector("#calc-result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    for (const item of items) {
      scores[item.key] = data.get(item.key);
    }

    const result = buildResultSummary(items, scores, subject);
    if (!result) {
      resultEl.classList.remove("hidden");
      resultEl.innerHTML = `<p class="warn">최소 1개 이상 점수를 입력하세요.</p>`;
      return;
    }

    const calcRecord = recordSubjectCalculation(subject);

    let neededHtml = "";
    if (result.needed?.needed != null) {
      neededHtml = `<p>상위 <strong>${letterLabel(result.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${result.needed.needed}점</strong> 이상</p>`;
    } else if (result.needed?.message) {
      neededHtml = `<p>${result.needed.message}</p>`;
    }

    let confirmedHtml = "";
    if (
      result.projection.remainingCount > 0 &&
      result.letter === result.projLetter
    ) {
      const label = letterLabel(result.letter);
      let minLine = "";
      if (result.confirmMin) {
        if (result.confirmMin.minScore <= 0) {
          minLine = `<p>남은 항목이 <strong>0점</strong>이어도 ${label} 유지</p>`;
        } else {
          minLine = `<p>남은 항목 각각 최소 <strong>${result.confirmMin.minScore}점</strong> 이상이면 ${label} 유지</p>`;
        }
      }
      confirmedHtml = `
        <p><strong>${label} 확정입니다.</strong></p>
        ${minLine}
      `;
    }

    let cheerHtml = "";
    if (canStillImproveGrade(result)) {
      cheerHtml = `<p class="cheer-msg">${getGradeCheerMessage()}</p>`;
    }

    let unlockMsg = "";
    if (calcRecord.justUnlocked) {
      unlockMsg = `<p class="success">서로 다른 과목 ${REST_UNLOCK_USES}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`;
    } else if (isRestUnlocked()) {
      unlockMsg = `<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>`;
    } else if (calcRecord.isNew) {
      unlockMsg = `<p class="muted">${getUnlockProgressText()}</p>`;
    } else {
      unlockMsg = `<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>`;
    }

    resultEl.classList.remove("hidden");
    resultEl.innerHTML = `
      <h3>${subject} 결과</h3>
      <p>총점(반올림) <strong>${result.rounded}점</strong> · <strong>${letterLabel(result.letter)}</strong></p>
      <p class="muted">가중 평균 ${result.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${result.projRounded}점</strong> · <strong>${letterLabel(result.projLetter)}</strong></p>
      ${confirmedHtml}
      ${cheerHtml}
      ${neededHtml}
      ${unlockMsg}
    `;
  });

  bindActions(root);
  bindGradeCriteriaBar(root);
}

function renderRestHub() {
  if (!isRestUnlocked()) {
    navigate("grade");
    return;
  }

  root.innerHTML = phoneScreen(`
    <div class="stack-screen">
      ${wireframeGlobe()}
      <h2 class="screen-title">휴식 · 미니게임</h2>
      <div class="game-list">
        <button type="button" class="game-card" data-action="game-dart">다트 게임</button>
        <button type="button" class="game-card" data-action="game-mine">지뢰찾기</button>
        <button type="button" class="game-card" data-action="game-cricket">크리켓 게임</button>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${backToMainLink()}
      </div>
      ${screenFooter(APP_INFO.subtitle)}
    </div>
  `);
  bindActions(root);
}

function renderGame(type) {
  if (!isRestUnlocked()) {
    navigate("grade");
    return;
  }

  root.innerHTML = phoneScreen(`<div id="game-root"></div>`, "game-screen");
  const gameRoot = root.querySelector("#game-root");
  const handlers = {
    onBack: () => navigate("rest"),
    onMain: () => {
      selectedGrade = null;
      selectedSubject = null;
      selectedSemester = null;
      navigate("main");
    },
  };

  if (type === "dart") cleanupGame = renderDartGame(gameRoot, handlers) ?? null;
  else if (type === "mine") renderMinesweeperGame(gameRoot, handlers);
  else if (type === "cricket") cleanupGame = renderCricketGame(gameRoot, handlers) ?? null;
}
