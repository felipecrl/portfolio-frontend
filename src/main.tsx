import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import "@/styles/index.css";

const THEME_KEY = "portfolio-theme";
const storedTheme = window.sessionStorage.getItem(THEME_KEY);
const initialTheme = storedTheme === "light" ? "light" : "dark";

document.documentElement.classList.remove("light", "dark");
document.documentElement.classList.add(initialTheme);
window.sessionStorage.setItem(THEME_KEY, initialTheme);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
