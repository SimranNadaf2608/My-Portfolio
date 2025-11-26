// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import Footer from "./pages/Footer";


function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{padding:16}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/FOOTER" element={<footer />} />
        </Routes>
              <Footer />

        
      </div>
    </BrowserRouter>
  );
}

export default App;
