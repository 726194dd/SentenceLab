import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Paywall } from "./components/Paywall";
import { isTrialExpired, isUnlocked } from "./lib/access";
import { useAccess } from "./lib/useAccess";
import { warmupSpeech } from "./lib/speech";
import "./index.css";

const App = lazy(() => import("./App"));

function Gate() {
  const access = useAccess();
  if (access.expired) return <Paywall onUnlock={access.unlock} />;
  return (
    <Suspense fallback={null}>
      <App />
    </Suspense>
  );
}

if (isUnlocked() || !isTrialExpired()) {
  warmupSpeech();
  const unlockAudio = () => {
    void import("./lib/fx").then((mod) => mod.unlockFx());
    window.removeEventListener("pointerdown", unlockAudio);
    window.removeEventListener("keydown", unlockAudio);
  };
  window.addEventListener("pointerdown", unlockAudio);
  window.addEventListener("keydown", unlockAudio);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Gate />
  </StrictMode>,
);
