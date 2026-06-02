@echo off
chcp 65001 >nul
echo ============================================
echo   myLifeDocs GitHub 推送
echo ============================================
echo.

cd /d "%~dp0"

echo [1/3] 暂存变更...
git add -A
if %errorlevel% neq 0 (
    echo ❌ git add 失败！
    pause
    exit /b 1
)
echo ✅ 已暂存变更
echo.

echo [2/3] 提交变更...
git commit -m "🚀 deploy: %date% %time%" 2>nul
echo ✅ 提交步骤完成
echo.

echo [3/3] 推送到 GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ 推送失败！
    pause
    exit /b 1
)
echo.
echo ✅ docusite 已推送到 GitHub，GitHub Actions 将自动构建并部署
echo ============================================
pause
