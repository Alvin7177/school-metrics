export function renderCricketGame(container, { onBack, onMain }) {
  let runs = 0;
  let balls = 0;
  const maxBalls = 12;
  let timer = null;
  let targetX = 50;
  let direction = 1;
  let swinging = false;

  container.innerHTML = `
    <div class="game-panel">
      <h2 class="game-title">크리켓 배팅</h2>
      <p class="game-desc">공이 타격존에 올 때 SWING! 버튼을 누르세요.</p>
      <div class="cricket-stats">
        <span id="cricket-runs">득점: 0</span>
        <span id="cricket-balls">볼: 0 / 12</span>
      </div>
      <div class="cricket-lane">
        <div class="cricket-zone" id="cricket-zone"></div>
        <div class="cricket-ball" id="cricket-ball"></div>
      </div>
      <button type="button" class="btn-go" id="cricket-swing">SWING!</button>
      <p class="game-feedback" id="cricket-feedback">타이밍에 맞춰 스윙하세요!</p>
      <div class="nav-row">
        <button type="button" class="nav-btn" data-nav="back">뒤로</button>
        <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
      </div>
    </div>
  `;

  const ball = container.querySelector("#cricket-ball");
  const zone = container.querySelector("#cricket-zone");
  const runsEl = container.querySelector("#cricket-runs");
  const ballsEl = container.querySelector("#cricket-balls");
  const feedback = container.querySelector("#cricket-feedback");
  const swingBtn = container.querySelector("#cricket-swing");

  function positionZone() {
    zone.style.left = `${targetX}%`;
  }

  function animate() {
    targetX += direction * 1.8;
    if (targetX >= 78 || targetX <= 22) direction *= -1;
    positionZone();
    timer = requestAnimationFrame(animate);
  }

  function swing() {
    if (swinging || balls >= maxBalls) return;
    swinging = true;
    balls++;

    const ballX = 50;
    const zoneLeft = targetX - 8;
    const zoneRight = targetX + 8;
    const hit = ballX >= zoneLeft && ballX <= zoneRight;

    let gained = 0;
    if (hit) {
      const center = Math.abs(ballX - targetX);
      if (center < 2) gained = 6;
      else if (center < 5) gained = 4;
      else gained = 2;
      feedback.textContent = `안타! +${gained}점`;
    } else {
      feedback.textContent = "헛스윙!";
    }

    runs += gained;
    runsEl.textContent = `득점: ${runs}`;
    ballsEl.textContent = `볼: ${balls} / ${maxBalls}`;

    ball.classList.add("hit");
    setTimeout(() => ball.classList.remove("hit"), 200);

    if (balls >= maxBalls) {
      cancelAnimationFrame(timer);
      feedback.textContent = `경기 종료! 총 ${runs}점`;
      swingBtn.disabled = true;
    }

    setTimeout(() => {
      swinging = false;
    }, 350);
  }

  positionZone();
  timer = requestAnimationFrame(animate);
  swingBtn.addEventListener("click", swing);
  container.querySelector('[data-nav="back"]')?.addEventListener("click", () => {
    cancelAnimationFrame(timer);
    onBack();
  });
  container.querySelector('[data-nav="main"]')?.addEventListener("click", () => {
    cancelAnimationFrame(timer);
    onMain();
  });

  return () => cancelAnimationFrame(timer);
}
