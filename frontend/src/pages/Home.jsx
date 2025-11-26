import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const phrases = [
  "Java Developer",
  "React Developer",
  "Problem Solver"
];

export default function Home() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(90);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const current = phrases[phase % phrases.length];
      if (!isDeleting) {
        setText(prev => current.substring(0, prev.length + 1));
        if (text === current) {
          timer = setTimeout(() => setIsDeleting(true), 800);
        } else {
          timer = setTimeout(handleTyping, speed);
        }
      } else {
        setText(prev => current.substring(0, prev.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setPhase(p => (p + 1) % phrases.length);
        }
        timer = setTimeout(handleTyping, speed);
      }
    };
    timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [text, isDeleting, phase]);

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I’m <span style={{ color: "var(--accent)" }}>Simran Nadaf</span> 👋
          </h1>

          <div className="role-typing">
            <span className="typing">{text}</span>
          </div>

          <p className="hero-desc">
            I build interactive web applications and solve challenging problems using Java,
            React, and strong data-structure skills. I focus on clean, reliable and user-friendly software.
          </p>

          <div className="cta-row">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="btn-secondary">Contact Me</Link>
          </div>

          <div className="skills-strip">
            <div className="skill-item">☕ Java</div>
            <div className="skill-item">⚛ React</div>
            <div className="skill-item">🗄️ MySQL</div>
            <div className="skill-item">🔧 Git</div>
            <div className="skill-item">{'[]'} DSA</div>
          </div>

          <div className="highlights">
            <div className="highlight">
              <strong>10+</strong>
              Projects Built
            </div>

            <div className="highlight">
              <strong>300+</strong>
              DSA Problems
            </div>

            <div className="highlight">
              <strong>Java & Web </strong>
              Certified
            </div>
          </div>

          <div className="quick-contacts">
            <a className="icon-btn" href="https://github.com/SimranNadaf26" target="_blank">GitHub</a>
            <a className="icon-btn" href="https://www.linkedin.com/in/simrannadaf2608" target="_blank">LinkedIn</a>
            <a className="icon-btn" href="mailto:simrannadaf2608@gmail.com">Email</a>
            <a className="icon-btn" href="/resume.pdf" target="_blank">Resume</a>
          </div>

        </div>
      </section>
    </div>
  );
}
