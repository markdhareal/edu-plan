import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MainPage from "./components/MainPage.jsx";
import LandingPage from "./components/LandingPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
