import { useMemo, useState } from "react";
import { Home } from "./components/Home";
import { Practice } from "./components/Practice";
import { SENTENCES } from "./data/sentences";
import { useAccess } from "./lib/useAccess";
import { filterSentences } from "./lib/pool";
import type { Level, Scenario } from "./types";

export function App() {
  const [level, setLevel] = useState<Level>("A1");
  const [scenario, setScenario] = useState<Scenario>("daily");
  const [started, setStarted] = useState(false);
  const access = useAccess();

  const pool = useMemo(() => filterSentences(SENTENCES, level, scenario), [level, scenario]);

  if (started && pool.length > 0) {
    return (
      <Practice
        key={`${level}-${scenario}`}
        pool={pool}
        access={access}
        onBack={() => setStarted(false)}
      />
    );
  }

  return (
    <Home
      level={level}
      scenario={scenario}
      poolCount={pool.length}
      onLevel={setLevel}
      onScenario={setScenario}
      onStart={() => {
        access.startTrial();
        setStarted(true);
      }}
    />
  );
}
