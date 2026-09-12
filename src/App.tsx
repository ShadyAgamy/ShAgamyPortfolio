import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import HomePage from "./pages/homePage/HomePage";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import { useTheme } from "./hooks/useTheme";

import "./reset.scss";
import "./App.scss";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="page_container">
      <Nav />
      <main className="page_content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </main>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </div>
  );
}
