@echo off
echo.
echo ========================================
echo Fridge-to-Feast Setup Script (Windows)
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js is not installed
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js is installed
node -v
echo.

REM Install root dependencies
echo Installing root dependencies...
call npm install
echo Root dependencies installed
echo.

REM Install server dependencies
echo Installing server dependencies...
cd server
call npm install
echo Server dependencies installed
echo.

REM Setup server .env file
if not exist .env (
    echo Setting up server .env file...
    copy .env.example .env
    echo .env file created
    echo WARNING: Please edit server\.env and add your Gemini API key
) else (
    echo .env file already exists
)
echo.

REM Install client dependencies
echo Installing client dependencies...
cd ..\client
call npm install
echo Client dependencies installed
echo.

REM Setup client .env file
if not exist .env (
    echo Setting up client .env file...
    copy .env.example .env
    echo Client .env file created
) else (
    echo Client .env file already exists
)
echo.

REM Go back to root
cd ..

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo.
echo 1. Get your Gemini API key from: https://makersuite.google.com/app/apikey
echo 2. Edit server\.env and add your API key
echo 3. Run the app:
echo.
echo    npm run dev (runs both frontend and backend)
echo.
echo    OR run separately:
echo    npm run dev:server (backend on port 5000)
echo    npm run dev:client (frontend on port 3000)
echo.
echo Frontend will be at: http://localhost:3000
echo Backend will be at: http://localhost:5000
echo.
echo Happy cooking!
echo.
pause