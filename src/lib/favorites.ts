import type { LanguageId } from "../types";

function favoritesKey(lang: LanguageId): string {
  return `sentence-lab.favorites.${lang}`;
}

const legacyKey = "sentence-lab.favorites";

export function loadFavoriteIds(lang: LanguageId): Set<string> {
  try {
    let raw = localStorage.getItem(favoritesKey(lang));
    if (!raw && lang === "en") raw = localStorage.getItem(legacyKey);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((id): id is string => typeof id === "string"));
  } catch {
    return new Set();
  }
}

export function saveFavoriteIds(lang: LanguageId, ids: Set<string>): void {
  localStorage.setItem(favoritesKey(lang), JSON.stringify([...ids]));
}

export function toggleFavorite(lang: LanguageId, id: string): Set<string> {
  const next = loadFavoriteIds(lang);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  saveFavoriteIds(lang, next);
  return next;
}
