import { useMemo, useState } from "react";
import { Home } from "./components/Home";
import { Practice } from "./components/Practice";
import { SENTENCES } from "./data/sentences";
import { loadFavoriteIds } from "./lib/favorites";
import { useAccess } from "./lib/useAccess";
import { filterSentences } from "./lib/pool";
import type { Level, Scenario } from "./types";

export function App() {
  const [level, setLevel] = useState<Level>("A1");
  const [scenario, setScenario] = useState<Scenario>("daily");
  const [started, setStarted] = useState(false);
  const [fromFavorites, setFromFavorites] = useState(false);
  const [startId, setStartId] = useState<string>();
  const access = useAccess();

  const pool = useMemo(() => filterSentences(SENTENCES, level, scenario), [level, scenario]);
  const favoriteIds = useMemo(() => loadFavoriteIds(), [started]);
  const favoritePool = useMemo(
    () => SENTENCES.filter((item) => favoriteIds.has(item.id)),
    [favoriteIds],
  );

  const begin = (favorites: boolean, id?: string) => {
    access.startTrial();
    setFromFavorites(favorites);
    setStartId(id);
    setStarted(true);
  };

  if (started) {
    const active = fromFavorites ? favoritePool : pool;
    if (active.length > 0) {
      return (
        <Practice
          key={`${fromFavorites ? "fav" : `${level}-${scenario}`}-${startId ?? "any"}`}
          pool={active}
          startId={startId}
          storageLevel={fromFavorites ? "favorites" : level}
          storageScenario={fromFavorites ? "all" : scenario}
          access={access}
          onBack={() => setStarted(false)}
        />
      );
    }
  }

  return (
    <Home
      level={level}
      scenario={scenario}
      poolCount={pool.length}
      favorites={favoritePool}
      onLevel={setLevel}
      onScenario={setScenario}
      onStart={() => begin(false)}
      onStartFavorites={() => begin(true)}
      onOpenFavorite={(id) => begin(true, id)}
    />
  );
}
