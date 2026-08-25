import { useEffect, useState, type CSSProperties } from "react";
import { brandTargetLabel, levelsFor, SCENARIOS } from "../data/catalog";
import { loadSettings, saveSettings, subscribeSettings, type AppSettings } from "../lib/settings";
import { IconSettings } from "./Icons";
import { VolumeSettingCard } from "./VolumeSettingCard";
import type { LanguageId, Level, Scenario } from "../types";

interface HomeProps {
  language: LanguageId;
  level: Level;
  scenario: Scenario;
  poolCount: number;
  favoriteCount: number;
  progress: Record<Scenario, number>;
  onLanguage: (language: LanguageId) => void;
  onLevel: (level: Level) => void;
  onScenario: (scenario: Scenario) => void;
  onStart: () => void;
  onStartFavorites: () => void;
}

function progressTone(percent: number): string {
  if (percent < 30) return "var(--text-tertiary)";
  if (percent < 60) return "var(--blue-soft)";
  if (percent < 80) return "var(--blue)";
  return "var(--success)";
}

function sceneCardStyle(percent: number): CSSProperties {
  return {
    "--scene-progress-num": percent,
    "--scene-progress-color": progressTone(percent),
  } as CSSProperties;
}

export function Home({
  language,
  level,
  scenario,
  poolCount,
  favoriteCount,
  progress,
  onLanguage,
  onLevel,
  onScenario,
  onStart,
  onStartFavorites,
}: HomeProps) {
  const [useFavorites, setUseFavorites] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<AppSettings>(() => loadSettings());
  const canStart = useFavorites ? favoriteCount > 0 : poolCount > 0;
  const levelItems = levelsFor(language);

  useEffect(() => subscribeSettings(setSettings), []);

  return (
    <div className="app-shell home">
      <header className="home-header">
        <div className="home-header-row">
          <h1 className="brand-title">
            听写·<span>{brandTargetLabel(language)}</span>
          </h1>
          <div className="home-header-actions">
            <div className="lang-switch" role="group" aria-label="选择语言">
              <button
                type="button"
                className={`lang-switch-btn ${language === "en" ? "active" : ""}`}
                aria-pressed={language === "en"}
                data-click-fx="lang-en"
                onClick={() => onLanguage("en")}
              >
                英语
              </button>
              <button
                type="button"
                className={`lang-switch-btn ${language === "ja" ? "active" : ""}`}
                aria-pressed={language === "ja"}
                data-click-fx="lang-ja"
                onClick={() => onLanguage("ja")}
              >
                日语
              </button>
            </div>
            <button
              type="button"
              className={`home-settings-btn ${settingsOpen ? "active" : ""}`}
              aria-label="设置"
              aria-expanded={settingsOpen}
              onClick={() => setSettingsOpen((open) => !open)}
            >
              <IconSettings />
            </button>
          </div>
        </div>
      </header>

      {settingsOpen ? (
        <section className="home-section home-settings">
          <h2 className="sr-only">设置</h2>
          <div className="home-settings-grid">
            <VolumeSettingCard
              title="按键音效"
              enabled={settings.clickFx}
              volume={settings.clickFxVolume}
              onToggle={(clickFx) => saveSettings({ clickFx })}
              onVolume={(clickFxVolume) => saveSettings({ clickFxVolume })}
            />
            <VolumeSettingCard
              title="打字音效"
              enabled={settings.typeFx}
              volume={settings.typeFxVolume}
              onToggle={(typeFx) => saveSettings({ typeFx })}
              onVolume={(typeFxVolume) => saveSettings({ typeFxVolume })}
            />
          </div>
        </section>
      ) : null}

      <section className="home-section is-levels">
        <h2>选择等级</h2>
        <div className="level-pills">
          {levelItems.map((item) => {
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
            disabled={favoriteCount === 0}
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
          data-no-click-fx="true"
          onClick={useFavorites ? onStartFavorites : onStart}
          disabled={!canStart}
        >
          <span>{canStart ? "开始练习" : "请选择场景"}</span>
        </button>
      </div>
    </div>
  );
}
