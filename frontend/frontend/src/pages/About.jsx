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
              I enjoy solving problems and writing readable, efficient code. My journey
              started with curiosity about how websites and apps work, and today I actively build projects,
              practice DSA, and continuously improve through consistent learning.
            </p>

            <p>
              I believe in growth through practice, patience, and persistence. Whether it’s front-end development,
              Java programming, Software Development or exploring new tools, I love turning ideas into real, working applications.
            </p>

            <p>
              My goal is to become a strong Software Developer and contribute to impactful products that help people.
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
              
            </div>
          </div>

          <div className="snapshot-card universal-card">
            <h4>Quick snapshot</h4>
            <div className="snapshot-row">
              <div className="snapshot-key">Focus</div>
              <div className="snapshot-val">Software development</div>
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
                <span className="skill-chip">Node</span>
                <span className="skill-chip">Express</span>
                <span className="skill-chip">Tailwind CSS</span>
                <span className="skill-chip">JDBC</span>

              </div>
            </div>

            <div className="skill-box universal-card-inner">
              <h4>CS Core Concepts</h4>
              <div className="skill-row">
                <span className="skill-chip">Data Structures</span>
                <span className="skill-chip">Algorithms</span>
                <span className="skill-chip">OOP</span>
                <span className="skill-chip">Operating System</span>
                <span className="skill-chip">Networking</span>
                <span className="skill-chip">DBMS</span>

              </div>
            </div>

            <div className="skill-box universal-card-inner">
              <h4>Tools & Others</h4>
              <div className="skill-row">
                <span className="skill-chip">Git & GitHub</span>
                <span className="skill-chip">VS Code</span>
                <span className="skill-chip">Postman</span>
                <span className="skill-chip">REST APIs</span>
                <span className="skill-chip">Jira</span>
                <span className="skill-chip">Linux</span>
                <span className="skill-chip">MySQL</span>
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
                <strong>AWS — AWS Academy</strong>
                <p className="cert-desc">Deploying and Managing cloud resources. </p>
              </div>

              <div className="cert-card universal-card-inner">
                <strong>Databases</strong>
                <p className="cert-desc">Concepts of SQL, normaliza on, indexing, transac ons, and database design.</p>
              </div>

              <div className="cert-card universal-card-inner">
                <strong>Secure coding in Java and SpringBoot</strong>
                <p className="cert-desc">Components, hooks, state management, routing basics.</p>
              </div>

              <div className="cert-card universal-card-inner">
                <strong>Postman API</strong>
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
              I aim to become a skilled Software developer and work on real-world applications that solve meaningful
              problems. I’m focused on strengthening my Java, React, and DSA skills, building high-quality projects, and
              preparing for exciting internship opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}






