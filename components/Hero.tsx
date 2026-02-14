
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "I build digital experiences.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Particle Stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Side Decorative Tech Elements */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        <div className="absolute top-[20%] left-[5%] animate-float-slow opacity-10">
          <div className="text-6xl font-thin text-[#2DD4BF]">{'{'}</div>
        </div>
        <div className="absolute bottom-[30%] left-[8%] animate-float opacity-5">
          <div className="w-24 h-24 border border-white rounded-full"></div>
          <div className="w-2 h-20 bg-white/20 ml-12 mt-4"></div>
        </div>
        <div className="absolute top-[35%] right-[6%] animate-float opacity-10" style={{ animationDelay: '1s' }}>
          <div className="text-6xl font-thin text-[#FF6B6B]">{'}'}</div>
        </div>
        <div className="absolute bottom-[15%] right-[10%] animate-float-slow opacity-5">
          <div className="w-32 h-[1px] bg-white/40 rotate-45"></div>
          <div className="w-32 h-[1px] bg-white/40 -rotate-45 mt-4"></div>
        </div>
      </div>

      {/* Spotlight Effect behind Name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2DD4BF]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-28 md:pt-0">
        <h2 className="text-[#2DD4BF] uppercase tracking-[0.6em] text-xs md:text-sm font-black mb-8 animate-fade-in opacity-0 translate-y-4" style={{ animation: 'fadeIn 1.2s forwards' }}>
          Initializing Neural Interface...
        </h2>
        
        <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9] lg:px-10">
          Hi, I'm <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#FF6B6B] to-[#FF6B6B] text-glow-teal">
            Simar Sabharwal.
          </span>
        </h1>
        
        <div className="min-h-[50px] mb-10">
          <p className="text-lg md:text-3xl font-light text-gray-400 tracking-wide max-w-2xl mx-auto">
            {text}
            <span className="w-1.5 h-8 bg-[#2DD4BF] inline-block ml-2 animate-pulse align-middle"></span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16 opacity-0 translate-y-4" style={{ animation: 'fadeIn 1s forwards 0.8s' }}>
          {['Full-Stack', 'UI Architect', 'DevOps', 'Next-Gen Web'].map((tag) => (
            <span key={tag} className="px-5 py-2 glass rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white hover:border-[#2DD4BF]/50 transition-all duration-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in opacity-0 translate-y-8 pb-10 sm:pb-0" style={{ animation: 'fadeIn 1s forwards 1.2s' }}>
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="group relative px-10 py-5 bg-transparent font-black text-white overflow-hidden rounded-2xl border border-white/10 transition-all w-full sm:w-auto text-[11px] uppercase tracking-[0.3em]"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 group-hover:text-[#121212]">Explore My Work</span>
          </a>
          
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="group px-10 py-5 bg-gradient-to-r from-[#FF6B6B] to-[#2DD4BF] font-black text-white rounded-2xl transition-all shadow-[0_10px_30px_rgba(255,107,107,0.3)] hover:shadow-[0_20px_50px_rgba(255,107,107,0.5)] hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto text-[11px] uppercase tracking-[0.3em]"
          >
            Let's Connect
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center opacity-20 hover:opacity-100 transition-all duration-500 group cursor-pointer">
        <span className="text-[10px] uppercase font-black tracking-[0.4em] mb-4 text-white group-hover:text-[#2DD4BF]">Deploy Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#2DD4BF] via-white/20 to-transparent"></div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.6; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-twinkle { animation: twinkle linear infinite; }
        .animate-float-slow { animation: float-slow 10s infinite ease-in-out; }
        .animate-float { animation: float 6s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Hero;
