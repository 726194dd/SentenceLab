# Android App 测试指南

项目已接入 Capacitor，可在 **Windows / Mac** 上用 Android Studio 编译并安装到手机。

## 前置条件

1. 安装 [Android Studio](https://developer.android.com/studio)（含 Android SDK）
2. Node.js 22+
3. **ffmpeg**（生成音频时需要，必须在 PATH 中可用）
4. 首次打开 Android Studio 时，按向导安装 **SDK Platform**（建议 API 34+）和 **Build-Tools**

## 语音：预生成 Kokoro fp32 音频（Opus 格式）

Android **不再**在运行时加载 Kokoro 模型（WebView 内存不足会闪退）。  
在电脑上一次性生成全部句子的 fp32 音频，经 **Opus 压缩**后打包进 APK，手机直接播放 `.opus` 文件。

Opus 在 Android WebView 的 HTML Audio 元素中可正常播放，体积约为 WAV 的 1/5–1/10。

### 1. 生成音频（只需做一次，约数小时）

```bash
npm install
npx playwright install chromium
# 确保 ffmpeg 可用：ffmpeg -version
npm run generate:audio
```

可选参数：

```bash
# 只生成英文
npm run generate:audio -- --lang en

# 只生成日文
npm run generate:audio -- --lang ja

# 试跑 2 条
npm run generate:audio:test

# 将已有 .wav 批量转为 .opus（保留生成进度）
npm run convert:audio:opus
```

输出目录：

```
public/audio/en/{sentence-id}.opus   # 4000 条英文
public/audio/ja/{sentence-id}.opus   # 2000 条日文
```

已生成的文件会自动跳过，中断后可继续运行。

### 2. 打包并安装

```bash
npm run android:build
```

## 一键打包并安装（已配置）

```bash
npm run android:build
```

会自动：构建前端（含 `public/audio/`）→ 同步 Capacitor → 编译 debug APK → 若手机已连接则安装。

APK 输出路径：

```
android/app/build/outputs/apk/debug/app-debug.apk
```

本地 SDK 配置见 `android/local.properties`（当前：`D:/Program Files/SDK`）。

> **白屏？** App 必须用根路径 `/` 构建（`npm run build:app` 已带 `--base /`）。

## 同步 Web 资源

```bash
npm install
npm run cap:sync
```

## 打开工程并运行

```bash
npm run cap:android
```

## 与 iOS / Web 对比

| | Android | iOS 离线版 | iOS 开发版 | Web |
|---|---------|------------|------------|-----|
| 语音 | **预生成 Kokoro fp32 Opus** | **预生成 Kokoro fp32 Opus** | 原生 TTS | 运行时 Kokoro fp32 |
| 离线 | 完全离线（需先生成音频） | 完全离线（需 `npm run ios:build`） | 是 | 首次需下载模型 |
| 体积 | 约 120–150MB（Opus + 应用） | 约 130–150MB | 较小 | — |

## 常见问题

**Listen 没声音？**  
确认已运行 `npm run generate:audio`，且 `public/audio/` 下有对应 `{id}.opus`。

**APK 很大？**  
`npm run android:build` 使用离线构建，**不会**打包 Kokoro 模型（~467MB）和 Web WASM 运行时。APK 体积主要来自预生成 Opus 音频（6000 条约 120MB）。未生成音频时不要打包 Android。

**点击单词发音？**  
单词级播放无预生成文件，Android 会回退到系统 TTS。

**ffmpeg not found？**  
安装 ffmpeg 并加入 PATH，Windows 可用 `winget install Gyan.FFmpeg` 或从 [ffmpeg.org](https://ffmpeg.org/download.html) 下载。
