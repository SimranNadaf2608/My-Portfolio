// frontend/src/pages/Projects.jsx
import React, {useEffect, useState} from 'react';
import API from '../services/api';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    API.get('/projects').then(r => { if(mounted) setProjects(r.data); }).catch(console.error).finally(()=>mounted && setLoading(false));
    return ()=> mounted=false;
  },[]);

  return (
    <div className="container">
      <h2 style={{marginBottom:14}}>Projects</h2>
      {loading && <div className="card">Loading...</div>}
      {!loading && projects.length === 0 && <div className="card">No projects yet.</div>}

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:14}}>
        {projects.map(p => (
          <div className="card" key={p._id}>
            <h3 style={{marginBottom:6}}>{p.title}</h3>
            <p style={{color:'#475569'}}>{p.description}</p>
            <div style={{marginTop:8, fontSize:13, color:'#6b7280'}}>Tech: {p.tech?.join(', ')}</div>
            <div style={{marginTop:10}}>
              {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{marginRight:8}}>Code</a>}
              {p.demoUrl && <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn-primary">Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
