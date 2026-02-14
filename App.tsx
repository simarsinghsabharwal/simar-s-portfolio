
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import ResumeCTA from './components/ResumeCTA';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to mimic cinematic load
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center z-[100]">
        <div className="w-16 h-16 border-4 border-t-[#2DD4BF] border-white/10 rounded-full animate-spin mb-4 shadow-[0_0_20px_rgba(45,212,191,0.3)]"></div>
        <h1 className="text-2xl font-bold text-white tracking-widest uppercase animate-pulse">
          Simar Sabharwal
        </h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Background />
      <Navbar />
      
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="pt-20 pb-10 px-6 lg:px-24">
          <About />
        </section>

        {/* Transition Bridge */}
        <ResumeCTA />

        <section id="skills" className="py-20 px-6 lg:px-24 bg-black/20">
          <Skills />
        </section>

        <section id="education" className="py-20 px-6 lg:px-24">
          <Education />
        </section>

        <section id="projects" className="py-20 px-6 lg:px-24 bg-black/10">
          <Projects />
        </section>

        <section id="contact" className="py-20 px-6 lg:px-24 bg-black/40">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;