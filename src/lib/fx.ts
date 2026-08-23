let ctx: AudioContext | null = null;

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!ctx) ctx = new Ctor();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(
  context: AudioContext,
  frequency: number,
  start: number,
  duration: number,
  type: OscillatorType,
  gain: number,
) {
  const osc = context.createOscillator();
  const amp = context.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, start);
  amp.gain.setValueAtTime(0.0001, start);
  amp.gain.exponentialRampToValueAtTime(gain, start + 0.012);
  amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(amp);
  amp.connect(context.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

export function playCheckFx(correct: boolean): void {
  const context = audio();
  if (!context) return;
  const start = context.currentTime + 0.01;
  if (correct) {
    tone(context, 523.25, start, 0.12, "sine", 0.09);
    tone(context, 659.25, start + 0.07, 0.14, "sine", 0.09);
    tone(context, 783.99, start + 0.15, 0.22, "triangle", 0.08);
    return;
  }
  tone(context, 196, start, 0.13, "square", 0.045);
  tone(context, 146.83, start + 0.1, 0.18, "square", 0.04);
}
