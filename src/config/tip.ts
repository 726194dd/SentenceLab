export const TIP_AMOUNTS = [4, 6, 8, 10] as const;

export type TipAmount = (typeof TIP_AMOUNTS)[number];

export type TipTier = {
  amount: TipAmount;
  payUrl: string;
  qrSrc: string;
};

const DEFAULT_QR = "tips/wechat.png";

function resolvePublicUrl(path: string | undefined, fallback: string): string {
  const raw = path?.trim() || fallback;
  if (/^https?:\/\//i.test(raw)) return raw;
  const normalized = raw.startsWith("/") ? raw.slice(1) : raw;
  return `${import.meta.env.BASE_URL}${normalized}`;
}

function tier(
  amount: TipAmount,
  payUrl: string | undefined,
  qrSrc: string | undefined,
): TipTier {
  return {
    amount,
    payUrl: payUrl ?? "",
    qrSrc: resolvePublicUrl(qrSrc, DEFAULT_QR),
  };
}

const sharedQr = import.meta.env.VITE_TIP_QR;

export const TIP_TIERS: TipTier[] = [
  tier(4, import.meta.env.VITE_TIP_URL_4, sharedQr),
  tier(6, import.meta.env.VITE_TIP_URL_6, sharedQr),
  tier(8, import.meta.env.VITE_TIP_URL_8, sharedQr),
  tier(10, import.meta.env.VITE_TIP_URL_10, sharedQr),
];

export function tipLabel(amount: TipAmount): string {
  return `¥${amount}`;
}
