# iOS App 测试指南

本项目已接入 [Capacitor](https://capacitorjs.com/)，可在 Mac 上用 Xcode 编译并在 iPhone / 模拟器上运行。

## 前置条件

- **Mac** + **Xcode 15+**（iOS 应用只能在 macOS 上编译）
- Apple ID（免费账号即可在真机测试，7 天签名）
- Node.js 22+

> Windows 上可以生成 `ios/` 工程并同步 Web 资源，但**无法在本机直接运行 Xcode**。需要把项目拷到 Mac，或 Mac 上 `git pull` 后继续。

## 一键同步 Web 资源到 iOS 工程

```bash
npm run cap:sync
```

等价于：构建前端 → 复制 `dist/` 到 iOS 工程。

## 在 Mac 上打开并运行

```bash
npm run cap:ios
```

或在 Xcode 中打开 `ios/App/App.xcworkspace`（注意是 `.xcworkspace`，不是 `.xcodeproj`）。

1. 顶部选择目标：**App** + **iPhone 模拟器**（或已连接的 iPhone）
2. 点击 **Run (▶)**
3. 首次真机运行：Xcode → Signing & Capabilities → Team 选你的 Apple ID

## 更新代码后

每次改完前端代码，重新同步：

```bash
npm run cap:sync
```

然后在 Xcode 里再点 Run。不必重复 `cap add ios`。

## 说明

- App 内嵌 WKWebView，加载本地 `dist` 静态资源，**不依赖 GitHub Pages**
- iOS 上语音使用**系统 TTS**（项目里 Kokoro 在 iOS 被禁用），Listen 响应较快
- 安装包体积远小于「内置 Kokoro 模型」方案

## 常见问题

**Q: CocoaPods 报错？**

```bash
cd ios/App
pod install
cd ../..
npm run cap:ios
```

**Q: 白屏？**

确认已执行 `npm run cap:sync`，且 `dist/index.html` 存在。

**Q: 想在 Windows 上直接装到 iPhone？**

不行，必须经 Mac + Xcode（或云端 Mac CI，如 GitHub Actions macOS runner + 导出 ipa）。
