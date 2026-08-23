/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHECKOUT_URL?: string;
  readonly VITE_LICENSE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
