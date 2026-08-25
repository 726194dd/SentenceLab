import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { armButtonClickFx, unlockFx } from "./lib/fx";
import { warmupSpeech } from "./lib/speech";
import "./index.css";

const App = lazy(() => import("./App"));

warmupSpeech();

const armAudio = () => unlockFx();
window.addEventListener("pointerdown", armAudio, { capture: true });
window.addEventListener("touchstart", armAudio, { capture: true, passive: true });
window.addEventListener("click", armAudio, { capture: true });
window.addEventListener("keydown", armAudio, { capture: true });
armButtonClickFx();
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") unlockFx();
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </StrictMode>,
);
