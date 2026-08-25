import { useState } from "react";
import { TIP_TIERS, tipLabel, type TipTier } from "../config/tip";

function openPayUrl(url: string): void {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function TipCard() {
  const [qrTier, setQrTier] = useState<TipTier | null>(null);

  const handleTip = (tier: TipTier) => {
    if (tier.payUrl) {
      openPayUrl(tier.payUrl);
      return;
    }
    setQrTier(tier);
  };

  return (
    <>
      <section className="home-tip-card" aria-labelledby="home-tip-title">
        <h3 id="home-tip-title" className="home-tip-title">
          支持一下
        </h3>
        <p className="home-tip-text">
          很高兴能陪你练句子。如果这个 App 真的帮到了你，一杯咖啡的鼓励，会让我更有动力把内容做得更好。
        </p>
        <div className="home-tip-amounts" role="group" aria-label="选择打赏金额">
          {TIP_TIERS.map((tier) => (
            <button
              key={tier.amount}
              type="button"
              className="home-tip-amount"
              onClick={() => handleTip(tier)}
            >
              {tipLabel(tier.amount)}
            </button>
          ))}
        </div>
      </section>

      {qrTier ? (
        <div className="home-tip-modal" role="dialog" aria-modal="true" aria-labelledby="home-tip-modal-title">
          <button
            type="button"
            className="home-tip-modal-backdrop"
            aria-label="关闭"
            onClick={() => setQrTier(null)}
          />
          <div className="home-tip-modal-card panel">
            <h4 id="home-tip-modal-title" className="home-tip-modal-title">
              微信扫码打赏 {tipLabel(qrTier.amount)}
            </h4>
            <p className="home-tip-modal-hint">长按识别二维码，或用微信扫一扫完成支付</p>
            <img
              className="home-tip-qr"
              src={qrTier.qrSrc}
              alt={`微信收款码 ${tipLabel(qrTier.amount)}`}
              width={220}
              height={220}
            />
            <button type="button" className="btn btn-ghost home-tip-modal-close" onClick={() => setQrTier(null)}>
              关闭
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
