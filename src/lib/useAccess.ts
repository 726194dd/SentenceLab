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
  const [expired, setExpired] = useState(() => !isUnlocked() && isTrialExpired());

  useEffect(() => {
    if (unlocked || expired) return;
    const tick = () => {
      const next = remainingMs();
      setRemain((prev) => (prev === next ? prev : next));
      if (isTrialExpired()) setExpired(true);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [unlocked, expired]);

  const startTrial = useCallback(() => {
    startTrialIfNeeded();
    const next = remainingMs();
    setRemain(next);
    if (isTrialExpired()) setExpired(true);
  }, []);

  const unlock = useCallback(() => {
    unlockLocal();
    setUnlocked(true);
    setExpired(false);
    setRemain(remainingMs());
  }, []);

  return {
    unlocked,
    remain,
    expired,
    clock: formatRemain(remain),
    startTrial,
    unlock,
  };
}
