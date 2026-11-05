@echo off
title KPOINT COF - Push to GitHub (kpointcof)
echo =========================================================================
echo   KPOINT COF // WHITE ^& GREY MACRO NEWS TERMINAL - GITHUB SYNC
echo   Repository: https://github.com/kazzo-program/kpointcof
echo =========================================================================
echo.
cd /d "%~dp0"

git remote remove kpointcof 2>nul
git remote add kpointcof https://github.com/kazzo-program/kpointcof.git

echo Pushing to kpointcof...
git push -u kpointcof main --force
if %ERRORLEVEL% equ 0 (
    echo [OK] Successfully synced to kpointcof on GitHub!
) else (
    echo [ERROR] Failed to push to kpointcof. Make sure https://github.com/kazzo-program/kpointcof exists.
)
echo.
pause
