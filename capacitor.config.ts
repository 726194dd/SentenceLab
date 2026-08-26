import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.sentencelab.app",
  appName: "Sentence Lab",
  webDir: "dist",
  ios: {
    // CSS env(safe-area-inset-*) owns insets; avoid fighting WKWebView contentInset.
    contentInset: "never",
    // Native WKWebView scrolling — CSS overflow scroll is janky on iOS.
    scrollEnabled: true,
  },
  plugins: {
    Keyboard: {
      // Do not resize/push the WebView when the keyboard opens — keeps the fixed
      // practice toolbar truly pinned at the top of the screen.
      resize: "none",
    },
  },
  server: {
    androidScheme: "https",
  },
};

export default config;
