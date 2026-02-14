
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Education', href: 'education' },
    { name: 'Projects', href: 'projects' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
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
    <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${isScrolled ? 'py-4 glass shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="text-xl lg:text-2xl font-black tracking-tighter text-white group flex items-center shrink-0"
        >
          <div className="bg-gradient-to-br from-[#2DD4BF] to-[#FF6B6B] text-[#121212] w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl mr-2 lg:mr-3 group-hover:rotate-[360deg] transition-transform duration-1000 shadow-[0_0_15px_rgba(45,212,191,0.3)]">
            <span className="font-black text-sm lg:text-base">S</span>
          </div>
          <span className="hidden sm:inline">SIMAR <span className="text-[#2DD4BF] group-hover:text-[#FF6B6B] transition-colors">.</span> SABHARWAL</span>
        </a>
        
        {/* Desktop Links - Optimized for Tablet (md) to Desktop (lg) */}
        <ul className="hidden md:flex md:space-x-4 lg:space-x-10 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] transition-all duration-300 relative group py-2
                  ${activeSection === link.href ? 'text-[#2DD4BF]' : 'text-gray-400 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#2DD4BF] to-[#FF6B6B] transition-all duration-500 ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-4 lg:px-8 py-2 lg:py-3 rounded-xl bg-[#FF6B6B] text-white font-black text-[9px] lg:text-[10px] uppercase tracking-widest hover:shadow-[0_0_25px_rgba(255,107,107,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile toggle button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-[70] w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none glass rounded-xl border-white/10"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-[#2DD4BF] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#2DD4BF] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#2DD4BF] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#121212] z-[65] transition-all duration-700 md:hidden flex flex-col items-center justify-center space-y-10
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
          
          {navLinks.map((link, i) => (
            <a 
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-4xl font-black text-white hover:text-[#2DD4BF] transition-all tracking-tighter hover:scale-110"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="mt-4 px-12 py-5 rounded-2xl bg-gradient-to-r from-[#2DD4BF] to-[#FF6B6B] text-[#121212] font-black text-sm uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(45,212,191,0.3)]"
          >
            Hire Me Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
