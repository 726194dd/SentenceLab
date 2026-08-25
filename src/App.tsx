import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Home } from "./components/Home";
import { SCENARIOS } from "./data/catalog";
import {
  levelProgressTotals,
  loadAllSentences,
  loadLevelSentences,
  preloadLevelSentences,
  scenarioPoolCount,
} from "./data/loadSentences";
import { loadFavoriteIds } from "./lib/favorites";
import { loadDonePercent } from "./lib/progress";
import { loadLanguage, loadLevelFor, saveLanguage, saveLevelFor } from "./lib/language";
import { filterSentences } from "./lib/pool";
import type { LanguageId, Level, Scenario, Sentence } from "./types";

const Practice = lazy(() => import("./components/Practice"));

function scheduleIdle(task: () => void): void {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(() => task(), { timeout: 2000 });
    return;
  }
  window.setTimeout(task, 1);
}

export default function App() {
  const [language, setLanguage] = useState<LanguageId>(() => loadLanguage());
  const [level, setLevel] = useState<Level>(() => loadLevelFor(loadLanguage()));
  const [scenario, setScenario] = useState<Scenario>("daily");
  const [started, setStarted] = useState(false);
  const [fromFavorites, setFromFavorites] = useState(false);
  const [useFavoritesMode, setUseFavoritesMode] = useState(false);
  const [sentences, setSentences] = useState<Sentence[] | null>(null);

  useEffect(() => {
    let alive = true;
    setSentences(null);
    const loader = useFavoritesMode
      ? loadAllSentences(language)
      : loadLevelSentences(language, level);
    void loader.then((items) => {
      if (alive) setSentences(items);
    });
    return () => {
      alive = false;
    };
  }, [language, level, useFavoritesMode]);

  useEffect(() => {
    if (useFavoritesMode) return;
    scheduleIdle(() => preloadLevelSentences(language, level));
  }, [language, level, useFavoritesMode]);

  const pool = useMemo(
    () => (sentences ? filterSentences(sentences, language, level, scenario) : []),
    [sentences, language, level, scenario],
  );
  const sceneProgress = useMemo(() => {
    const totals = levelProgressTotals(language, level);
    const next = {} as Record<Scenario, number>;
    for (const item of SCENARIOS) {
      next[item.id] = loadDonePercent(language, level, item.id, totals[item.id]);
    }
    return next;
  }, [language, level, started]);
  const favoriteIds = useMemo(() => loadFavoriteIds(language), [language, started]);
  const favoritePool = useMemo(
    () => (sentences ? sentences.filter((item) => favoriteIds.has(item.id)) : []),
    [sentences, favoriteIds],
  );

  const handleLanguage = (lang: LanguageId) => {
    if (lang === language) return;
    saveLanguage(lang);
    setLanguage(lang);
    setLevel(loadLevelFor(lang));
    setStarted(false);
    setUseFavoritesMode(false);
  };

  const handleLevel = (next: Level) => {
    setLevel(next);
    saveLevelFor(language, next);
    setUseFavoritesMode(false);
  };

  const handleFavoritesMode = (enabled: boolean) => {
    setUseFavoritesMode(enabled);
    if (enabled) void loadAllSentences(language);
  };

  const begin = (favorites: boolean) => {
    if (!sentences) return;
    setFromFavorites(favorites);
    setStarted(true);
  };

  const active = fromFavorites ? favoritePool : pool;
  const practicing = started && active.length > 0;
  const poolCount = sentences ? pool.length : scenarioPoolCount(language, level, scenario);
  const favoriteCount = favoriteIds.size;
  const dataReady = sentences !== null;

  return (
    <>
      {practicing ? (
        <Suspense fallback={null}>
          <Practice
            key={fromFavorites ? `${language}-fav` : `${language}-${level}-${scenario}`}
            pool={active}
            language={language}
            storageLevel={fromFavorites ? "favorites" : level}
            storageScenario={fromFavorites ? "all" : scenario}
            onBack={() => setStarted(false)}
          />
        </Suspense>
      ) : (
        <Home
          language={language}
          level={level}
          scenario={scenario}
          poolCount={poolCount}
          favoriteCount={favoriteCount}
          progress={sceneProgress}
          dataReady={dataReady}
          onLanguage={handleLanguage}
          onLevel={handleLevel}
          onScenario={setScenario}
          onFavoritesMode={handleFavoritesMode}
          onStart={() => begin(false)}
          onStartFavorites={() => begin(true)}
        />
      )}
    </>
  );
}
