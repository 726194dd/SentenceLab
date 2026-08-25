import { useEffect, useMemo, useState } from "react";
import { Home } from "./components/Home";
import { Practice } from "./components/Practice";
import { SCENARIOS } from "./data/catalog";
import { getSentences } from "./data/sentences";
import { loadFavoriteIds } from "./lib/favorites";
import { loadDonePercent } from "./lib/progress";
import { loadLanguage, loadLevelFor, saveLanguage, saveLevelFor } from "./lib/language";
import { warmupJapaneseSpeech } from "./lib/speech";
import { useAccess } from "./lib/useAccess";
import { filterSentences } from "./lib/pool";
import type { LanguageId, Level, Scenario } from "./types";

export default function App() {
  const [language, setLanguage] = useState<LanguageId>(() => loadLanguage());
  const [level, setLevel] = useState<Level>(() => loadLevelFor(loadLanguage()));
  const [scenario, setScenario] = useState<Scenario>("daily");
  const [started, setStarted] = useState(false);
  const [fromFavorites, setFromFavorites] = useState(false);
  const access = useAccess();

  const sentences = useMemo(() => getSentences(language), [language]);
  const pool = useMemo(
    () => filterSentences(sentences, language, level, scenario),
    [sentences, language, level, scenario],
  );
  const sceneProgress = useMemo(() => {
    const next = {} as Record<Scenario, number>;
    for (const item of SCENARIOS) {
      const total = filterSentences(sentences, language, level, item.id).length;
      next[item.id] = loadDonePercent(language, level, item.id, total);
    }
    return next;
  }, [language, level, sentences, started]);
  const favoriteIds = useMemo(() => loadFavoriteIds(language), [language, started]);
  const favoritePool = useMemo(
    () => sentences.filter((item) => favoriteIds.has(item.id)),
    [sentences, favoriteIds],
  );

  const handleLanguage = (lang: LanguageId) => {
    if (lang === language) return;
    saveLanguage(lang);
    setLanguage(lang);
    setLevel(loadLevelFor(lang));
    setStarted(false);
    if (lang === "ja") warmupJapaneseSpeech();
  };

  useEffect(() => {
    if (language === "ja") warmupJapaneseSpeech();
  }, [language]);

  const handleLevel = (next: Level) => {
    setLevel(next);
    saveLevelFor(language, next);
  };

  const begin = (favorites: boolean) => {
    access.startTrial();
    setFromFavorites(favorites);
    setStarted(true);
  };

  const active = fromFavorites ? favoritePool : pool;
  const practicing = started && active.length > 0;

  return (
    <>
      {practicing ? (
        <Practice
          key={fromFavorites ? `${language}-fav` : `${language}-${level}-${scenario}`}
          pool={active}
          language={language}
          storageLevel={fromFavorites ? "favorites" : level}
          storageScenario={fromFavorites ? "all" : scenario}
          access={access}
          onBack={() => setStarted(false)}
        />
      ) : (
        <Home
          language={language}
          level={level}
          scenario={scenario}
          poolCount={pool.length}
          favoriteCount={favoritePool.length}
          progress={sceneProgress}
          onLanguage={handleLanguage}
          onLevel={handleLevel}
          onScenario={setScenario}
          onStart={() => begin(false)}
          onStartFavorites={() => begin(true)}
        />
      )}
    </>
  );
}
