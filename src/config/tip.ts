const DEFAULT_QR = "tips/wechat.png";

function resolvePublicUrl(path: string | undefined, fallback: string): string {
  const raw = path?.trim() || fallback;
  if (/^https?:\/\//i.test(raw)) return raw;
  const normalized = raw.startsWith("/") ? raw.slice(1) : raw;
  return `${import.meta.env.BASE_URL}${normalized}`;
}

export const TIP_QR_SRC = resolvePublicUrl(import.meta.env.VITE_TIP_QR, DEFAULT_QR);

export const TIP_PAY_URL = import.meta.env.VITE_TIP_PAY_URL?.trim() ?? "";
