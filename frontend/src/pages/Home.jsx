// frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Hi, I’m Simran Nadaf <span style={{marginLeft:8}}>👋</span></h1>
          <div className="hero-sub">Java Developer | React Developer | Problem Solver</div>
          <p className="hero-desc">
            I build interactive web applications and solve challenging problems using Java, React, and strong algorithmic foundations.
          </p>

          <div className="cta-row">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="btn-secondary">Contact Me</Link>
          </div>

          <div className="skills-row" aria-hidden>
            <div className="skill-pill">Java</div>
            <div className="skill-pill">React</div>
            <div className="skill-pill">MySQL</div>
            <div className="skill-pill">Git</div>
            <div className="skill-pill">DSA</div>
          </div>

          <div className="highlights" role="list">
            <div className="highlight" role="listitem">
              <strong>10+</strong>
              <div style={{fontSize:13, color:'#64748b'}}>Projects Built</div>
            </div>
            <div className="highlight">
              <strong>300+</strong>
              <div style={{fontSize:13, color:'#64748b'}}>DSA Problems</div>
            </div>
            <div className="highlight">
              <strong>Java & Web</strong>
              <div style={{fontSize:13, color:'#64748b'}}>Certified</div>
            </div>
          </div>

          <div className="quick-contacts" style={{marginTop:18}}>
            <a className="icon-btn" href="https://github.com/SimranNadaf26" target="_blank" rel="noreferrer" title="GitHub">GH</a>
            <a className="icon-btn" href="https://www.linkedin.com/in/simrannadaf2608" target="_blank" rel="noreferrer" title="LinkedIn">LI</a>
            <a className="icon-btn" href="mailto:simrannadaf2608@gmail.com" title="Email">@</a>
            <a className="icon-btn" href="/mnt/data/SimranNadafSD.pdf" target="_blank" rel="noreferrer" title="Resume">CV</a>
          </div>
        </div>

        <div className="hero-right" aria-hidden>
          {/* simple avatar placeholder - replace with your image if available */}
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:36, fontWeight:700, color:'#111827'}}>SN</div>
            <div style={{marginTop:8, color:'#475569'}}>Full-Stack • MERN</div>
          </div>
        </div>
      </section>
    </div>
  );
}
