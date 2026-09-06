import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop.tsx";
const rootElm = document.getElementById("root");

createRoot(rootElm as HTMLElement).render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>,
);
