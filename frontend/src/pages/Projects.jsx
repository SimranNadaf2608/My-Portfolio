// src/pages/Projects.jsx
import React, { useEffect, useState } from 'react';
import API from '../services/api';
import ProjectCard from '../components/ProjectCard';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    API.get('/projects')
      .then(res => { if (mounted) setProjects(res.data); })
      .catch(err => console.error(err))
      .finally(() => { if (mounted) setLoading(false); });
    return () => mounted = false;
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (!projects.length) return <p>No projects found.</p>;

  return (
    <div>
      <h2>Projects</h2>
      {projects.map(p => <ProjectCard key={p._id} project={p} />)}
    </div>
  );
}
