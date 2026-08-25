import { useEffect, useState, type CSSProperties } from "react";
import { brandTargetLabel, levelsFor, SCENARIOS, scenarioLabel } from "../data/catalog";
import { loadSettings, saveSettings, subscribeSettings, FX_VOLUME_MID, type AppSettings } from "../lib/settings";
import { IconArrowRight, IconSettings } from "./Icons";
import type { LanguageId, Level, Scenario } from "../types";

interface HomeProps {
  language: LanguageId;
  level: Level;
  scenario: Scenario;
  poolCount: number;
  favoriteCount: number;
  progress: Record<Scenario, number>;
  locked?: boolean;
  onLanguage: (language: LanguageId) => void;
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
  language,
  level,
  scenario,
  poolCount,
  favoriteCount,
  progress,
  locked = false,
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
  const startLabel = useFavorites ? "练习收藏" : `练习 · ${scenarioLabel(scenario)}`;
  const levelItems = levelsFor(language);

  useEffect(() => subscribeSettings(setSettings), []);

  return (
    <div className="app-shell home" inert={locked || undefined}>
      <header className="home-header">
        <div className="home-header-row">
          <h1 className="brand-title">
            听写·<span>{brandTargetLabel(language)}</span>
          </h1>
          <div className="home-header-actions">
            <button
              type="button"
              className={`home-settings-btn ${settingsOpen ? "active" : ""}`}
              aria-label="设置"
              aria-expanded={settingsOpen}
              onClick={() => setSettingsOpen((open) => !open)}
            >
              <IconSettings />
            </button>
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
          </div>
        </div>
      </header>

      {settingsOpen ? (
        <section className="home-section home-settings">
          <h2 className="sr-only">设置</h2>
          <div className="home-settings-grid">
            <div className={`home-setting-card ${settings.clickFx ? "" : "is-off"}`}>
              <div className="home-setting-head">
                <span className="home-setting-title">按键音效</span>
                <label className="home-setting toggle">
                  <span className="switch">
                    <input
                      type="checkbox"
                      checked={settings.clickFx}
                      onChange={(event) => saveSettings({ clickFx: event.target.checked })}
                    />
                    <span className="switch-ui" aria-hidden />
                  </span>
                </label>
              </div>
              <label className="home-setting-volume">
                <span className="sr-only">按键音效音量</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={settings.clickFxVolume}
                  disabled={locked || !settings.clickFx}
                  onChange={(event) => saveSettings({ clickFxVolume: Number(event.target.value) })}
                />
                <span className="home-setting-volume-value">
                  {Math.round((settings.clickFxVolume / FX_VOLUME_MID) * 100)}%
                </span>
              </label>
            </div>

            <div className={`home-setting-card ${settings.typeFx ? "" : "is-off"}`}>
              <div className="home-setting-head">
                <span className="home-setting-title">打字音效</span>
                <label className="home-setting toggle">
                  <span className="switch">
                    <input
                      type="checkbox"
                      checked={settings.typeFx}
                      onChange={(event) => saveSettings({ typeFx: event.target.checked })}
                    />
                    <span className="switch-ui" aria-hidden />
                  </span>
                </label>
              </div>
              <label className="home-setting-volume">
                <span className="sr-only">打字音效音量</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={settings.typeFxVolume}
                  disabled={locked || !settings.typeFx}
                  onChange={(event) => saveSettings({ typeFxVolume: Number(event.target.value) })}
                />
                <span className="home-setting-volume-value">
                  {Math.round((settings.typeFxVolume / FX_VOLUME_MID) * 100)}%
                </span>
              </label>
            </div>
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
          data-no-click-fx="true"
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
