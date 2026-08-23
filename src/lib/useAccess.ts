import { useCallback, useEffect, useState } from "react";
import {
  formatRemain,
  isTrialExpired,
  isUnlocked,
  remainingMs,
  startTrialIfNeeded,
  unlockLocal,
} from "./access";

export function useAccess() {
  const [unlocked, setUnlocked] = useState(() => isUnlocked());
  const [remain, setRemain] = useState(() => remainingMs());

  useEffect(() => {
    if (unlocked) return;
    const tick = () => setRemain(remainingMs());
    tick();
    const id = window.setInterval(tick, 250);
    return () => window.clearInterval(id);
  }, [unlocked]);

  const startTrial = useCallback(() => {
    startTrialIfNeeded();
    setRemain(remainingMs());
  }, []);

  const unlock = useCallback(() => {
    unlockLocal();
    setUnlocked(true);
    setRemain(remainingMs());
  }, []);

  return {
    unlocked,
    remain,
    expired: !unlocked && isTrialExpired(),
    clock: formatRemain(remain),
    startTrial,
    unlock,
  };
}
