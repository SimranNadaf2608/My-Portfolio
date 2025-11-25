// frontend/src/pages/About.jsx
import React from 'react';

export default function About(){
  return (
    <div className="container">
      <div className="card">
        <h2>About Me</h2>
        <p style={{marginTop:8, color:'#475569'}}>Hi — I’m <strong>Simran Nadaf</strong>, a Computer Science student building web applications with MERN and learning cloud & DevOps. I enjoy solving problems and building complete systems.</p>

        <h3 style={{marginTop:14}}>Skills</h3>
        <p>Java • JavaScript • React • Node • Express • MongoDB • MySQL • Git • Linux • AWS (basic)</p>

        <h3 style={{marginTop:12}}>Certifications</h3>
        <ul style={{marginTop:6, marginLeft:18}}>
          <li>Database Management Certification — SQL, normalization, indexing, transactions</li>
          <li>Secure Coding in Java — secure development practices</li>
        </ul>
      </div>
    </div>
  );
}
