/// <reference types="vite/client" />

declare module "*.wav" {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_TIP_URL_1?: string;
  readonly VITE_TIP_URL_2?: string;
  readonly VITE_TIP_URL_5?: string;
  readonly VITE_TIP_URL_10?: string;
  readonly VITE_TIP_QR_1?: string;
  readonly VITE_TIP_QR_2?: string;
  readonly VITE_TIP_QR_5?: string;
  readonly VITE_TIP_QR_10?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
