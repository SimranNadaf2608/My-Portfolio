// frontend/src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <main className="container about-page">
      <div className="about-grid">
        {/* LEFT COLUMN */}
        <section className="about-left">
          <h1 className="about-title">Who I Am</h1>
          <p className="about-lead">
            I build functional, user-friendly experiences with Java and React.
          </p>

          <div className="about-tags">
            <span className="tag">Java & React</span>
            <span className="tag">Frontend & Backend</span>
            <span className="tag">DSA in Java</span>
          </div>

          <div className="about-bio">
            <p>
              Hi, I’m <strong>Simran Nadaf</strong>, a passionate and disciplined developer who loves building
              functional, user-friendly applications using Java, React, and modern web technologies.
            </p>

            <p>
              I enjoy solving problems, creating clean UI/UX, and writing readable, efficient code. My journey
              started with curiosity about how websites and apps work, and today I actively build projects,
              practice DSA, and continuously improve through consistent learning.
            </p>

            <p>
              I believe in growth through practice, patience, and persistence. Whether it’s front-end development,
              Java programming, or exploring new tools, I love turning ideas into real, working applications.
            </p>

            <p>
              My goal is to become a strong full-stack developer and contribute to impactful products that help people.
            </p>
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="about-right">
          <div className="profile-card universal-card">
            <div className="avatar-placeholder">SN</div>
            <div className="profile-info">
              <h4>Simran Nadaf</h4>
              <p className="muted">Java & React Developer</p>
              <div className="profile-tags">
                <span className="small-tag">Open to internships</span>
                <span className="small-tag">Building portfolio</span>
              </div>
            </div>
          </div>

          <div className="snapshot-card universal-card">
            <h4>Quick snapshot</h4>
            <div className="snapshot-row">
              <div className="snapshot-key">Focus</div>
              <div className="snapshot-val">Full-stack development</div>
            </div>

            <div className="snapshot-row">
              <div className="snapshot-key">Core stack</div>
              <div className="snapshot-val">Java, React, MySQL</div>
            </div>

            <div className="snapshot-row">
              <div className="snapshot-key">Strengths</div>
              <div className="snapshot-val">Problem solving, clean UI, consistency</div>
            </div>
          </div>
        </aside>

        {/* SKILLS - spans full width under the sidebar */}
        <div className="card-section about-full universal-card">
          <h3 className="section-title">Skills</h3>
          <p className="section-sub">Core technologies I work with regularly.</p>

          <div className="skills-grid">
            <div className="skill-box universal-card-inner">
              <h4>Programming Languages</h4>
              <div className="skill-row">
                <span className="skill-chip">Java</span>
                <span className="skill-chip">JavaScript</span>
                <span className="skill-chip">HTML</span>
                <span className="skill-chip">CSS</span>
              </div>
            </div>

            <div className="skill-box universal-card-inner">
              <h4>Libraries & Frameworks</h4>
              <div className="skill-row">
                <span className="skill-chip">React</span>
                <span className="skill-chip">React Router</span>
                <span className="skill-chip">MUI</span>
                <span className="skill-chip">Axios</span>
              </div>
            </div>

            <div className="skill-box universal-card-inner">
              <h4>Databases</h4>
              <div className="skill-row">
                <span className="skill-chip">MySQL</span>
                <span className="skill-chip">MongoDB</span>
              </div>
            </div>

            <div className="skill-box universal-card-inner">
              <h4>Tools & Others</h4>
              <div className="skill-row">
                <span className="skill-chip">Git & GitHub</span>
                <span className="skill-chip">VS Code</span>
                <span className="skill-chip">Postman</span>
                <span className="skill-chip">OOP Concepts</span>
              </div>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS (full width) */}
        <div className="card-section about-full">
          <div className="card-section-inner universal-card">
            <h3 className="section-title">Certifications</h3>
            <p className="section-sub">Courses and trainings that support my learning path.</p>

            <div className="cert-grid">
              <div className="cert-card universal-card-inner">
                <strong>Java Programming — Udemy / Coursera</strong>
                <p className="cert-desc">Core Java concepts, OOP, and hands-on practice.</p>
              </div>

              <div className="cert-card universal-card-inner">
                <strong>Web Development — HTML, CSS, JavaScript</strong>
                <p className="cert-desc">Responsive layouts, basic interactivity, and UI fundamentals.</p>
              </div>

              <div className="cert-card universal-card-inner">
                <strong>React Frontend Course — YouTube / Udemy</strong>
                <p className="cert-desc">Components, hooks, state management, routing basics.</p>
              </div>

              <div className="cert-card universal-card-inner">
                <strong>Git & GitHub Essentials</strong>
                <p className="cert-desc">Version control, branching, and collaboration workflows.</p>
              </div>
            </div>
          </div>
        </div>

        {/* GOALS (full width) */}
        <div className="card-section about-full">
          <div className="goal-card universal-card">
            <h3 className="section-title">What I’m Working Toward</h3>
            <p className="section-sub">Where I’m heading and how I’m growing next.</p>

            <p>
              I aim to become a skilled full-stack developer and work on real-world applications that solve meaningful
              problems. I’m focused on strengthening my Java, React, and DSA skills, building high-quality projects, and
              preparing for exciting internship opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}






