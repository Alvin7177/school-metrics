export function renderMinesweeperGame(container, { onBack, onMain }) {
  const size = 6;
  const mines = 6;
  let board = [];
  let revealed = 0;
  let gameOver = false;

  function init() {
    board = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => ({
        mine: false,
        open: false,
        flag: false,
        count: 0,
      }))
    );

    let placed = 0;
    while (placed < mines) {
      const r = Math.floor(Math.random() * size);
      const c = Math.floor(Math.random() * size);
      if (board[r][c].mine) continue;
      board[r][c].mine = true;
      placed++;
    }

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c].mine) continue;
        board[r][c].count = countNeighbors(r, c);
      }
    }
    revealed = 0;
    gameOver = false;
  }

  function countNeighbors(r, c) {
    let n = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (!dr && !dc) continue;
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < size && nc >= 0 && nc < size && board[nr][nc].mine) n++;
      }
    }
    return n;
  }

  function render() {
    container.innerHTML = `
      <div class="game-panel">
        <h2 class="game-title">지뢰찾기</h2>
        <p class="game-desc">길게 눌러 깃발, 짧게 눌러 열기</p>
        <p class="game-feedback" id="mine-feedback">안전한 칸을 모두 찾으세요!</p>
        <div class="mine-grid" id="mine-grid"></div>
        <button type="button" class="btn-secondary" id="mine-reset">다시 하기</button>
        <div class="nav-row">
          <button type="button" class="nav-btn" data-nav="back">뒤로</button>
          <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
        </div>
      </div>
    `;

    const grid = container.querySelector("#mine-grid");
    const feedback = container.querySelector("#mine-feedback");

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "mine-cell";
        btn.dataset.r = String(r);
        btn.dataset.c = String(c);
        btn.textContent = "";
        grid.appendChild(btn);
      }
    }

    function paint() {
      grid.querySelectorAll(".mine-cell").forEach((btn) => {
        const r = Number(btn.dataset.r);
        const c = Number(btn.dataset.c);
        const cell = board[r][c];
        btn.classList.toggle("open", cell.open);
        btn.classList.toggle("flag", cell.flag);
        btn.classList.toggle("mine", cell.open && cell.mine);
        if (cell.open && !cell.mine && cell.count > 0) {
          btn.textContent = String(cell.count);
        } else if (cell.flag) {
          btn.textContent = "⚑";
        } else {
          btn.textContent = "";
        }
      });
    }

    function openCell(r, c) {
      if (gameOver || board[r][c].open || board[r][c].flag) return;

      board[r][c].open = true;
      revealed++;

      if (board[r][c].mine) {
        gameOver = true;
        feedback.textContent = "지뢰! 다시 도전해보세요.";
        for (let rr = 0; rr < size; rr++) {
          for (let cc = 0; cc < size; cc++) {
            if (board[rr][cc].mine) board[rr][cc].open = true;
          }
        }
        paint();
        return;
      }

      if (board[r][c].count === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < size && nc >= 0 && nc < size && !board[nr][nc].open) {
              openCell(nr, nc);
            }
          }
        }
      }

      if (revealed === size * size - mines) {
        gameOver = true;
        feedback.textContent = "클리어! 잘 쉬었어요.";
      }

      paint();
    }

    let pressTimer = null;

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".mine-cell");
      if (!btn || gameOver) return;
      const r = Number(btn.dataset.r);
      const c = Number(btn.dataset.c);
      openCell(r, c);
    });

    grid.addEventListener("touchstart", (e) => {
      const btn = e.target.closest(".mine-cell");
      if (!btn || gameOver) return;
      const r = Number(btn.dataset.r);
      const c = Number(btn.dataset.c);
      pressTimer = setTimeout(() => {
        board[r][c].flag = !board[r][c].flag;
        paint();
        pressTimer = null;
      }, 450);
    });

    grid.addEventListener("touchend", () => {
      if (pressTimer) clearTimeout(pressTimer);
    });

    container.querySelector("#mine-reset").addEventListener("click", () => {
      init();
      feedback.textContent = "안전한 칸을 모두 찾으세요!";
      paint();
    });

    container.querySelector('[data-nav="back"]')?.addEventListener("click", onBack);
    container.querySelector('[data-nav="main"]')?.addEventListener("click", onMain);

    paint();
  }

  init();
  render();
}
