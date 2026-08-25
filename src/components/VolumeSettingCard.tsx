import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

interface VolumeSettingCardProps {
  title: string;
  enabled: boolean;
  volume: number;
  locked?: boolean;
  onToggle: (enabled: boolean) => void;
  onVolume: (volume: number) => void;
}

function volumeFromX(card: HTMLElement, clientX: number): number {
  const rect = card.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  return Math.round((ratio * 100) / 5) * 5;
}

export function VolumeSettingCard({
  title,
  enabled,
  volume,
  locked = false,
  onToggle,
  onVolume,
}: VolumeSettingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const canSlide = enabled && !locked;

  useEffect(() => {
    const move = (event: globalThis.PointerEvent) => {
      if (!dragging.current || !cardRef.current) return;
      onVolume(volumeFromX(cardRef.current, event.clientX));
    };
    const end = () => {
      if (!dragging.current) return;
      dragging.current = false;
      setIsDragging(false);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
    };
  }, [onVolume]);

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!canSlide || !cardRef.current) return;
    if ((event.target as Element).closest(".switch")) return;
    dragging.current = true;
    setIsDragging(true);
    cardRef.current.setPointerCapture(event.pointerId);
    onVolume(volumeFromX(cardRef.current, event.clientX));
  };

  return (
    <div
      ref={cardRef}
      className={`home-setting-card ${enabled ? "" : "is-off"} ${isDragging ? "is-dragging" : ""}`}
      style={{ "--volume-pct": volume } as CSSProperties}
      role="slider"
      aria-label={`${title}音量`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={volume}
      aria-disabled={!canSlide}
      onPointerDown={startDrag}
    >
      <div className="home-setting-fill" aria-hidden />
      <div className="home-setting-head">
        <span className="home-setting-title">{title}</span>
        <label className="home-setting toggle" onPointerDown={(event) => event.stopPropagation()}>
          <span className="switch">
            <input
              type="checkbox"
              checked={enabled}
              disabled={locked}
              onChange={(event) => onToggle(event.target.checked)}
            />
            <span className="switch-ui" aria-hidden />
          </span>
        </label>
      </div>
    </div>
  );
}
