@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "GIT_CONFIG_COUNT=1"
set "GIT_CONFIG_KEY_0=safe.directory"
set "GIT_CONFIG_VALUE_0=%CD:\=/%"

echo.
echo  SCHOOL METRICS 영구 링크 배포
echo.

gh auth status >nul 2>&1
if errorlevel 1 (
  echo  GitHub 로그인이 필요합니다.
  echo  이 창에서 로그인 화면이 열리면 안내를 따라 주세요.
  echo.
  gh auth login -h github.com -p https -w
  if errorlevel 1 (
    echo  로그인 실패
    pause
    exit /b 1
  )
)

echo  [1/4] 빌드 중...
call npx vite build
if errorlevel 1 (
  echo  빌드 실패
  pause
  exit /b 1
)

git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
  git init
)

git status --porcelain | findstr /R "." >nul 2>&1
if not errorlevel 1 (
  git add .gitignore index.html package.json package-lock.json public scripts server.cjs src vite.config.js "시작.bat" "배포.bat" "공개링크.bat" "브라우저열기.bat" "영구배포.bat" 2>nul
  git -c user.name="Alvin7177" -c user.email="Alvin7177@users.noreply.github.com" commit -m "Deploy SCHOOL METRICS as a static web app."
)

git remote get-url origin >nul 2>&1
if errorlevel 1 (
  echo  [2/4] GitHub 저장소 생성...
  gh repo create school-metrics --public --source=. --remote=origin --description "SCHOOL METRICS - 해연중 내신관리"
  if errorlevel 1 (
    echo  school-metrics 이름 사용 불가. school-metrics-haeyeon 으로 시도...
    gh repo create school-metrics-haeyeon --public --source=. --remote=origin --description "SCHOOL METRICS - 해연중 내신관리"
    if errorlevel 1 (
      echo  저장소 생성 실패
      pause
      exit /b 1
    )
  )
)

echo  [3/4] 코드 업로드...
git branch -M master
git push -u origin master
if errorlevel 1 (
  echo  push 실패
  pause
  exit /b 1
)

echo  [4/4] GitHub Pages 배포...
call npx --yes gh-pages -d dist -u "Alvin7177 <Alvin7177@users.noreply.github.com>"
if errorlevel 1 (
  echo  Pages 배포 실패
  pause
  exit /b 1
)

for /f "delims=" %%i in ('gh repo view --json nameWithOwner -q .nameWithOwner') do set REPO=%%i
for /f "delims=" %%i in ('gh api "users/Alvin7177" -q .login') do set USER=%%i

echo.
echo  ========================================
echo   영구 링크 (1~2분 후 열림):
echo   https://alvin7177.github.io/school-metrics/
echo   (저장소 이름이 다르면 GitHub Pages 설정 확인)
echo  ========================================
echo.
echo  저장소: https://github.com/%REPO%
echo.
pause
