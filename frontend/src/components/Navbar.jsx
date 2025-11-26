// frontend/src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    if (theme === "light") document.body.classList.add("light");
    else document.body.classList.remove("light");
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  return (
    <header className="navbar" aria-label="Main navigation">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* Make sure resume.pdf exists in frontend/public */}
        <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noreferrer">
          Resume
        </a>

        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
          className="theme-toggle"
          title="Toggle theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
