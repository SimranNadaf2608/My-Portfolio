// src/components/ContactForm.jsx
import React, { useState } from 'react';
import API from '../services/api';

export default function ContactForm(){
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    setStatus('Sending...');
    try {
      await API.post('/contact', form);
      setStatus('Message sent — thanks!');
      setForm({ name:'', email:'', message:'' });
    } catch (err) {
      console.error(err);
      setStatus('Error sending message');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{maxWidth:600}}>
      <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} style={{width:'100%',padding:8, marginBottom:8}} />
      <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} style={{width:'100%',padding:8, marginBottom:8}} />
      <textarea required placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} style={{width:'100%',padding:8, marginBottom:8}} />
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
}
