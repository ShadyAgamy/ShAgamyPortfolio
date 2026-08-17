import React, { useState, useEffect, useCallback } from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import HomePage from "./pages/homePage/HomePage";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

import "animate.css/animate.min.css";
import "./reset.scss";
import "./App.scss";

const WIDE_SCREEN = 900;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(
    () => window.innerWidth >= WIDE_SCREEN
  );

  useEffect(() => {
    const resize = () => setMenuOpen(window.innerWidth >= WIDE_SCREEN);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const toggleMenu = useCallback(() => {
    if (window.innerWidth <= WIDE_SCREEN) {
      setMenuOpen((open) => !open);
    }
  }, []);

  return (
    <div className="page_container">
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="width_80">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}
