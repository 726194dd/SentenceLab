/// <reference types="vite/client" />

declare module "*.wav" {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_CHECKOUT_URL?: string;
  readonly VITE_LICENSE_URL?: string;
  readonly VITE_UNLOCK_CODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
