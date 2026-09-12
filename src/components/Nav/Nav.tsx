import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";

import "./nav.scss";

const LINKS: { to: string; label: string; exact?: boolean }[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  return (
    <nav className="site_nav">
      <NavLink exact to="/" className="site_nav_wordmark" onClick={close}>
        Agamy
      </NavLink>

      <button
        type="button"
        className="site_nav_toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={toggle}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`site_nav_links ${open ? "open" : ""}`}>
        {LINKS.map(({ to, label, exact }) => (
          <NavLink
            key={to}
            to={to}
            exact={exact}
            className="site_nav_link"
            activeClassName="active"
            onClick={close}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
