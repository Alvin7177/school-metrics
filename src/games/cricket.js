const MAX_BALLS = 12;

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

export function renderCricketGame(container, { onBack, onMain }) {
  let runs = 0;
  let balls = 0;
  let swinging = false;
  let waiting = true;
  let ballY = 0.08;
  let ballSpeed = 0.55;
  let swingFlash = 0;
  let raf = 0;
  let last = 0;
  let done = false;

  container.innerHTML = `
    <div class="game-panel">
      <h2 class="game-title">크리켓 게임</h2>
      <p class="game-desc">공이 타격존(노란 선)에 올 때 탭/스페이스로 스윙!</p>
      <div class="cricket-stats">
        <span id="cricket-runs">득점: 0</span>
        <span id="cricket-balls">볼: 0 / ${MAX_BALLS}</span>
      </div>
      <canvas id="cricket-canvas" class="game-canvas cricket-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="cricket-swing">SWING!</button>
      <button type="button" class="btn-secondary hidden" id="cricket-retry">다시하기</button>
      <p class="game-feedback" id="cricket-feedback">공이 다가옵니다…</p>
      ${navMarkup()}
    </div>
  `;

  const canvas = container.querySelector("#cricket-canvas");
  const ctx = canvas.getContext("2d");
  const runsEl = container.querySelector("#cricket-runs");
  const ballsEl = container.querySelector("#cricket-balls");
  const feedback = container.querySelector("#cricket-feedback");
  const swingBtn = container.querySelector("#cricket-swing");
  const retryBtn = container.querySelector("#cricket-retry");

  const HIT_ZONE = 0.72;
  const HIT_WINDOW = 0.09;

  function resize() {
    const w = Math.min(320, Math.max(260, container.clientWidth - 16 || 300));
    canvas.width = w;
    canvas.height = Math.round(w * 1.3);
  }

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // sky
    ctx.fillStyle = "#6ec8ff";
    ctx.fillRect(0, 0, w, h * 0.22);

    // crowd
    ctx.fillStyle = "#3d8c3a";
    ctx.fillRect(0, h * 0.18, w, h * 0.12);
    for (let i = 0; i < 18; i++) {
      ctx.fillStyle = `hsl(${(i * 47) % 360} 70% 45%)`;
      ctx.beginPath();
      ctx.arc(10 + i * (w / 17), h * 0.22, 6, 0, Math.PI * 2);
      ctx.fill();
    }

    // field
    ctx.fillStyle = "#4caf50";
    ctx.fillRect(0, h * 0.28, w, h * 0.72);

    // pitch
    const pw = w * 0.28;
    const px = (w - pw) / 2;
    const py = h * 0.3;
    const ph = h * 0.58;
    ctx.fillStyle = "#c4a574";
    ctx.beginPath();
    ctx.moveTo(px + pw * 0.15, py);
    ctx.lineTo(px + pw * 0.85, py);
    ctx.lineTo(px + pw, py + ph);
    ctx.lineTo(px, py + ph);
    ctx.closePath();
    ctx.fill();

    // hit zone line
    const zy = py + ph * HIT_ZONE;
    ctx.strokeStyle = "#fff41a";
    ctx.lineWidth = 3;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(px - 8, zy);
    ctx.lineTo(px + pw + 8, zy);
    ctx.stroke();
    ctx.setLineDash([]);

    // bowler (top)
    ctx.fillStyle = "#8d6e63";
    ctx.beginPath();
    ctx.ellipse(w / 2, py + 18, 10, 14, 0, 0, Math.PI * 2);
    ctx.fill();

    // batter (bottom)
    ctx.fillStyle = "#66bb6a";
    ctx.beginPath();
    ctx.ellipse(w / 2, py + ph - 10, 16, 22, 0, 0, Math.PI * 2);
    ctx.fill();
    // bat
    ctx.save();
    ctx.translate(w / 2 + 14, py + ph - 18);
    ctx.rotate(swingFlash > 0 ? -0.9 : -0.2);
    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(-4, -28, 8, 36);
    ctx.restore();

    // ball
    if (!waiting && !done) {
      const by = py + ph * ballY;
      const bx = w / 2 + Math.sin(ballY * 6) * 4;
      const br = 7 + ballY * 4;
      ctx.beginPath();
      ctx.arc(bx, by, br, 0, Math.PI * 2);
      ctx.fillStyle = "#ef5350";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    if (swingFlash > 0) {
      ctx.fillStyle = "rgba(255,244,26,0.15)";
      ctx.fillRect(0, zy - 20, w, 40);
    }
  }

  function nextBall() {
    if (balls >= MAX_BALLS) {
      done = true;
      swingBtn.disabled = true;
      swingBtn.classList.add("hidden");
      retryBtn.classList.remove("hidden");
      feedback.textContent = `경기 종료! 총 ${runs}점`;
      return;
    }
    waiting = false;
    swinging = false;
    ballY = 0.05;
    ballSpeed = 0.48 + Math.random() * 0.35;
    feedback.textContent = "타이밍에 맞춰 스윙!";
  }

  function swing(e) {
    e?.preventDefault?.();
    if (done || swinging || waiting) return;
    swinging = true;
    swingFlash = 0.25;
    balls += 1;
    ballsEl.textContent = `볼: ${balls} / ${MAX_BALLS}`;

    const dist = Math.abs(ballY - HIT_ZONE);
    let gained = 0;
    let msg = "헛스윙!";
    if (dist <= HIT_WINDOW * 0.25) {
      gained = 6;
      msg = "식스! +6";
    } else if (dist <= HIT_WINDOW * 0.5) {
      gained = 4;
      msg = "포! +4";
    } else if (dist <= HIT_WINDOW * 0.75) {
      gained = 2;
      msg = "투런! +2";
    } else if (dist <= HIT_WINDOW) {
      gained = 1;
      msg = "싱글! +1";
    }

    runs += gained;
    runsEl.textContent = `득점: ${runs}`;
    feedback.textContent = msg;
    waiting = true;

    setTimeout(() => {
      if (!done) nextBall();
      if (balls >= MAX_BALLS) {
        done = true;
        swingBtn.disabled = true;
        swingBtn.classList.add("hidden");
        retryBtn.classList.remove("hidden");
        feedback.textContent = `경기 종료! 총 ${runs}점`;
      }
    }, 650);
  }

  function tick(t) {
    if (!last) last = t;
    const dt = Math.min(0.05, (t - last) / 1000);
    last = t;

    if (!waiting && !done) {
      ballY += ballSpeed * dt;
      if (ballY > 1.05) {
        waiting = true;
        swinging = true;
        balls += 1;
        ballsEl.textContent = `볼: ${balls} / ${MAX_BALLS}`;
        feedback.textContent = "놓침!";
        setTimeout(() => {
          swinging = false;
          if (balls >= MAX_BALLS) {
            done = true;
            swingBtn.disabled = true;
            swingBtn.classList.add("hidden");
            retryBtn.classList.remove("hidden");
            feedback.textContent = `경기 종료! 총 ${runs}점`;
          } else nextBall();
        }, 500);
      }
    }

    if (swingFlash > 0) swingFlash -= dt;
    draw();
    raf = requestAnimationFrame(tick);
  }

  function reset() {
    runs = 0;
    balls = 0;
    done = false;
    swinging = false;
    swingFlash = 0;
    runsEl.textContent = "득점: 0";
    ballsEl.textContent = `볼: 0 / ${MAX_BALLS}`;
    swingBtn.disabled = false;
    swingBtn.classList.remove("hidden");
    retryBtn.classList.add("hidden");
    nextBall();
  }

  function onKey(e) {
    if (e.code === "Space" || e.key === " ") {
      e.preventDefault();
      swing(e);
    }
  }

  resize();
  nextBall();
  raf = requestAnimationFrame(tick);

  swingBtn.addEventListener("click", swing);
  swingBtn.addEventListener("touchstart", swing, { passive: false });
  canvas.addEventListener("pointerdown", swing);
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
