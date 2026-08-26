# iOS App 测试指南

本项目已接入 [Capacitor](https://capacitorjs.com/)，可在 Mac 上用 Xcode 编译并在 iPhone / 模拟器上运行。

## 前置条件

- **Mac** + **Xcode 15+**（iOS 应用只能在 macOS 上编译）
- Apple ID（免费账号即可在真机测试，7 天签名）
- Node.js 22+
- **iOS 17.4+**（离线版 Listen 播放 Opus 音频，需系统支持 Opus 解码）

> Windows 上可以改代码并 `git push`，但 **iOS 打包必须在 Mac 上** 完成。

## 两种构建模式

| 模式 | 命令 | 语音 | 适用 |
|------|------|------|------|
| **离线版（推荐）** | `npm run ios:build` | 预生成 Kokoro fp32 Opus | 完全离线、音质与 Android 一致 |
| 开发版 | `npm run cap:sync` | 系统 TTS | 快速调试 UI，无需音频文件 |

## 离线版打包（含 6000 条 Opus 音频）

### 1. 在 Mac 上拉取项目

```bash
git clone https://github.com/726194dd/SentenceLab.git
cd SentenceLab
git lfs install   # 若仓库含 LFS 大文件
git lfs pull      # 可选；离线 iOS 只需 public/audio/
npm install
```

确认 `public/audio/en/` 和 `public/audio/ja/` 下各有 4000 / 2000 个 `.opus` 文件。若缺失，在开发机上运行 `npm run generate:audio` 后 push 或拷贝到 Mac。

### 2. 一键同步离线资源到 iOS 工程

```bash
npm run ios:build
```

等价于：离线 Vite 构建（含 `public/audio/`，剔除 Kokoro 模型）→ `cap sync ios`。

### 3. 在 Xcode 中运行 / 归档

```bash
npm run cap:ios
```

1. 顶部选择 **App** + **iPhone 模拟器**（或已连接的 iPhone）
2. **Signing & Capabilities** → **Team** 选你的 Apple ID
3. 点击 **Run (▶)** 或 **Product → Archive** 导出 ipa

离线版安装包体积约 **130–150 MB**（主要为 Opus 音频，不含 Kokoro 模型）。

## 开发版（系统 TTS，不含预生成音频）

```bash
npm run cap:sync
npm run cap:ios
```

- 语音使用**系统 TTS**，Listen 响应快，但音质因设备而异
- 安装包体积小，适合改 UI 时快速迭代

## 更新代码后

离线版：

```bash
npm run ios:build
# Xcode → Run
```

开发版：

```bash
npm run cap:sync
# Xcode → Run
```

## 与 Android / Web 对比

| | Android | iOS 离线版 | iOS 开发版 | Web |
|---|---------|------------|------------|-----|
| 语音 | 预生成 Opus | 预生成 Opus | 系统 TTS | 运行时 Kokoro fp32 |
| 离线 | ✅ | ✅ | ✅ | 首次需下载模型 |
| 构建命令 | `npm run android:build` | `npm run ios:build` | `npm run cap:sync` | — |

## 常见问题

**Listen 没声音（离线版）？**  
确认已执行 `npm run ios:build`（不是 `cap:sync`），且 `public/audio/{lang}/{id}.opus` 存在。需要 **iOS 17.4+** 才能播放 Opus。

**白屏？**  
确认 `dist/index.html` 存在，且使用的是 `ios:build` 或 `cap:sync` 之后的内容。

**CocoaPods / SPM 报错？**  
Capacitor 8 默认使用 SPM。若插件异常，可尝试：

```bash
cd ios/App
xcodebuild -resolvePackageDependencies
cd ../..
npm run cap:ios
```

**TestFlight / App Store？**  
需要付费 Apple Developer 账号（$99/年）。Archive 后在 Xcode Organizer 上传。
