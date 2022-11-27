import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { createRoot } from "react-dom/client";

import App from "App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
