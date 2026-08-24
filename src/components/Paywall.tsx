import { useState } from "react";
import { CHECKOUT_URL, PRICE_LABEL } from "../config/access";
import { confirmUnlock } from "../lib/access";

interface PaywallProps {
  onUnlock: () => void;
}

export function Paywall({ onUnlock }: PaywallProps) {
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const pay = () => {
    window.location.assign(CHECKOUT_URL);
  };

  const paid = async () => {
    setError("");
    const trimmed = code.trim();
    if (!trimmed) {
      setError("请输入兑换码");
      return;
    }
    setBusy(true);
    try {
      const ok = await confirmUnlock(trimmed);
      if (!ok) {
        setError("兑换码无效");
        return;
      }
    } catch {
      setError("兑换码无效");
      return;
    } finally {
      setBusy(false);
    }
    onUnlock();
  };

  return (
    <div className="paywall">
      <form
        className="paywall-card panel"
        action="#"
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          void paid();
        }}
      >
        <div className="brand-kicker">{PRICE_LABEL}</div>
        <h2>试用已结束</h2>
        <div className="paywall-actions">
          <button type="button" className="btn btn-primary" onClick={pay}>
            去支付
          </button>
          <button type="submit" className="btn btn-ghost" disabled={busy}>
            我已支付
          </button>
        </div>
        <input
          className="paywall-code"
          type="text"
          name="code"
          inputMode="text"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="兑换码"
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
        />
        {error ? <p className="bad-text">{error}</p> : null}
      </form>
    </div>
  );
}
