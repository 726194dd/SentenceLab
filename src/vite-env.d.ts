/// <reference types="vite/client" />

declare module "*.wav" {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_OFFLINE_ONLY?: string;
  readonly VITE_TIP_QR?: string;
  readonly VITE_TIP_PAY_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
