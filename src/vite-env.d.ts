/// <reference types="vite/client" />

declare module "*.wav" {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_OFFLINE_ONLY?: string;
  readonly VITE_TIP_URL_4?: string;
  readonly VITE_TIP_URL_6?: string;
  readonly VITE_TIP_URL_8?: string;
  readonly VITE_TIP_URL_10?: string;
  readonly VITE_TIP_QR?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
