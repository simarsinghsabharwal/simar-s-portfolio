
import React from 'react';

const Footer: React.FC = () => {
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
    <footer className="relative z-20 py-12 px-6 lg:px-24 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="text-2xl font-bold tracking-tighter text-white group"
          >
            SIMAR <span className="text-[#2DD4BF] group-hover:text-[#FF6B6B] transition-colors">.</span> SABHARWAL
          </a>
        </div>
        
        <div className="flex gap-8">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Projects', id: 'projects' }
          ].map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-xs uppercase tracking-widest text-gray-500 hover:text-[#2DD4BF] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
