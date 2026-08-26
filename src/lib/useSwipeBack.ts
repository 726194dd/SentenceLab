import { App } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import { type RefObject, useEffect } from "react";

const EDGE_PX = 28;
const MIN_SWIPE_PX = 72;
const MAX_VERTICAL_RATIO = 0.75;

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"]'));
}

/** Edge swipe right (iOS-style back) and native Android back button. */
export function useSwipeBack(
  ref: RefObject<HTMLElement | null>,
  onBack: () => void,
  enabled = true,
): void {
  useEffect(() => {
    if (!enabled) return;

    let startX = 0;
    let startY = 0;
    let tracking = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (isEditableTarget(event.target)) return;
      if (event.clientX > EDGE_PX) return;
      startX = event.clientX;
      startY = event.clientY;
      tracking = true;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!tracking) return;
      tracking = false;
      const dx = event.clientX - startX;
      const dy = Math.abs(event.clientY - startY);
      if (dx < MIN_SWIPE_PX || dy > dx * MAX_VERTICAL_RATIO) return;
      onBack();
    };

    const onPointerCancel = () => {
      tracking = false;
    };

    const root = ref.current ?? document.body;
    root.addEventListener("pointerdown", onPointerDown);
    root.addEventListener("pointerup", onPointerUp);
    root.addEventListener("pointercancel", onPointerCancel);

    let removeBackButton: (() => void) | undefined;
    if (Capacitor.isNativePlatform()) {
      void App.addListener("backButton", () => {
        onBack();
      }).then((handle) => {
        removeBackButton = () => void handle.remove();
      });
    }

    return () => {
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointerup", onPointerUp);
      root.removeEventListener("pointercancel", onPointerCancel);
      removeBackButton?.();
    };
  }, [enabled, onBack, ref]);
}
