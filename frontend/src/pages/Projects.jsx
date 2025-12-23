// src/pages/Projects.jsx
import React from "react";

const featuredProjects = [
  {
    id: "Geo",
    labelLine1: "Geo-Poverty-Analyzer",
    title: "GeoPovertyAnalyzer",
    badge: "Modern fullstack experience",
    description:
      "A geospatial tool that maps poverty levels to support targeted community development.",
    tech: ["Python", "React", "AIML", "REST APIs"],
    tags: [
      "Data collection & cleaning",
      "Data analysis & visualization",
      "future predictions using ML",
      "Results dashboard"
    ],
    github: "https://github.com/SimranNadaf2608/GeoPovertyAnalyzer.git",
    vercel: "https://recipe-kohl-zeta.vercel.app/",
    "Actively Developing": true
  }
];

const otherProjects = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects, skills, and contact details.",
    tech: "React, JavaScript, CSS",
    github: "https://github.com/SimranNadaf2608/My-Portfolio"
  },
  {
    id: "Recipe",
    title: "Recipe - App",
    description: "Built features for recipe sharing, ingredients, instructions.",
    tech: "React, JavaScript, localStorage",
    github: "https://github.com/SimranNadaf2608/Recipe-App.git"
  },
  {
    id: "Portal",
    title: "Complaint Management Portal",
    description: "It allows students to submit, view, and delete complaints through a user-friendly web interface. ",
    tech: " Java, pring Boot, MySQL",
    github: "https://github.com/SimranNadaf2608/Complaint-Management-Portal-.git"
  },
  
];


export default function Projects() {
  return (
    <div className="container projects-page">
      {/* Header */}
      <header className="projects-header">
        <h1>My Projects</h1>
        <p className="projects-subtitle">Things I’ve built — turning ideas into working solutions.</p>
        <p className="projects-description">
          A collection of the work I’m most proud of. These projects helped me practice real-world problem solving,
          clean UI design, and consistent coding habits.
        </p>
      </header>

      {/* Featured */}
      <section className="projects-section">
        <h2 className="projects-section-title">Featured Projects</h2>
        <div className="projects-featured-list">
          {featuredProjects.map(project => (
            <article
              key={project.id}
              className={"project-card" + (project.highlight ? " project-card--highlight" : "")}
            >
              <div className="project-card-left">
                <div className="project-label">
                  {project.labelLine1}
                </div>
              </div>

              <div className="project-card-right">
                <header className="project-card-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.badge && <span className="project-badge">{project.badge}</span>}
                </header>

                <p className="project-desc">{project.description}</p>

                <div className="project-tech-row">
                  <span className="project-tech-label">Tech Stack:</span>
                  <div className="project-tech-chips">
                    {project.tech.map(t => <span key={t} className="chip chip-tech">{t}</span>)}
                  </div>
                </div>

                <div className="project-tags-row">
                  {project.tags.map(tag => <span key={tag} className="chip chip-tag">{tag}</span>)}
                </div>

                <div className="project-links-row">
                  {project.github ? (
                    <a className="btn-small btn-small-primary" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                  ) : null}

                  {project.vercel ? (
                    <a className="btn-small btn-small-vercel" href={project.vercel} target="_blank" rel="noreferrer">Vercel</a>
                  ) : null}

                  {project.demo ? (
                    <a className="btn-small btn-small-ghost" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                  ) : null}

                  {!project.github && !project.demo && !project.vercel && (
                    <span className="project-coming-soon">Links coming soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Other projects */}
      <section className="projects-section">
                  <h2 className="projects-section-title">Other Projects</h2>

                  <div className="projects-other-grid">
                    {otherProjects.map(p => (
                      <article key={p.id} className="other-project-card">
                        <h3>{p.title}</h3>
                        <p className="other-project-desc">{p.description}</p>
                        <p className="other-project-tech">{p.tech}</p>

                        <a
                          href={p.github}
                          className="other-project-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      </article>
                    ))}
                  </div>

                  <br />

                  <p className="projects-note">
                    I consistently build new projects to improve my skills and learn new technologies.
                    More projects coming soon!
                  </p>
        </section>

    </div>
  );
}
