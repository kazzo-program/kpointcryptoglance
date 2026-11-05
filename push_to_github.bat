@echo off
title KPOINT CRYPTO GLANCE - Push to GitHub (kpointcryptoglance)
echo =========================================================================
echo   KPOINT CRYPTO GLANCE // 5-CRYPTO LED TRADINGVIEW TERMINAL - GITHUB SYNC
echo   Repository: https://github.com/kazzo-program/kpointcryptoglance
echo =========================================================================
echo.
cd /d "%~dp0"

git remote remove kpointcryptoglance 2>nul
git remote add kpointcryptoglance https://github.com/kazzo-program/kpointcryptoglance.git

echo Pushing to kpointcryptoglance...
git push -u kpointcryptoglance main --force
if %ERRORLEVEL% equ 0 (
    echo [OK] Successfully synced to kpointcryptoglance on GitHub!
) else (
    echo [ERROR] Failed to push to kpointcryptoglance. Make sure https://github.com/kazzo-program/kpointcryptoglance exists.
)
echo.
pause
