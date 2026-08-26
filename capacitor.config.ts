import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.sentencelab.app",
  appName: "Sentence Lab",
  webDir: "dist",
  ios: {
    contentInset: "automatic",
    scrollEnabled: false,
  },
  server: {
    androidScheme: "https",
  },
};

export default config;
