// src/pages/Experience.jsx
import React from "react";

export default function Experience() {
  return (
    <main className="exp-body">
      <div className="exp-container">

        {/* Page Intro */}
        <div className="exp-intro">
          <p className="exp-top-label">Experience &amp; Education</p>
          <h1 className="exp-main-title">My Journey</h1>
          <p className="exp-subtitle">
            A timeline of growth, learning, and Java and MERN development.
          </p>
        </div>

        {/* EXPERIENCE SECTION */}
        <section className="exp-section">
          <h2 className="exp-section-title">Experience</h2>

          <div className="exp-grid">

            {/* Card 1 */}
            <div className="exp-card">
              <div className="exp-card-left-border"></div>

              <div className="exp-card-content">
                <div className="exp-card-header">
                  <h3>MERN Stack Development</h3>
                  <p className="exp-date">May 2025 – July 2025</p>
                </div>

                <p className="exp-company">Codelab Systems • Internship</p>

                <ul>
                  <li>Built and deployed a full-stack web application using React.js, Node.js, Express.js, and MongoDB.</li>
                  <li>Designed and implemented 6+ RESTful API endpoints to improve backend response efficiency.</li>
                  <li>Used Postman for API testing and debugging to ensure stable and optimized APIs.</li>
                  <li>Deployed frontend on Vercel and backend on Render with proper environment configuration.</li>
                </ul>
              </div>
            </div>

        
          </div>
        </section>

        {/* EDUCATION SECTION */}
                <section className="exp-section">

                {/* OUTER CARD */}
                <div className="edu-outer-card">

                    {/* INSIDE HEADING */}
                    <h2 className="edu-outer-title">Education</h2>

                    <div className="edu-inner-grid">

                    {/* INNER CARD 1 – BE */}
                    <div className="edu-inner-card">
                        <div className="edu-inner-content">
                        <h3 className="edu-inner-title">Bachelor of Technology (CSE)</h3>
                        <p className="edu-inner-date">2022 – 2026</p>
                        <p className="edu-inner-college">Srinivas University, Karnataka</p>

                        <div className="edu-inner-details">
                            <h4>Relevant Coursework</h4>
                            <p>
                            Data Structures, Cloud Computing, System Software, Compiler Design, DBMS.
                            </p>

                        </div>
                        </div>
                    </div>

                    {/* INNER CARD 2 – PUC */}
                    <div className="edu-inner-card">
                        <div className="edu-inner-content">
                        <h3 className="edu-inner-title">Pre-University Course (Science)</h3>
                        <p className="edu-inner-date">2020 – 2022</p>
                        <p className="edu-inner-college">State PU Board, Karnataka</p>

                        <div className="edu-inner-details">
                            <h4>Subjects</h4>
                            <p>Physics, Chemistry, Mathematics, Biology</p>

                        </div>
                        </div>
                    </div>

                    </div>

                </div>
                </section>



      </div>
    </main>
  );
}
