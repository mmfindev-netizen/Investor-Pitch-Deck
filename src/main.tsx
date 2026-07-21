import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/theme.css";
import "./styles/animations.css";
import "./styles/presentation.css";
import "./styles/slides.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
