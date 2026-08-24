import { useState } from "react";
import { LEVELS, SCENARIOS, scenarioLabel } from "../data/catalog";
import { IconArrowRight, IconPen, IconStar, SceneIcon } from "./Icons";
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

function ProgressRing({ percent }: { percent: number }) {
  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);
  const tone =
    percent < 30 ? "var(--muted)" : percent < 60 ? "var(--clay)" : percent < 80 ? "var(--honey)" : "var(--sage)";

  return (
    <div className="progress-ring-wrap" aria-hidden>
      <svg className="progress-ring" width="44" height="44" viewBox="0 0 44 44">
        <circle className="progress-ring-bg" cx="22" cy="22" r={radius} />
        <circle
          className="progress-ring-fg"
          cx="22"
          cy="22"
          r={radius}
          stroke={tone}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="progress-ring-text">{percent}%</span>
    </div>
  );
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
        <span className="home-badge">同一水平 · 换场景刷新</span>
      </header>

      <section className="home-section is-levels">
        <h2>选择水平</h2>
        <div className="level-pills">
          {LEVELS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`level-pill ${item.id === level ? "active" : ""}`}
              onClick={() => onLevel(item.id)}
            >
              <strong>{item.id}</strong>
              {item.short}
            </button>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>选择场景</h2>
        <div className="scene-grid">
          {SCENARIOS.map((item) => {
            const active = !useFavorites && item.id === scenario;
            const keywords = item.hint.split("、");
            return (
              <button
                key={item.id}
                type="button"
                className={`scene-card ${active ? "active" : ""}`}
                onClick={() => {
                  setUseFavorites(false);
                  onScenario(item.id);
                }}
              >
                <div className="scene-card-icon">
                  <SceneIcon id={item.id} />
                </div>
                <strong className="scene-card-name">{item.title}</strong>
                <span className="scene-card-tags">
                  {keywords.map((word) => (
                    <span key={word}>{word}</span>
                  ))}
                </span>
                <ProgressRing percent={progress[item.id] ?? 0} />
              </button>
            );
          })}

          <button
            type="button"
            className={`scene-card favorite-card ${useFavorites ? "active" : ""}`}
            disabled={locked || favoriteCount === 0}
            onClick={() => setUseFavorites(true)}
          >
            <span className="fav-icon">
              <IconStar filled />
            </span>
            <strong className="fav-title">收藏练习</strong>
            <span className="fav-sub">{favoriteCount > 0 ? `${favoriteCount} 句` : "还没有收藏"}</span>
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
