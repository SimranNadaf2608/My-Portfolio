// src/pages/Home.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Home(){
  return (
    <div>
      <h1>Hello — I’m Simran</h1>
      <p>Welcome to my MERN portfolio. I build web apps and learn new stuff every day.</p>
      <h2>Contact me</h2>
      <ContactForm />
    </div>
  );
}
