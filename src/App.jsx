// App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import IntroAnimation from './components/IntroAnimation';
import OverlayMenu from './components/OverlayMenu';

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <IntroAnimation />;
  }

  return (
    <div className="App relative bg-gray-50 min-h-screen">
      <CustomCursor />
      <ParticleBackground />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <OverlayMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;