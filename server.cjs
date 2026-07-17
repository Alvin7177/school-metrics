const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const PORT = 5173;
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

function openBrowser() {
  const url = `http://localhost:${PORT}`;
  exec(`cmd /c start "" "${url}"`, (err) => {
    if (err) console.log(`브라우저를 직접 여세요: ${url}`);
  });
}

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";

  const filePath = path.normalize(path.join(ROOT, urlPath));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  function sendFile(targetPath) {
    fs.readFile(targetPath, (err, data) => {
      if (err) {
        // Vite/public 스타일: /title-bg.png → public/title-bg.png
        const fromPublic = path.normalize(path.join(ROOT, "public", urlPath));
        if (
          targetPath !== fromPublic &&
          fromPublic.startsWith(path.join(ROOT, "public")) &&
          fs.existsSync(fromPublic)
        ) {
          sendFile(fromPublic);
          return;
        }
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("404 Not Found");
        return;
      }

      const ext = path.extname(targetPath).toLowerCase();
      const headers = { "Content-Type": MIME[ext] || "application/octet-stream" };
      if (ext === ".html" || ext === ".css" || ext === ".js") {
        headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
        headers.Pragma = "no-cache";
      }
      res.writeHead(200, headers);
      res.end(data);
    });
  }

  sendFile(filePath);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log("");
    console.log("  이미 실행 중입니다!");
    console.log(`  브라우저에서 열기: http://localhost:${PORT}`);
    console.log("");
    openBrowser();
    return;
  }

  console.error("서버 오류:", err.message);
  process.exit(1);
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log("");
  console.log("  SCHOOL METRICS 실행 중");
  console.log(`  브라우저에서 열기: ${url}`);
  console.log("");
  console.log("  종료: 이 창에서 Ctrl+C");
  console.log("");
  openBrowser();
});
