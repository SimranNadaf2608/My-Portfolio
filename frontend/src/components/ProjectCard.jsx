// src/components/ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ project }){
  return (
    <div style={{
      border:'1px solid #ddd', borderRadius:8, padding:12, marginBottom:12,
      boxShadow:'0 1px 3px rgba(0,0,0,0.03)'
    }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Tech:</strong> {project.tech?.join(', ')}</p>
      <div>
        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Code</a>}
        {' '}
        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Demo</a>}
      </div>
    </div>
  );
}
