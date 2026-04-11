@echo off
REM Quick Start Script for Smart Registration + Tracker App (Windows)

echo.
echo ==================================================
echo 🔐 Smart Registration + Tracker App
echo Quick Start Setup for Windows
echo ==================================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo 📥 Please download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo ✅ npm version:
npm --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully
echo.

echo ==================================================
echo 🚀 Starting server...
echo ==================================================
echo.
echo ✨ Server will run on: http://localhost:3000
echo 📱 Open a browser and navigate to: http://localhost:3000
echo.
echo 💡 Tips:
echo   - Use DevTools (F12) to inspect requests
echo   - Check Console tab for debug messages
echo   - Monitor Network tab for AJAX calls
echo   - View Application tab for Cookies 8 LocalStorage
echo.
echo Press Ctrl+C to stop the server
echo ==================================================
echo.

call npm start

pause
