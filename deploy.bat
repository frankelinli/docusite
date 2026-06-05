@echo off
chcp 65001 >nul
cd /d "%~dp0"

:menu
cls
echo ============================================
echo     HaoYe Docs 工具菜单
echo ============================================
echo.
echo   [1] Start   - 本地开发服务器
echo   [2] Build   - 构建生产版本
echo   [3] Upload  - 上传到服务器
echo   [4] Ship    - 构建 + 上传
echo   [0] Exit    - 退出
echo.
echo ============================================
set /p choice=请输入选项编号:

if "%choice%"=="1" goto start
if "%choice%"=="2" goto build
if "%choice%"=="3" goto upload
if "%choice%"=="4" goto ship
if "%choice%"=="0" goto end
echo 无效选项，请重试...
timeout /t 1 >nul
goto menu

:start
cls
echo [Start] 启动本地开发服务器...
npm run start
pause
goto menu

:build
cls
echo [Build] 构建生产版本...
npm run build
echo ✅ 构建完成
pause
goto menu

:upload
cls
echo [Upload] 上传到服务器...
npm run upload
echo ✅ 上传完成
pause
goto menu

:ship
cls
echo [Ship] 构建 + 上传...
npm run ship
echo ✅ 构建并上传完成
pause
goto menu

:end
exit /b 0
