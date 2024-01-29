import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// importera radix-theme-stylen
import "@radix-ui/themes/styles.css";
// importerar komponenten med theme
import { Theme } from "@radix-ui/themes";

// import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* wrappar appen med theme */}
    <Theme accentColor="gray" radius="large">
      <App />
    </Theme>
  </React.StrictMode>
);
