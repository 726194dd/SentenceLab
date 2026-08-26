/** Stub for Android offline builds — ONNX runtime is not bundled or used at runtime. */
export const env = { backends: { onnx: { wasm: null as { numThreads: number } | null } } };
