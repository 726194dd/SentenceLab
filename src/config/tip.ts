export const TIP_AMOUNTS = [1, 2, 5, 10] as const;

export type TipAmount = (typeof TIP_AMOUNTS)[number];

export type TipTier = {
  amount: TipAmount;
  payUrl: string;
  qrSrc: string;
};

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
    qrSrc: resolvePublicUrl(qrSrc, `tips/${amount}.jpg`),
  };
}

export const TIP_TIERS: TipTier[] = [
  tier(1, import.meta.env.VITE_TIP_URL_1, import.meta.env.VITE_TIP_QR_1),
  tier(2, import.meta.env.VITE_TIP_URL_2, import.meta.env.VITE_TIP_QR_2),
  tier(5, import.meta.env.VITE_TIP_URL_5, import.meta.env.VITE_TIP_QR_5),
  tier(10, import.meta.env.VITE_TIP_URL_10, import.meta.env.VITE_TIP_QR_10),
];

export function tipLabel(amount: TipAmount): string {
  return `¥${amount}`;
}
