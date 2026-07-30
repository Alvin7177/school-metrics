/** 표준 다트보드 섹터 (위쪽 20부터 시계방향) */
const SECTORS = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
const MAX_THROWS = 8;

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

function scoreHit(nx, ny) {
  const r = Math.hypot(nx, ny);
  if (r > 1) return { points: 0, label: "보드 밖" };
  if (r <= 0.07) return { points: 50, label: "더블 불 · 50" };
  if (r <= 0.14) return { points: 25, label: "싱글 불 · 25" };

  let angle = Math.atan2(nx, -ny);
  if (angle < 0) angle += Math.PI * 2;
  const sector = Math.floor(((angle + Math.PI / 20) % (Math.PI * 2)) / (Math.PI / 10));
  const base = SECTORS[sector];

  if (r >= 0.9) return { points: base * 2, label: `더블 ${base} · ${base * 2}` };
  if (r >= 0.52 && r <= 0.62) return { points: base * 3, label: `트리플 ${base} · ${base * 3}` };
  return { points: base, label: `싱글 ${base} · ${base}` };
}

function drawBoard(ctx, size, marks) {
  const cx = size / 2;
  const cy = size / 2;
  const R = size * 0.42;

  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = "#1a1a1a";
  ctx.beginPath();
  ctx.arc(cx, cy, R * 1.08, 0, Math.PI * 2);
  ctx.fill();

  for (let i = 0; i < 20; i++) {
    const a0 = (-Math.PI / 2) - Math.PI / 20 + (i * Math.PI) / 10;
    const a1 = a0 + Math.PI / 10;
    const dark = i % 2 === 0;

    // single outer
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, R * 0.9, a0, a1);
    ctx.closePath();
    ctx.fillStyle = dark ? "#111" : "#ece6d8";
    ctx.fill();

    // single inner
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, R * 0.52, a0, a1);
    ctx.closePath();
    ctx.fillStyle = dark ? "#1c1c1c" : "#f5f0e6";
    ctx.fill();

    // double ring
    ctx.beginPath();
    ctx.arc(cx, cy, R, a0, a1);
    ctx.arc(cx, cy, R * 0.9, a1, a0, true);
    ctx.closePath();
    ctx.fillStyle = i % 2 === 0 ? "#c4122f" : "#0a7a3c";
    ctx.fill();

    // triple ring
    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.62, a0, a1);
    ctx.arc(cx, cy, R * 0.52, a1, a0, true);
    ctx.closePath();
    ctx.fillStyle = i % 2 === 0 ? "#c4122f" : "#0a7a3c";
    ctx.fill();
  }

  // wires
  ctx.strokeStyle = "rgba(180,180,180,0.55)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 20; i++) {
    const a = (-Math.PI / 2) - Math.PI / 20 + (i * Math.PI) / 10;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
    ctx.stroke();
  }
  [0.9, 0.62, 0.52, 0.14, 0.07].forEach((f) => {
    ctx.beginPath();
    ctx.arc(cx, cy, R * f, 0, Math.PI * 2);
    ctx.stroke();
  });

  // bull
  ctx.beginPath();
  ctx.arc(cx, cy, R * 0.14, 0, Math.PI * 2);
  ctx.fillStyle = "#0a7a3c";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx, cy, R * 0.07, 0, Math.PI * 2);
  ctx.fillStyle = "#c4122f";
  ctx.fill();

  // numbers
  ctx.fillStyle = "#fff";
  ctx.font = `bold ${Math.max(10, size * 0.045)}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let i = 0; i < 20; i++) {
    const a = (-Math.PI / 2) + (i * Math.PI) / 10;
    const x = cx + Math.cos(a) * R * 1.14;
    const y = cy + Math.sin(a) * R * 1.14;
    ctx.fillText(String(SECTORS[i]), x, y);
  }

  for (const m of marks) {
    ctx.beginPath();
    ctx.arc(cx + m.nx * R, cy + m.ny * R, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#fff700";
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.stroke();
  }
}

export function renderDartGame(container, { onBack, onMain }) {
  let score = 0;
  let throwsLeft = MAX_THROWS;
  let phase = "vertical"; // vertical | horizontal | result | done
  let vPos = 0.5;
  let hPos = 0.5;
  let vDir = 1;
  let hDir = 1;
  let raf = 0;
  let last = 0;
  const marks = [];
  const speed = 1.35;

  container.innerHTML = `
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">바가 가운데 올 때 탭/스페이스로 멈추세요. (세로 → 가로)</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: ${MAX_THROWS}</span>
      </div>
      <canvas id="dart-canvas" class="dart-canvas" width="300" height="300"></canvas>
      <div class="aim-bars" id="aim-bars">
        <div class="aim-bar aim-bar-v" aria-label="세로 조준">
          <div class="aim-track"><span class="aim-center"></span><span class="aim-dot" id="aim-v"></span></div>
          <span class="aim-label">세로</span>
        </div>
        <div class="aim-bar aim-bar-h" aria-label="가로 조준">
          <div class="aim-track"><span class="aim-center"></span><span class="aim-dot" id="aim-h"></span></div>
          <span class="aim-label">가로</span>
        </div>
      </div>
      <button type="button" class="btn-go" id="dart-stop">멈추기</button>
      <button type="button" class="btn-secondary hidden" id="dart-retry">다시하기</button>
      <p class="game-feedback" id="dart-feedback">세로 바를 가운데에 맞춰 멈추세요!</p>
      ${navMarkup()}
    </div>
  `;

  const canvas = container.querySelector("#dart-canvas");
  const ctx = canvas.getContext("2d");
  const scoreEl = container.querySelector("#dart-score");
  const throwsEl = container.querySelector("#dart-throws");
  const feedback = container.querySelector("#dart-feedback");
  const stopBtn = container.querySelector("#dart-stop");
  const retryBtn = container.querySelector("#dart-retry");
  const aimV = container.querySelector("#aim-v");
  const aimH = container.querySelector("#aim-h");
  const barV = container.querySelector(".aim-bar-v");
  const barH = container.querySelector(".aim-bar-h");

  function resize() {
    const w = Math.min(300, container.clientWidth || 300);
    canvas.width = w;
    canvas.height = w;
    drawBoard(ctx, w, marks);
  }

  function updateDots() {
    aimV.style.top = `${vPos * 100}%`;
    aimH.style.left = `${hPos * 100}%`;
    barV.classList.toggle("active", phase === "vertical");
    barH.classList.toggle("active", phase === "horizontal");
  }

  function tick(t) {
    if (!last) last = t;
    const dt = Math.min(0.05, (t - last) / 1000);
    last = t;

    if (phase === "vertical") {
      vPos += vDir * speed * dt;
      if (vPos >= 1) { vPos = 1; vDir = -1; }
      if (vPos <= 0) { vPos = 0; vDir = 1; }
    } else if (phase === "horizontal") {
      hPos += hDir * speed * dt;
      if (hPos >= 1) { hPos = 1; hDir = -1; }
      if (hPos <= 0) { hPos = 0; hDir = 1; }
    }

    updateDots();
    raf = requestAnimationFrame(tick);
  }

  function throwDart() {
    // map 0..1 bar to -1..1 board coords; center of bar = bullseye
    const ny = (vPos - 0.5) * 2.05;
    const nx = (hPos - 0.5) * 2.05;
    const hit = scoreHit(nx, ny);
    marks.push({ nx, ny });
    score += hit.points;
    throwsLeft -= 1;
    scoreEl.textContent = `점수: ${score}`;
    throwsEl.textContent = `남은 횟수: ${throwsLeft}`;
    drawBoard(ctx, canvas.width, marks);
    feedback.textContent = hit.label;

    if (throwsLeft <= 0) {
      phase = "done";
      stopBtn.classList.add("hidden");
      retryBtn.classList.remove("hidden");
      feedback.textContent = `게임 종료! 최종 ${score}점`;
      return;
    }

    phase = "vertical";
    vPos = Math.random();
    hPos = Math.random();
    feedback.textContent = "세로 바를 가운데에 맞춰 멈추세요!";
  }

  function onStop(e) {
    e?.preventDefault?.();
    if (phase === "vertical") {
      phase = "horizontal";
      feedback.textContent = "가로 바를 가운데에 맞춰 멈추세요!";
      return;
    }
    if (phase === "horizontal") {
      phase = "result";
      throwDart();
    }
  }

  function onKey(e) {
    if (e.code === "Space" || e.key === " ") {
      e.preventDefault();
      onStop(e);
    }
  }

  function reset() {
    score = 0;
    throwsLeft = MAX_THROWS;
    phase = "vertical";
    marks.length = 0;
    vPos = 0.2;
    hPos = 0.2;
    scoreEl.textContent = `점수: 0`;
    throwsEl.textContent = `남은 횟수: ${MAX_THROWS}`;
    feedback.textContent = "세로 바를 가운데에 맞춰 멈추세요!";
    stopBtn.classList.remove("hidden");
    retryBtn.classList.add("hidden");
    drawBoard(ctx, canvas.width, marks);
  }

  resize();
  updateDots();
  raf = requestAnimationFrame(tick);

  stopBtn.addEventListener("click", onStop);
  stopBtn.addEventListener("touchstart", onStop, { passive: false });
  retryBtn.addEventListener("click", reset);
  window.addEventListener("keydown", onKey);
  window.addEventListener("resize", resize);
  bindNav(container, onBack, onMain);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("keydown", onKey);
    window.removeEventListener("resize", resize);
  };
}
