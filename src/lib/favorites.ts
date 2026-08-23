const key = "sentence-lab.favorites";

export function loadFavoriteIds(): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((id): id is string => typeof id === "string"));
  } catch {
    return new Set();
  }
}

export function saveFavoriteIds(ids: Set<string>): void {
  localStorage.setItem(key, JSON.stringify([...ids]));
}

export function toggleFavorite(id: string): Set<string> {
  const next = loadFavoriteIds();
  if (next.has(id)) next.delete(id);
  else next.add(id);
  saveFavoriteIds(next);
  return next;
}
