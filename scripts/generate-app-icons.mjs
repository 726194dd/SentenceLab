import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = path.join(ROOT, "assets", "app-icon-1024.png");
const ANDROID_RES = path.join(ROOT, "android", "app", "src", "main", "res");
const IOS_ICON = path.join(
  ROOT,
  "ios",
  "App",
  "App",
  "Assets.xcassets",
  "AppIcon.appiconset",
  "AppIcon-512@2x.png",
);
const IOS_SPLASH_DIR = path.join(
  ROOT,
  "ios",
  "App",
  "App",
  "Assets.xcassets",
  "Splash.imageset",
);

const LAUNCHER_BG = "#2563EB";

const MIPMAP = {
  mdpi: { launcher: 48, foreground: 108 },
  hdpi: { launcher: 72, foreground: 162 },
  xhdpi: { launcher: 96, foreground: 216 },
  xxhdpi: { launcher: 144, foreground: 324 },
  xxxhdpi: { launcher: 192, foreground: 432 },
};

const SPLASH_PORT = {
  mdpi: [320, 480],
  hdpi: [480, 800],
  xhdpi: [720, 1280],
  xxhdpi: [960, 1600],
  xxxhdpi: [1280, 1920],
};

const SPLASH_LAND = {
  mdpi: [480, 320],
  hdpi: [800, 480],
  xhdpi: [1280, 720],
  xxhdpi: [1600, 960],
  xxxhdpi: [1920, 1280],
};

async function writePng(target, makePipeline) {
  await mkdir(path.dirname(target), { recursive: true });
  const pipeline = await makePipeline();
  await pipeline.png().toFile(target);
}

async function iconSquare(size) {
  return sharp(SOURCE).resize(size, size, { fit: "cover" });
}

async function splashCanvas(width, height) {
  const iconSize = Math.round(Math.min(width, height) * 0.42);
  const icon = await sharp(SOURCE).resize(iconSize, iconSize, { fit: "cover" }).png().toBuffer();
  return sharp({
    create: {
      width,
      height,
      channels: 4,
      background: LAUNCHER_BG,
    },
  }).composite([{ input: icon, gravity: "center" }]);
}

async function generateAndroid() {
  for (const [density, sizes] of Object.entries(MIPMAP)) {
    const dir = path.join(ANDROID_RES, `mipmap-${density}`);
    await writePng(path.join(dir, "ic_launcher.png"), () => iconSquare(sizes.launcher));
    await writePng(path.join(dir, "ic_launcher_round.png"), () => iconSquare(sizes.launcher));
    await writePng(path.join(dir, "ic_launcher_foreground.png"), () => iconSquare(sizes.foreground));
  }

  for (const [density, [width, height]] of Object.entries(SPLASH_PORT)) {
    await writePng(path.join(ANDROID_RES, `drawable-port-${density}`, "splash.png"), () =>
      splashCanvas(width, height),
    );
  }

  for (const [density, [width, height]] of Object.entries(SPLASH_LAND)) {
    await writePng(path.join(ANDROID_RES, `drawable-land-${density}`, "splash.png"), () =>
      splashCanvas(width, height),
    );
  }

  await writePng(path.join(ANDROID_RES, "drawable", "splash.png"), () => splashCanvas(480, 800));

  const bgXml = `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">${LAUNCHER_BG}</color>\n</resources>\n`;
  await writeFile(path.join(ANDROID_RES, "values", "ic_launcher_background.xml"), bgXml, "utf8");
}

async function generateIos() {
  await writePng(IOS_ICON, () => iconSquare(1024));

  const splashNames = [
    "splash-2732x2732.png",
    "splash-2732x2732-1.png",
    "splash-2732x2732-2.png",
  ];
  for (const name of splashNames) {
    await writePng(path.join(IOS_SPLASH_DIR, name), () => splashCanvas(2732, 2732));
  }
}

await generateAndroid();
await generateIos();
console.log("Generated app icons and splash screens from assets/app-icon-1024.png");
