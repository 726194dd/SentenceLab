import { Capacitor } from "@capacitor/core";

export type WeChatPayOpenResult = "opened" | "copied";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

export async function openWeChatPayLink(link: string): Promise<WeChatPayOpenResult> {
  const trimmed = link.trim();
  if (!trimmed) {
    throw new Error("empty link");
  }

  if (/MicroMessenger/i.test(navigator.userAgent)) {
    window.location.href = trimmed;
    return "opened";
  }

  if (/^https?:\/\//i.test(trimmed) || /^weixin:/i.test(trimmed)) {
    window.location.href = trimmed;
    return "opened";
  }

  if (Capacitor.isNativePlatform()) {
    await copyText(trimmed);
    await sleep(120);
    window.location.href = "weixin://";
    return "copied";
  }

  await copyText(trimmed);
  return "copied";
}
