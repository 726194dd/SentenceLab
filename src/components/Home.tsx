import { LEVELS, SCENARIOS, levelLabel, scenarioLabel } from "../data/catalog";
import type { Level, Scenario, Sentence } from "../types";

interface HomeProps {
  level: Level;
  scenario: Scenario;
  poolCount: number;
  favorites: Sentence[];
  onLevel: (level: Level) => void;
  onScenario: (scenario: Scenario) => void;
  onStart: () => void;
  onStartFavorites: () => void;
  onOpenFavorite: (id: string) => void;
}

export function Home({
  level,
  scenario,
  poolCount,
  favorites,
  onLevel,
  onScenario,
  onStart,
  onStartFavorites,
  onOpenFavorite,
}: HomeProps) {
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

      <section className="panel fav-card">
        <h2>收藏 {favorites.length > 0 ? favorites.length : ""}</h2>
        {favorites.length === 0 ? (
          <p className="hint">还没有收藏</p>
        ) : (
          <div className="fav-list">
            {favorites.map((item) => (
              <button
                key={item.id}
                type="button"
                className="choice fav-item"
                onClick={() => onOpenFavorite(item.id)}
              >
                <strong>{item.zh}</strong>
                <small>
                  {levelLabel(item.level)} · {scenarioLabel(item.scenario)}
                </small>
              </button>
            ))}
          </div>
        )}
        {favorites.length > 0 ? (
          <div className="fav-actions">
            <button type="button" className="btn btn-ghost" onClick={onStartFavorites}>
              练习收藏
            </button>
          </div>
        ) : null}
      </section>

      <div className="start-row">
        <button type="button" className="btn btn-primary" onClick={onStart} disabled={poolCount === 0}>
          开始练习
        </button>
      </div>
    </div>
  );
}
