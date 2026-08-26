/** Stub for Android offline builds — Kokoro is not bundled or used at runtime. */
export class KokoroJP {
  static load(): Promise<KokoroJP> {
    return Promise.reject(new Error("Kokoro unavailable in offline build"));
  }

  speak(): Promise<{ toBlob: () => Blob }> {
    return Promise.reject(new Error("Kokoro unavailable in offline build"));
  }
}
