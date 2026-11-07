@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [DEAD//SPLIT] Node.js was not found. Install Node.js 18+ or open index.html directly.
  pause
  exit /b 1
)

if not exist "game.js" (
  echo [DEAD//SPLIT] game.js is missing. Building now...
  call npm.cmd run build
  if errorlevel 1 (
    echo [DEAD//SPLIT] Build failed. Opening index.html directly...
    start "" "index.html"
    exit /b 0
  )
)

echo [DEAD//SPLIT] Starting local server at http://127.0.0.1:4173
start "DEAD//SPLIT server" /min cmd /c "node server.js"
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:4173"
endlocal
