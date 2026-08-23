import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { warmupSpeech } from "./lib/speech";
import "./index.css";

warmupSpeech();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
