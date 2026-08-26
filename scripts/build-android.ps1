$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $PSScriptRoot
$AndroidDir = Join-Path $Root "android"
$Jbr = "C:\Program Files\Android\Android Studio\jbr"
$Sdk = "D:\Program Files\SDK"

if (-not (Test-Path $Jbr)) {
  throw "未找到 Android Studio JBR: $Jbr"
}
if (-not (Test-Path "$Sdk\platform-tools\adb.exe")) {
  throw "未找到 Android SDK: $Sdk"
}

$env:JAVA_HOME = $Jbr
$env:ANDROID_HOME = $Sdk
$env:ANDROID_SDK_ROOT = $Sdk
$env:PATH = "$Jbr\bin;$Sdk\platform-tools;$Sdk\emulator;$env:PATH"

Push-Location $Root
try {
  # App 必须用根路径 /，不能用 GitHub Pages 的 /sentence-lab/
  $env:BASE_PATH = "/"

  Write-Host ">> 同步 Web 资源到 Android（离线版，不含 Kokoro 模型）..."
  npm run cap:sync:android
  if ($LASTEXITCODE -ne 0) {
    throw "cap:sync failed"
  }

  Write-Host ">> 编译 debug APK..."
  Push-Location $AndroidDir
  .\gradlew.bat assembleDebug
  Pop-Location

  $Apk = Join-Path $AndroidDir "app\build\outputs\apk\debug\app-debug.apk"
  if (-not (Test-Path $Apk)) {
    throw "未找到 APK: $Apk"
  }

  Write-Host ""
  Write-Host "APK 已生成: $Apk"
  Write-Host ""

  $devices = & adb devices | Select-String "device$"
  if ($devices) {
    Write-Host ">> 安装到已连接设备..."
    adb install -r $Apk
    Write-Host "安装完成。"
  } else {
    Write-Host "未检测到已授权的设备。"
    Write-Host "请在手机上允许 USB 调试，然后运行:"
    Write-Host "  adb install -r `"$Apk`""
  }
} finally {
  Pop-Location
}
