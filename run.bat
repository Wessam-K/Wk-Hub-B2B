@echo off
REM =========================================
REM WK-POS Website - Standalone Runner
REM =========================================
REM This script runs the marketing website independently
REM from the main POS application.
REM
REM The website is a separate Next.js application
REM and does NOT share dependencies with admin-panel,
REM desktop, or server components.
REM =========================================

cd /d "%~dp0"

echo.
echo ========================================
echo    WK-POS Marketing Website
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo [ERROR] Failed to install dependencies
        pause
        exit /b 1
    )
)

echo [INFO] Starting Next.js development server...
echo [INFO] Website will be available at: http://localhost:3001
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
