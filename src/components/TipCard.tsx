import { Capacitor } from "@capacitor/core";
import { useRef, useState } from "react";
import { TIP_PAY_URL, TIP_QR_SRC } from "../config/tip";
import { openWeChatPayLink } from "../lib/openWeChatPay";
import { saveImageFromUrl } from "../lib/saveImage";

const LONG_PRESS_MS = 480;
const QR_FILENAME = "sentence-lab-wechat-tip.png";

export function TipCard() {
  const [holding, setHolding] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const pressTimerRef = useRef<number | null>(null);
  const longPressRef = useRef(false);
  const savingRef = useRef(false);
  const payingRef = useRef(false);
  const toastTimerRef = useRef<number | null>(null);

  const clearPress = () => {
    if (pressTimerRef.current != null) {
      window.clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
    setHolding(false);
  };

  const showToast = (message: string, durationMs = 2600) => {
    if (toastTimerRef.current != null) {
      window.clearTimeout(toastTimerRef.current);
    }
    setToast(message);
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, durationMs);
  };

  const handleSaveQr = async () => {
    if (savingRef.current) return;
    savingRef.current = true;
    try {
      showToast(Capacitor.isNativePlatform() ? "正在保存到相册…" : "正在保存二维码…", 1200);
      await saveImageFromUrl(TIP_QR_SRC, QR_FILENAME);
      showToast(Capacitor.isNativePlatform() ? "已保存到相册" : "二维码已开始下载");
    } catch {
      showToast("保存失败，请重试");
    } finally {
      savingRef.current = false;
      setHolding(false);
    }
  };

  const handlePay = async () => {
    if (!TIP_PAY_URL || payingRef.current || savingRef.current) return;
    payingRef.current = true;
    try {
      showToast("正在打开微信…", 1200);
      const result = await openWeChatPayLink(TIP_PAY_URL);
      if (result === "opened") {
        showToast("请在微信中完成付款");
      } else {
        showToast("链接已复制，请在微信中粘贴并点击链接付款");
      }
    } catch {
      showToast("无法打开微信，请先安装微信");
    } finally {
      payingRef.current = false;
    }
  };

  const startPress = () => {
    longPressRef.current = false;
    clearPress();
    setHolding(true);
    pressTimerRef.current = window.setTimeout(() => {
      longPressRef.current = true;
      pressTimerRef.current = null;
      void handleSaveQr();
    }, LONG_PRESS_MS);
  };

  const endPress = () => {
    const wasLongPress = longPressRef.current;
    clearPress();
    if (!wasLongPress && TIP_PAY_URL) {
      void handlePay();
    }
  };

  const defaultHint = TIP_PAY_URL
    ? "点击二维码付款，长按保存到相册"
    : "长按右侧二维码保存，在微信扫一扫中选择相册识别";

  return (
    <section className="home-tip-card" aria-label="打赏">
      <div className="home-tip-main">
        <div className="home-tip-copy">
          <p className="home-tip-text">
            若这个 App 帮到了你，欢迎请我喝杯咖啡。你的支持，是我继续做好内容的动力。
          </p>
          <p className={`home-tip-hint${toast ? " is-active" : ""}`}>{toast ?? defaultHint}</p>
        </div>
        <button
          type="button"
          className={`home-tip-qr-btn${holding ? " is-holding" : ""}`}
          aria-label={TIP_PAY_URL ? "点击付款，长按保存二维码" : "长按保存二维码"}
          onPointerDown={startPress}
          onPointerUp={endPress}
          onPointerLeave={clearPress}
          onPointerCancel={clearPress}
          onContextMenu={(event) => event.preventDefault()}
        >
          <img className="home-tip-qr" src={TIP_QR_SRC} alt="微信收款码" draggable={false} />
        </button>
      </div>
    </section>
  );
}
