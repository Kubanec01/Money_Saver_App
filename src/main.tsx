import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import "./utils/i18n.ts";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./hooks/context/authContext/index.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="Money_Saver_App">
      <App />
    </BrowserRouter>
  </StrictMode>
);
