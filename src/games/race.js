const LAPS = 3;

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

export function renderRaceGame(container, { onBack, onMain }) {
  let W = 320;
  let H = 420;
  let raf = 0;
  let last = 0;
  let running = false;
  let finished = false;
  const keys = { left: false, right: false };
  let steer = 0; // -1 .. 1 from drag

  const player = { lane: 0, progress: 0, lap: 0, color: "#4dffd4", name: "YOU" };
  const ai = { lane: 0.2, progress: 0.02, lap: 0, color: "#ff4fd8", name: "AI", target: 0 };

  container.innerHTML = `
    <div class="game-panel">
      <h2 class="game-title">레이싱 vs AI</h2>
      <p class="game-desc">드래그/←→로 조향. 먼저 ${LAPS}바퀴!</p>
      <div class="race-stats">
        <span id="race-you">YOU 0/${LAPS}</span>
        <span id="race-ai">AI 0/${LAPS}</span>
      </div>
      <canvas id="race-canvas" class="game-canvas race-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="race-start">시작 / 다시하기</button>
      <p class="game-feedback" id="race-feedback">시작을 누르세요!</p>
      ${navMarkup()}
    </div>
  `;

  const canvas = container.querySelector("#race-canvas");
  const ctx = canvas.getContext("2d");
  const youEl = container.querySelector("#race-you");
  const aiEl = container.querySelector("#race-ai");
  const feedback = container.querySelector("#race-feedback");
  const startBtn = container.querySelector("#race-start");

  // Oval track parameterized 0..1
  function trackPoint(t, inset = 0) {
    const cx = W / 2;
    const cy = H / 2;
    const rx = W * 0.36 - inset;
    const ry = H * 0.38 - inset;
    const a = t * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(a) * rx, y: cy + Math.sin(a) * ry, a };
  }

  function resize() {
    W = Math.min(320, Math.max(260, container.clientWidth - 16 || 300));
    H = Math.round(W * 1.3);
    canvas.width = W;
    canvas.height = H;
  }

  function updateHud() {
    youEl.textContent = `YOU ${Math.min(player.lap, LAPS)}/${LAPS}`;
    aiEl.textContent = `AI ${Math.min(ai.lap, LAPS)}/${LAPS}`;
  }

  function drawCar(car, size = 14) {
    const p = trackPoint(car.progress, 8 + car.lane * 14);
    const next = trackPoint((car.progress + 0.01) % 1, 8 + car.lane * 14);
    const ang = Math.atan2(next.y - p.y, next.x - p.x);
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(ang);
    ctx.fillStyle = car.color;
    ctx.fillRect(-size, -size * 0.45, size * 2, size * 0.9);
    ctx.fillStyle = "#111";
    ctx.fillRect(size * 0.2, -size * 0.3, size * 0.5, size * 0.6);
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#1b5e20";
    ctx.fillRect(0, 0, W, H);

    // outer grass ring already bg; draw asphalt oval
    ctx.beginPath();
    for (let i = 0; i <= 64; i++) {
      const p = trackPoint(i / 64, -18);
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fillStyle = "#37474f";
    ctx.fill();

    ctx.beginPath();
    for (let i = 0; i <= 64; i++) {
      const p = trackPoint(i / 64, 28);
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fillStyle = "#2e7d32";
    ctx.fill();

    // lane lines
    ctx.strokeStyle = "rgba(255,255,255,0.35)";
    ctx.setLineDash([8, 10]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= 64; i++) {
      const p = trackPoint(i / 64, 6);
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // start/finish
    const s0 = trackPoint(0, -16);
    const s1 = trackPoint(0, 26);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(s0.x, s0.y);
    ctx.lineTo(s1.x, s1.y);
    ctx.stroke();

    drawCar(ai, 12);
    drawCar(player, 13);
  }

  function advance(car, speed, dt) {
    const prev = car.progress;
    car.progress += speed * dt;
    if (car.progress >= 1) {
      car.progress -= 1;
      car.lap += 1;
    }
    // detect crossing even if progress wrapped oddly
    if (prev > 0.9 && car.progress < 0.1 && car.lap === 0) {
      // first crossing handled by increment above
    }
  }

  function tick(t) {
    if (!last) last = t;
    const dt = Math.min(0.05, (t - last) / 1000);
    last = t;

    if (running && !finished) {
      let input = steer;
      if (keys.left) input -= 1;
      if (keys.right) input += 1;
      input = Math.max(-1, Math.min(1, input));

      player.lane += input * 2.2 * dt;
      player.lane = Math.max(-1, Math.min(1, player.lane));

      // AI simple: random lane drift + slightly slower base speed
      ai.target += (Math.random() - 0.5) * 1.5 * dt;
      ai.target = Math.max(-0.8, Math.min(0.8, ai.target));
      ai.lane += (ai.target - ai.lane) * 2 * dt;

      const pSpeed = 0.18 + (1 - Math.abs(player.lane) * 0.08) * 0.04;
      const aSpeed = 0.175 + Math.sin(t / 1100) * 0.012;

      const pLapBefore = player.lap;
      const aLapBefore = ai.lap;
      advance(player, pSpeed, dt);
      advance(ai, aSpeed, dt);

      if (player.lap !== pLapBefore || ai.lap !== aLapBefore) updateHud();

      if (player.lap >= LAPS) {
        finished = true;
        running = false;
        feedback.textContent = "승리! 당신이 먼저 3바퀴!";
      } else if (ai.lap >= LAPS) {
        finished = true;
        running = false;
        feedback.textContent = "패배… AI가 먼저 들어왔습니다.";
      }
    }

    draw();
    raf = requestAnimationFrame(tick);
  }

  function start() {
    player.lane = 0;
    player.progress = 0;
    player.lap = 0;
    ai.lane = 0.25;
    ai.progress = 0.01;
    ai.lap = 0;
    ai.target = 0;
    finished = false;
    running = true;
    updateHud();
    feedback.textContent = "달려라!";
  }

  function onPointer(e) {
    e.preventDefault();
    const t = e.touches?.[0] || e;
    const rect = canvas.getBoundingClientRect();
    const x = (t.clientX - rect.left) / rect.width;
    steer = (x - 0.5) * 2;
  }
  function onPointerUp() {
    steer = 0;
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
  updateHud();
  draw();
  raf = requestAnimationFrame(tick);

  startBtn.addEventListener("click", start);
  canvas.addEventListener("pointerdown", onPointer);
  canvas.addEventListener("pointermove", (e) => {
    if (e.buttons) onPointer(e);
  });
  canvas.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("pointerleave", onPointerUp);
  canvas.addEventListener("touchstart", onPointer, { passive: false });
  canvas.addEventListener("touchmove", onPointer, { passive: false });
  canvas.addEventListener("touchend", onPointerUp);
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
