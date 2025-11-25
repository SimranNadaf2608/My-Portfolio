// frontend/src/pages/Contact.jsx
import React, {useState} from 'react';
import API from '../services/api';

export default function Contact(){
  const [form,setForm] = useState({name:'', email:'', message:''});
  const [status,setStatus] = useState('');

  async function submit(e){
    e.preventDefault();
    setStatus('Sending...');
    try {
      await API.post('/contact', form);
      setStatus('Message sent — thank you!');
      setForm({name:'',email:'',message:''});
    } catch (err){
      console.error(err);
      setStatus('Error sending — try again later');
    }
  }

  return (
    <div className="container">
      <div className="card" style={{maxWidth:720}}>
        <h2>Contact</h2>
        <form onSubmit={submit} style={{marginTop:12, display:'grid', gap:10}}>
          <input required placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{padding:10, borderRadius:8, border:'1px solid #e6eefc'}} />
          <input required type="email" placeholder="Your email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{padding:10, borderRadius:8, border:'1px solid #e6eefc'}} />
          <textarea required placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={5} style={{padding:10, borderRadius:8, border:'1px solid #e6eefc'}} />
          <div style={{display:'flex', gap:8}}>
            <button className="btn-primary" type="submit">Send Message</button>
            <a href="mailto:simrannadaf2608@gmail.com" className="btn-secondary" style={{padding:'10px 12px'}}>Email Me</a>
          </div>
          <div style={{marginTop:8,color:'#475569'}}>{status}</div>
        </form>

        <div style={{marginTop:18}}>
          <div style={{fontSize:14, color:'#64748b'}}>Quick Links</div>
          <div style={{marginTop:8, display:'flex', gap:8}}>
            <a className="icon-btn" href="https://github.com/SimranNadaf26" target="_blank" rel="noreferrer">GH</a>
            <a className="icon-btn" href="https://www.linkedin.com/in/simrannadaf2608" target="_blank" rel="noreferrer">LI</a>
            <a className="icon-btn" href="/mnt/data/SimranNadafSD.pdf" target="_blank" rel="noreferrer">CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}
