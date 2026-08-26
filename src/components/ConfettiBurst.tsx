import { useEffect, useRef } from "react";

const COLORS = ["#f04336", "#ff6b2c", "#ffb020", "#4caf50", "#39b8f0", "#3d5afe"];
const DURATION = 1400;

type Kind = "rect" | "circle" | "triangle" | "ribbon";

interface Piece {
  kind: Kind;
  color: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  size: number;
  wobble: number;
}

function spawn(width: number, height: number): Piece[] {
  const cx = width / 2;
  const cy = height * 0.42;
  // Fewer particles on phones — full 100+ bursts hitch WKWebView mid-frame.
  const mobile = Math.min(width, height) < 700;
  const count = Math.round(
    mobile
      ? Math.min(48, 28 + Math.min(width, height) / 28)
      : Math.min(120, 70 + Math.min(width, height) / 12),
  );
  const kinds: Kind[] = ["rect", "circle", "triangle", "ribbon"];
  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 11;
    return {
      kind: kinds[Math.floor(Math.random() * kinds.length)]!,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.35,
      size: 6 + Math.random() * 10,
      wobble: Math.random() * Math.PI * 2,
    };
  });
}

function drawPiece(ctx: CanvasRenderingContext2D, piece: Piece) {
  ctx.save();
  ctx.translate(piece.x, piece.y);
  ctx.rotate(piece.rot);
  ctx.fillStyle = piece.color;
  ctx.strokeStyle = piece.color;
  const s = piece.size;
  if (piece.kind === "rect") {
    ctx.fillRect(-s * 0.45, -s * 0.45, s * 0.9, s * 0.9);
  } else if (piece.kind === "circle") {
    ctx.beginPath();
    ctx.ellipse(0, 0, s * 0.42, s * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (piece.kind === "triangle") {
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.55);
    ctx.lineTo(s * 0.48, s * 0.4);
    ctx.lineTo(-s * 0.48, s * 0.4);
    ctx.closePath();
    ctx.fill();
  } else {
    ctx.lineWidth = 3.2;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(-s * 0.7, 0);
    ctx.quadraticCurveTo(0, -s * 0.7, s * 0.7, 0);
    ctx.stroke();
  }
  ctx.restore();
}

export function ConfettiBurst({ token }: { token: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!token) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    resize();

    const pieces = spawn(window.innerWidth, window.innerHeight);
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - started;
      const t = Math.min(1, elapsed / DURATION);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalAlpha = t < 0.7 ? 1 : 1 - (t - 0.7) / 0.3;
      for (const piece of pieces) {
        piece.vy += 0.16;
        piece.vx *= 0.992;
        piece.x += piece.vx + Math.sin(piece.wobble + elapsed / 180) * 0.35;
        piece.y += piece.vy;
        piece.rot += piece.vr;
        drawPiece(ctx, piece);
      }
      ctx.globalAlpha = 1;
      if (t < 1) frame = window.requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
  }, [token]);

  return <canvas ref={canvasRef} className="confetti-layer" aria-hidden />;
}
