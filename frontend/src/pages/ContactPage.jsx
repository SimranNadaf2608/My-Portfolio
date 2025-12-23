// frontend/src/pages/Contact.jsx
import React from "react";

function IconEmail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 5.998h18v12H3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 6l-9 7L3 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 9h4v11H3z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 9h4v1.9a4 4 0 0 1 3.6-1.9C20 9 21 12 21 15.5V20h-4v-4.1c0-1.1 0-2.5-1.5-2.5S14 14 14 15.5V20h-4V9z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.05 1.53 1.05.89 1.53 2.34 1.09 2.9.84.09-.66.35-1.09.64-1.34-2.22-.25-4.56-1.12-4.56-4.99 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 6.8c.85.01 1.7.11 2.49.32 1.9-1.3 2.74-1.03 2.74-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.7 0 3.88-2.34 4.74-4.57 4.99.36.31.68.92.68 1.85v2.73c0 .26.18.58.69.48A10 10 0 0 0 12 2z" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconResume() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 17h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconLocation() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Contact() {
  const items = [
    { id: 1, icon: <IconEmail />, title: "Email", value: "simrannadaf2608@gmail.com", href: "mailto:simrannadaf2608@gmail.com" },
    { id: 2, icon: <IconLinkedIn />, title: "LinkedIn", value: "linkedin.com/in/simrannadaf2608", href: "https://www.linkedin.com/in/simrannadaf2608" },
    { id: 3, icon: <IconGitHub />, title: "GitHub", value: "github.com/SimranNadaf2608", href: "https://github.com/SimranNadaf2608" },
    { id: 4, icon: <IconResume />, title: "Resume", value: "Link to my resume", href: "/Simran_Resume.pdf" },
    { id: 5, icon: <IconLocation />, title: "Location", value: "Karnataka, India" }
  ];

  return (
    <main className="container contact-cards-page">
      <header className="contact-header">
        <h1>Contact Details</h1>
        <p className="contact-sub">Find me on these platforms or reach out directly.</p>
      </header>

      <section className="contact-cards-grid">
        {items.map(item => (
          <article key={item.id} className="contact-card">
            <div className="contact-card-left">
              <span className="contact-icon">{item.icon}</span>
            </div>

            <div className="contact-card-right">
              <div className="contact-card-title">{item.title}</div>
              {item.href ? (
                <a className="contact-card-value" href={item.href} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
                  {item.value}
                </a>
              ) : (
                <div className="contact-card-value">{item.value}</div>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
