// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <header className="container navbar" style={{borderBottom:'1px solid #eef2ff'}}>
      <div className="nav-left">
        <Link to="/" className="brand">Simran Nadaf</Link>
      </div>

      <nav className="nav-links" aria-label="Main Navigation">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a className="resume-btn" href="/mnt/data/SimranNadafSD.pdf" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    </header>
  );
}
