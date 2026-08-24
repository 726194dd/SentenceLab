import { useMemo, useState } from "react";
import { Home } from "./components/Home";
import { Practice } from "./components/Practice";
import { SCENARIOS } from "./data/catalog";
import { SENTENCES } from "./data/sentences";
import { loadFavoriteIds } from "./lib/favorites";
import { loadDonePercent } from "./lib/progress";
import { useAccess } from "./lib/useAccess";
import { filterSentences } from "./lib/pool";
import type { Level, Scenario } from "./types";

export default function App() {
  const [level, setLevel] = useState<Level>("A1");
  const [scenario, setScenario] = useState<Scenario>("daily");
  const [started, setStarted] = useState(false);
  const [fromFavorites, setFromFavorites] = useState(false);
  const access = useAccess();

  const pool = useMemo(() => filterSentences(SENTENCES, level, scenario), [level, scenario]);
  const sceneProgress = useMemo(() => {
    const next = {} as Record<Scenario, number>;
    for (const item of SCENARIOS) {
      const total = filterSentences(SENTENCES, level, item.id).length;
      next[item.id] = loadDonePercent(level, item.id, total);
    }
    return next;
  }, [level, started]);
  const favoriteIds = useMemo(() => loadFavoriteIds(), [started]);
  const favoritePool = useMemo(
    () => SENTENCES.filter((item) => favoriteIds.has(item.id)),
    [favoriteIds],
  );

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
          key={fromFavorites ? "fav" : `${level}-${scenario}`}
          pool={active}
          storageLevel={fromFavorites ? "favorites" : level}
          storageScenario={fromFavorites ? "all" : scenario}
          access={access}
          onBack={() => setStarted(false)}
        />
      ) : (
        <Home
          level={level}
          scenario={scenario}
          poolCount={pool.length}
          favoriteCount={favoritePool.length}
          progress={sceneProgress}
          onLevel={setLevel}
          onScenario={setScenario}
          onStart={() => begin(false)}
          onStartFavorites={() => begin(true)}
        />
      )}
    </>
  );
}
