@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "NODE="

where node >nul 2>&1
if %errorlevel%==0 (
  set "NODE=node"
) else if exist "..\cursor\resources\app\resources\helpers\node.exe" (
  set "NODE=..\cursor\resources\app\resources\helpers\node.exe"
) else if exist "F:\스터디 폴더\2026 특수동아리 AION\cursor\resources\app\resources\helpers\node.exe" (
  set "NODE=F:\스터디 폴더\2026 특수동아리 AION\cursor\resources\app\resources\helpers\node.exe"
)

if "%NODE%"=="" (
  echo.
  echo  Node.js를 찾을 수 없습니다.
  echo  https://nodejs.org 에서 설치 후 다시 실행하세요.
  echo.
  pause
  exit /b 1
)

echo.
echo  SCHOOL METRICS 앱을 시작합니다...
echo  브라우저가 안 열리면 주소창에 입력: http://localhost:5173
echo.

"%NODE%" server.cjs

if errorlevel 1 (
  echo.
  echo  서버 시작에 실패했습니다.
  pause
)
