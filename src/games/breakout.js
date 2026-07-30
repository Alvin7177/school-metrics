function navMarkup() {
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

const COLORS = ["#42a5f5", "#ef5350", "#ffee58", "#66bb6a"];
const ROWS = 4;
const COLS = 7;

export function renderBreakoutGame(container, { onBack, onMain }) {
  let score = 0;
  let lives = 3;
  let running = false;
  let won = false;
  let lost = false;
  let raf = 0;
  let last = 0;
  const keys = { left: false, right: false };

  let W = 320;
  let H = 420;
  let paddle = { x: 0, y: 0, w: 70, h: 12 };
  let ball = { x: 0, y: 0, r: 6, vx: 0, vy: 0 };
  let bricks = [];

  container.innerHTML = `
    <div class="game-panel">
      <h2 class="game-title">벽돌깨기</h2>
      <p class="game-desc">드래그 또는 ← → / A D 로 패들을 움직이세요.</p>
      <div class="breakout-stats">
        <span id="bo-lives">생명: ●●●</span>
        <span id="bo-score">점수: 00000</span>
      </div>
      <canvas id="bo-canvas" class="game-canvas breakout-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="bo-start">시작 / 다시하기</button>
      <p class="game-feedback" id="bo-feedback">시작을 눌러 플레이!</p>
      ${navMarkup()}
    </div>
  `;

  const canvas = container.querySelector("#bo-canvas");
  const ctx = canvas.getContext("2d");
  const livesEl = container.querySelector("#bo-lives");
  const scoreEl = container.querySelector("#bo-score");
  const feedback = container.querySelector("#bo-feedback");
  const startBtn = container.querySelector("#bo-start");

  function resize() {
    W = Math.min(320, Math.max(260, container.clientWidth - 16 || 300));
    H = Math.round(W * 1.3);
    canvas.width = W;
    canvas.height = H;
    paddle.y = H - 36;
    paddle.w = W * 0.22;
  }

  function buildBricks() {
    bricks = [];
    const gap = 4;
    const top = 56;
    const bw = (W - gap * (COLS + 1)) / COLS;
    const bh = 16;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        bricks.push({
          x: gap + c * (bw + gap),
          y: top + r * (bh + gap),
          w: bw,
          h: bh,
          color: COLORS[r],
          alive: true,
        });
      }
    }
  }

  function resetBall() {
    paddle.x = (W - paddle.w) / 2;
    ball.x = W / 2;
    ball.y = paddle.y - 20;
    const angle = (-Math.PI / 3) + Math.random() * (Math.PI / 3);
    const speed = Math.min(W, H) * 0.45;
    ball.vx = Math.sin(angle) * speed;
    ball.vy = -Math.abs(Math.cos(angle) * speed);
  }

  function updateHud() {
    livesEl.textContent = `생명: ${"●".repeat(lives)}${"○".repeat(3 - lives)}`;
    scoreEl.textContent = `점수: ${String(score).padStart(5, "0")}`;
  }

  function draw() {
    ctx.fillStyle = "#1a1030";
    ctx.fillRect(0, 0, W, H);

    for (const b of bricks) {
      if (!b.alive) continue;
      ctx.fillStyle = b.color;
      roundRect(ctx, b.x, b.y, b.w, b.h, 4);
      ctx.fill();
    }

    ctx.fillStyle = "#fff";
    roundRect(ctx, paddle.x, paddle.y, paddle.w, paddle.h, 6);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  function tick(t) {
    if (!last) last = t;
    const dt = Math.min(0.033, (t - last) / 1000);
    last = t;

    if (running) {
      const move = W * 1.1 * dt;
      if (keys.left) paddle.x -= move;
      if (keys.right) paddle.x += move;
      paddle.x = Math.max(0, Math.min(W - paddle.w, paddle.x));

      ball.x += ball.vx * dt;
      ball.y += ball.vy * dt;

      if (ball.x < ball.r) { ball.x = ball.r; ball.vx *= -1; }
      if (ball.x > W - ball.r) { ball.x = W - ball.r; ball.vx *= -1; }
      if (ball.y < ball.r) { ball.y = ball.r; ball.vy *= -1; }

      // paddle
      if (
        ball.vy > 0 &&
        ball.y + ball.r >= paddle.y &&
        ball.y - ball.r <= paddle.y + paddle.h &&
        ball.x >= paddle.x &&
        ball.x <= paddle.x + paddle.w
      ) {
        ball.y = paddle.y - ball.r;
        const hit = (ball.x - (paddle.x + paddle.w / 2)) / (paddle.w / 2);
        const speed = Math.hypot(ball.vx, ball.vy) * 1.02;
        const angle = hit * 1.1;
        ball.vx = Math.sin(angle) * speed;
        ball.vy = -Math.abs(Math.cos(angle) * speed);
      }

      // bricks
      for (const b of bricks) {
        if (!b.alive) continue;
        if (
          ball.x + ball.r > b.x &&
          ball.x - ball.r < b.x + b.w &&
          ball.y + ball.r > b.y &&
          ball.y - ball.r < b.y + b.h
        ) {
          b.alive = false;
          score += 10;
          updateHud();
          const overlapL = ball.x + ball.r - b.x;
          const overlapR = b.x + b.w - (ball.x - ball.r);
          const overlapT = ball.y + ball.r - b.y;
          const overlapB = b.y + b.h - (ball.y - ball.r);
          const minX = Math.min(overlapL, overlapR);
          const minY = Math.min(overlapT, overlapB);
          if (minX < minY) ball.vx *= -1;
          else ball.vy *= -1;
          break;
        }
      }

      if (bricks.every((b) => !b.alive)) {
        running = false;
        won = true;
        feedback.textContent = `클리어! 점수 ${score}`;
      }

      if (ball.y > H + 20) {
        lives -= 1;
        updateHud();
        if (lives <= 0) {
          running = false;
          lost = true;
          feedback.textContent = `게임 오버 · ${score}점`;
        } else {
          resetBall();
          feedback.textContent = "생명 -1! 계속…";
        }
      }
    }

    draw();
    raf = requestAnimationFrame(tick);
  }

  function start() {
    score = 0;
    lives = 3;
    won = false;
    lost = false;
    running = true;
    buildBricks();
    resetBall();
    updateHud();
    feedback.textContent = "화이팅!";
  }

  function setPaddleFromClientX(clientX) {
    const rect = canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * W;
    paddle.x = Math.max(0, Math.min(W - paddle.w, x - paddle.w / 2));
  }

  function onPointer(e) {
    e.preventDefault();
    const t = e.touches?.[0] || e;
    setPaddleFromClientX(t.clientX);
  }

  function onKeyDown(e) {
    if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keys.left = true;
    if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keys.right = true;
  }
  function onKeyUp(e) {
    if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keys.left = false;
    if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keys.right = false;
  }

  resize();
  buildBricks();
  resetBall();
  updateHud();
  draw();
  raf = requestAnimationFrame(tick);

  startBtn.addEventListener("click", start);
  canvas.addEventListener("pointerdown", onPointer);
  canvas.addEventListener("pointermove", (e) => {
    if (e.buttons || e.pressure > 0) onPointer(e);
  });
  canvas.addEventListener("touchstart", onPointer, { passive: false });
  canvas.addEventListener("touchmove", onPointer, { passive: false });
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
  window.addEventListener("resize", resize);
  bindNav(container, onBack, onMain);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    window.removeEventListener("resize", resize);
  };
}
