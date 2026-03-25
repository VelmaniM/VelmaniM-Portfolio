import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/",              label: "Home" },
  { to: "/about",         label: "About Me" },
  { to: "/projects",      label: "Projects" },
  { to: "/contact",       label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav>
      <h1 className="logo">Portfolio</h1>

      <div
        className="menu-toggle"
        onClick={() => setOpen(o => !o)}
        role="button" tabIndex={0}
        onKeyDown={e => e.key === "Enter" && setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span style={{ transform: open ? "rotate(45deg) translate(5px,5px)"  : "none" }} />
        <span style={{ opacity: open ? 0 : 1 }} />
        <span style={{ transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
      </div>

      <ul className={`link${open ? " show" : ""}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={pathname === to ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
