import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UseFetchDemoApp from "./use_fetch_demo_app.jsx";
import App from "./use_prev_demo_app.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
