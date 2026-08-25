import type { EnLevel, JaLevel, LanguageId, Level } from "../types";

const LANG_KEY = "sentence-lab.language";

const EN_LEVELS: EnLevel[] = ["A1", "A2", "B1", "B2", "C1"];
const JA_LEVELS: JaLevel[] = ["N5", "N4", "N3", "N2", "N1"];

function levelKey(lang: LanguageId): string {
  return `sentence-lab.level.${lang}`;
}

export function defaultLevel(lang: LanguageId): Level {
  return lang === "ja" ? "N5" : "A1";
}

export function loadLanguage(): LanguageId {
  try {
    const raw = localStorage.getItem(LANG_KEY);
    return raw === "ja" ? "ja" : "en";
  } catch {
    return "en";
  }
}

export function saveLanguage(lang: LanguageId): void {
  localStorage.setItem(LANG_KEY, lang);
}

export function loadLevelFor(lang: LanguageId): Level {
  try {
    const raw = localStorage.getItem(levelKey(lang));
    if (!raw) return defaultLevel(lang);
    if (lang === "ja") return JA_LEVELS.includes(raw as JaLevel) ? (raw as JaLevel) : "N5";
    return EN_LEVELS.includes(raw as EnLevel) ? (raw as EnLevel) : "A1";
  } catch {
    return defaultLevel(lang);
  }
}

export function saveLevelFor(lang: LanguageId, level: Level): void {
  localStorage.setItem(levelKey(lang), level);
}

export function isJaLevel(level: Level): level is JaLevel {
  return (JA_LEVELS as readonly string[]).includes(level);
}

export function isEnLevel(level: Level): level is EnLevel {
  return (EN_LEVELS as readonly string[]).includes(level);
}
