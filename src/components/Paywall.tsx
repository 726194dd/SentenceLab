import { useState } from "react";
import { CHECKOUT_URL, PRICE_LABEL } from "../config/access";
import { confirmUnlockRemote } from "../lib/access";

interface PaywallProps {
  onUnlock: () => void;
}

export function Paywall({ onUnlock }: PaywallProps) {
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const pay = () => {
    const url = new URL(CHECKOUT_URL);
    url.searchParams.set("redirect", `${window.location.origin}${import.meta.env.BASE_URL}?unlocked=1`);
    window.location.assign(url.toString());
  };

  const paid = async () => {
    setError("");
    if (code.trim()) {
      setBusy(true);
      try {
        const ok = await confirmUnlockRemote(code);
        if (!ok) {
          setError("兑换未确认");
          return;
        }
      } catch {
        setError("兑换未确认");
        return;
      } finally {
        setBusy(false);
      }
    }
    onUnlock();
  };

  return (
    <div className="paywall">
      <div className="paywall-card panel">
        <div className="brand-kicker">{PRICE_LABEL}</div>
        <h2>试用已结束</h2>
        <div className="paywall-actions">
          <button type="button" className="btn btn-primary" onClick={pay}>
            去支付
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => void paid()} disabled={busy}>
            我已支付
          </button>
        </div>
        <input
          className="paywall-code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="兑换码（选填）"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
        />
        {error ? <p className="bad-text">{error}</p> : null}
      </div>
    </div>
  );
}
