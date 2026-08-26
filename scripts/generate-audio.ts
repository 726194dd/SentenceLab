import { generateEnglish } from "./generate-audio-en.ts";
import { generateJapanese } from "./generate-audio-ja.ts";
import type { JaLevel } from "../src/types.ts";

function parseArgs() {
  const args = process.argv.slice(2);
  let lang: "en" | "ja" | "all" = "all";
  let limit = Infinity;
  let jaLevels: JaLevel[] | undefined;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--lang" && args[i + 1]) {
      const value = args[++i];
      if (value === "en" || value === "ja" || value === "all") lang = value;
    } else if (args[i] === "--limit" && args[i + 1]) {
      limit = Number(args[++i]);
    } else if (args[i] === "--ja-levels" && args[i + 1]) {
      jaLevels = args[++i].split(",").map((level) => level.trim().toUpperCase() as JaLevel);
    }
  }
  return { lang, limit, jaLevels };
}

const { lang, limit, jaLevels } = parseArgs();

if (lang === "all" || lang === "en") {
  const { generateEnglish } = await import("./generate-audio-en.ts");
  await generateEnglish(limit);
}
if (lang === "all" || lang === "ja") {
  const { generateJapanese } = await import("./generate-audio-ja.ts");
  await generateJapanese(limit, jaLevels);
}
