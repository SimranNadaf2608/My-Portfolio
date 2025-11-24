// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav style={{padding:12, borderBottom:'1px solid #eee'}}>
      <Link to="/" style={{marginRight:12}}>Home</Link>
      <Link to="/projects" style={{marginRight:12}}>Projects</Link>
      <Link to="/about" style={{marginRight:12}}>About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
