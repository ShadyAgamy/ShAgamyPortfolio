import { createRoot } from "react-dom/client";
import { HashRouter, useLocation } from "react-router-dom";

import "./index.css";
import App from "./App";
import { useEffect } from "react";
const rootElm = document.getElementById("root");

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

createRoot(rootElm as HTMLElement).render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>,
);
