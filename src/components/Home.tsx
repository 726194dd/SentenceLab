import { LEVELS, SCENARIOS } from "../data/catalog";
import type { Level, Scenario } from "../types";

interface HomeProps {
  level: Level;
  scenario: Scenario;
  poolCount: number;
  onLevel: (level: Level) => void;
  onScenario: (scenario: Scenario) => void;
  onStart: () => void;
}

export function Home({ level, scenario, poolCount, onLevel, onScenario, onStart }: HomeProps) {
  return (
    <div className="app-shell home">
      <header className="brand-row">
        <h1 className="brand-title">看中文 写英文</h1>
      </header>

      <div className="home-grid">
        <section className="panel">
          <h2>选择水平</h2>
          <p className="hint">从短句习惯表达到更细的语气和抽象说法。</p>
          <div className="level-list">
            {LEVELS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`choice ${item.id === level ? "active" : ""}`}
                onClick={() => onLevel(item.id)}
              >
                <strong>{item.title}</strong>
                <small>{item.blurb}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>选择场景</h2>
          <p className="hint">同一水平下，换场景就能一直刷新出不同句子。</p>
          <div className="scenario-list">
            {SCENARIOS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`choice ${item.id === scenario ? "active" : ""}`}
                onClick={() => onScenario(item.id)}
              >
                <strong>{item.title}</strong>
                <small>{item.hint}</small>
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="start-row">
        <button type="button" className="btn btn-primary" onClick={onStart} disabled={poolCount === 0}>
          开始练习
        </button>
      </div>
    </div>
  );
}
