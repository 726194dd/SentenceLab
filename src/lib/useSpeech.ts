import { useEffect, useState } from "react";
import type { LanguageId } from "../types";
import { currentSpeechText, speakTarget, stopSpeech, subscribeSpeech, type SpeechStatus } from "./speech";

export function useSpeech(): { status: SpeechStatus; text: string | null } {
  const [status, setStatus] = useState<SpeechStatus>("idle");
  const [text, setText] = useState<string | null>(null);

  useEffect(
    () =>
      subscribeSpeech((next) => {
        setStatus(next);
        setText(currentSpeechText());
      }),
    [],
  );

  return { status, text };
}

export function useSpeechStatus(): SpeechStatus {
  return useSpeech().status;
}

export function speechButtonLabel(status: SpeechStatus): string {
  if (status === "loading") return "Loading…";
  if (status === "speaking") return "Playing…";
  return "Listen";
}

export function useListen(phrase: string, lang: LanguageId = "en") {
  const { status, text } = useSpeech();
  const active = text === phrase;

  return {
    label: active ? speechButtonLabel(status) : "Listen",
    disabled: status === "loading" && active,
    toggle() {
      if (active && (status === "speaking" || status === "loading")) {
        stopSpeech();
        return;
      }
      void speakTarget(phrase, lang);
    },
  };
}
