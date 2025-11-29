// src/pages/Projects.jsx
import React from "react";

const featuredProjects = [
  {
    id: "shopnest",
    labelLine1: "ShopNest — E-Commerce UI",
    title: "ShopNest (E-Commerce Frontend)",
    badge: "Modern storefront experience",
    description:
      "A responsive e-commerce frontend with product browsing, filtered search, cart management, and checkout flow. Focused on fast navigation, clean product presentation, and a smooth buying journey.",
    tech: ["React", "MUI", "JavaScript", "REST APIs"],
    tags: [
      "Product listing & detail pages",
      "Filter & sort products",
      "Persistent shopping cart",
      "Responsive layout"
    ],
    github: "https://github.com/SimranNadaf2608/Recipe-App.git",
    demo: "",
    vercel: "https://shopnest.vercel.app"
  },
  {
    id: "focusflow",
    labelLine1: "FocusFlow — Productivity Timer",
    title: "FocusFlow (Productivity Timer App)",
    badge: "Deep work & break cycles",
    description:
      "A minimal timer app built around focused work sessions and structured breaks. Designed to reduce distractions, track completed cycles, and help build consistent study or work habits.",
    tech: ["React", "TypeScript", "Styled Components"],
    tags: ["Custom session lengths", "Session statistics", "Audio alerts", "Distraction-free UI"],
    github: "",
    demo: "",
    vercel: ""
  },
  {
    id: "student-mgmt",
    labelLine1: "Java Student Management System",
    title: "Java Student Management System",
    badge: "Console-driven backend logic",
    description:
      "A Java console application to manage student records, including creation, updates, search, and reporting. Emphasizes clean object-oriented design, input validation, and data persistence.",
    tech: ["Java", "OOP", "Collections"],
    tags: ["Add / update / delete students", "Search by ID & name", "Basic reporting", "Menu-based console UI"],
    github: "https://github.com/yourusername/java-student-mgmt",
    demo: "",
    vercel: ""
  },
  {
    id: "weather-app",
    labelLine1: "Weather App — Live Forecasts",
    title: "Weather App",
    badge: "Clean real-time weather overview",
    description:
      "A weather dashboard that shows current conditions and multi-day forecasts for any city. Built around quick search, meaningful weather details, and a simple, uncluttered design.",
    tech: ["React", "JavaScript", "OpenWeather API", "CSS Modules"],
    tags: ["City search with suggestions", "Current & 5-day forecast", "Temperature & humidity", "Condition-based icons"],
    github: "",
    demo: "",
    vercel: "https://weather-demo.vercel.app",
    highlight: true
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
    id: "todo",
    title: "Todo App",
    description: "Task manager with add, edit, delete, and completion states.",
    tech: "React, JavaScript, localStorage",
    github: "https://github.com/SimranNadaf2608/Todo-App"
  },
  {
    id: "calculator",
    title: "Calculator App",
    description: "Basic calculator for everyday operations with keyboard support.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/SimranNadaf2608/Calculator"
  },
  {
    id: "password",
    title: "Password Generator",
    description: "Generates strong, customizable passwords with copy support.",
    tech: "JavaScript, DOM APIs",
    github: "https://github.com/SimranNadaf2608/Password-Generator"
  },
  {
    id: "login-form",
    title: "Login Form UI",
    description: "Modern, responsive login page with subtle validation states.",
    tech: "HTML, CSS, responsive layout",
    github: "https://github.com/SimranNadaf2608/Login-Form"
  },
  {
    id: "notes",
    title: "Notes App",
    description: "Lightweight note-taking app for quick ideas and to-dos.",
    tech: "React, LocalStorage",
    github: "https://github.com/SimranNadaf2608/Notes-App"
  }
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
