@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "NODE="
where node >nul 2>&1
if %errorlevel%==0 (
  set "NODE=node"
) else if exist "F:\스터디 폴더\2026 특수동아리 AION\cursor\resources\app\resources\helpers\node.exe" (
  set "NODE=F:\스터디 폴더\2026 특수동아리 AION\cursor\resources\app\resources\helpers\node.exe"
)

if "%NODE%"=="" (
  echo Node.js를 찾을 수 없습니다.
  pause
  exit /b 1
)

where npx >nul 2>&1
if errorlevel 1 (
  echo npx가 필요합니다. Node.js를 설치해 주세요: https://nodejs.org
  pause
  exit /b 1
)

echo.
echo  SCHOOL METRICS 공개 링크를 만듭니다...
echo  (이 PC가 켜져 있고 이 창을 닫지 않은 동안만 링크가 살아 있습니다)
echo.

if not exist "dist\index.html" (
  echo  빌드 중...
  call npm install
  call npm run build
)

start "SCHOOL-METRICS-SERVE" cmd /c "npx --yes serve dist -l 5174"
timeout /t 3 /nobreak >nul

echo.
echo  아래 명령이 끝나면 HTTPS 주소가 나옵니다.
echo  그 주소를 복사해서 폰/브라우저에 붙여넣으세요.
echo  종료: Ctrl+C
echo.

npx --yes cloudflared tunnel --url http://localhost:5174

pause
