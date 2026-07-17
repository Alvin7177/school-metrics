export function renderDartGame(container, { onBack, onMain }) {
  let score = 0;
  let throwsLeft = 8;

  container.innerHTML = `
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">원판을 터치해서 점수를 모으세요.</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: 8</span>
      </div>
      <div class="dart-board" id="dart-board" role="button" tabindex="0" aria-label="다트판">
        <div class="dart-ring ring-outer"></div>
        <div class="dart-ring ring-mid"></div>
        <div class="dart-ring ring-inner"></div>
        <div class="dart-bull"></div>
      </div>
      <p class="game-feedback" id="dart-feedback">다트판을 눌러보세요!</p>
      ${navMarkup(onBack, onMain)}
    </div>
  `;

  const board = container.querySelector("#dart-board");
  const scoreEl = container.querySelector("#dart-score");
  const throwsEl = container.querySelector("#dart-throws");
  const feedback = container.querySelector("#dart-feedback");

  function throwDart(e) {
    if (throwsLeft <= 0) return;

    const rect = board.getBoundingClientRect();
    const x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left - rect.width / 2;
    const y = (e.clientY ?? e.touches?.[0]?.clientY) - rect.top - rect.height / 2;
    const dist = Math.sqrt(x * x + y * y);
    const maxR = rect.width / 2;

    let points = 0;
    let msg = "";
    const ratio = dist / maxR;

    if (ratio <= 0.08) {
      points = 50;
      msg = "불스아이! +50";
    } else if (ratio <= 0.22) {
      points = 30;
      msg = "안쪽! +30";
    } else if (ratio <= 0.45) {
      points = 20;
      msg = "중간! +20";
    } else if (ratio <= 0.75) {
      points = 10;
      msg = "바깥! +10";
    } else {
      points = 0;
      msg = "빗나감!";
    }

    score += points;
    throwsLeft -= 1;
    scoreEl.textContent = `점수: ${score}`;
    throwsEl.textContent = `남은 횟수: ${throwsLeft}`;
    feedback.textContent = throwsLeft > 0 ? msg : `게임 종료! 최종 ${score}점`;

    const mark = document.createElement("span");
    mark.className = "dart-mark";
    mark.style.left = `${50 + (x / maxR) * 50}%`;
    mark.style.top = `${50 + (y / maxR) * 50}%`;
    board.appendChild(mark);
  }

  board.addEventListener("click", throwDart);
  board.addEventListener("touchstart", (e) => {
    e.preventDefault();
    throwDart(e);
  });

  bindNav(container, onBack, onMain);

  return () => {
    board.removeEventListener("click", throwDart);
  };
}

function navMarkup(onBack, onMain) {
  return `
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `;
}

function bindNav(container, onBack, onMain) {
  container.querySelector('[data-nav="back"]')?.addEventListener("click", onBack);
  container.querySelector('[data-nav="main"]')?.addEventListener("click", onMain);
}
