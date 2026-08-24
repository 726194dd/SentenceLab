import { useState, type CSSProperties } from "react";
import { LEVELS, SCENARIOS, scenarioLabel } from "../data/catalog";
import { IconArrowRight, IconPen } from "./Icons";
import type { Level, Scenario } from "../types";

interface HomeProps {
  level: Level;
  scenario: Scenario;
  poolCount: number;
  favoriteCount: number;
  progress: Record<Scenario, number>;
  locked?: boolean;
  onLevel: (level: Level) => void;
  onScenario: (scenario: Scenario) => void;
  onStart: () => void;
  onStartFavorites: () => void;
}

function progressTone(percent: number): string {
  if (percent < 30) return "var(--muted)";
  if (percent < 60) return "var(--clay)";
  if (percent < 80) return "var(--honey)";
  return "var(--sage)";
}

function sceneCardStyle(percent: number): CSSProperties {
  return {
    "--scene-progress-num": percent,
    "--scene-progress-color": progressTone(percent),
  } as CSSProperties;
}

export function Home({
  level,
  scenario,
  poolCount,
  favoriteCount,
  progress,
  locked = false,
  onLevel,
  onScenario,
  onStart,
  onStartFavorites,
}: HomeProps) {
  const [useFavorites, setUseFavorites] = useState(false);
  const canStart = useFavorites ? favoriteCount > 0 : poolCount > 0;
  const startLabel = useFavorites ? "练习收藏" : `练习 · ${scenarioLabel(scenario)}`;

  return (
    <div className="app-shell home" inert={locked || undefined}>
      <header className="home-header">
        <div className="home-brand">
          <div className="home-brand-icon">
            <IconPen />
          </div>
          <div>
            <h1 className="brand-title">
              看中文 写<span>英文</span>
            </h1>
            <p className="brand-sub">从短句习惯表达到更细的语气和抽象说法</p>
          </div>
        </div>
      </header>

      <section className="home-section is-levels">
        <h2>选择水平</h2>
        <div className="level-pills">
          {LEVELS.map((item) => {
            const active = item.id === level;
            return (
              <button
                key={item.id}
                type="button"
                className={`level-pill ${active ? "active" : ""}`}
                aria-label={`${item.id} ${item.short}`}
                aria-pressed={active}
                onClick={() => onLevel(item.id)}
              >
                <strong>{item.id}</strong>
                <span className="level-pill-label">{item.short}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="home-section">
        <h2>选择场景</h2>
        <div className="scene-grid">
          {SCENARIOS.map((item) => {
            const active = !useFavorites && item.id === scenario;
            const keywords = item.hint.split("、");
            const percent = progress[item.id] ?? 0;
            return (
              <button
                key={item.id}
                type="button"
                className={`scene-card ${active ? "active" : ""}`}
                style={sceneCardStyle(percent)}
                onClick={() => {
                  setUseFavorites(false);
                  onScenario(item.id);
                }}
              >
                <div className="scene-card-head">
                  <strong className="scene-card-name">{item.title}</strong>
                  <span className="scene-card-percent">{percent}%</span>
                </div>
                <p className="scene-card-tags">{keywords.join(" · ")}</p>
              </button>
            );
          })}

          <button
            type="button"
            className={`scene-card favorite-card ${useFavorites ? "active" : ""}`}
            disabled={locked || favoriteCount === 0}
            onClick={() => setUseFavorites(true)}
          >
            <div className="scene-card-head">
              <strong className="scene-card-name">收藏练习</strong>
              <span className="scene-card-percent">{favoriteCount > 0 ? favoriteCount : 0}</span>
            </div>
            <p className="scene-card-tags">{favoriteCount > 0 ? `${favoriteCount} 句收藏` : "还没有收藏"}</p>
          </button>
        </div>
      </section>

      <div className="start-row">
        <button
          type="button"
          className="btn btn-primary btn-start"
          onClick={useFavorites ? onStartFavorites : onStart}
          disabled={locked || !canStart}
        >
          <span>{canStart ? startLabel : "请选择场景"}</span>
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
}
