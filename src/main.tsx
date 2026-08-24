import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Paywall } from "./components/Paywall";
import { isTrialExpired, isUnlocked } from "./lib/access";
import { unlockFx } from "./lib/fx";
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
}

const armAudio = () => unlockFx();
window.addEventListener("pointerdown", armAudio, { capture: true });
window.addEventListener("touchstart", armAudio, { capture: true });
window.addEventListener("keydown", armAudio, { capture: true });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Gate />
  </StrictMode>,
);
