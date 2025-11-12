@echo off
REM Script to start the Snowboard Slang Converter development server

echo 🏂 Starting Snowboard Slang Converter...
echo.

REM Check for Node.js
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed or not in PATH
    echo.
    echo Please install Node.js first:
    echo   - Download from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Check for npm
where npm >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not found
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo ✅ npm version:
npm --version
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed
    echo.
)

REM Start the development server
echo 🚀 Starting development server...
echo    The app will be available at http://localhost:5173
echo    Press Ctrl+C to stop the server
echo.
call npm run dev

