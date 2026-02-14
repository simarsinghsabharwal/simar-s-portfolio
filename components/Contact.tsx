
import React from 'react';

const Contact: React.FC = () => {
  const contactDetails = [
    {
      label: 'Email Me',
      value: 's.simarsinghsabharwal@gmail.com',
      href: 'mailto:s.simarsinghsabharwal@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      ),
      color: '#2DD4BF'
    },
    {
      label: 'Call Me',
      value: '+91 92500 75252',
      href: 'tel:+919250075252',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      ),
      color: '#FF6B6B'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/simarsinghsabharwal',
      color: '#2DD4BF',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/simarsabharwal',
      color: '#2DD4BF',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6">
      <div className="text-center mb-12 md:mb-20">
        <h3 className="text-[#2DD4BF] text-sm md:text-lg font-bold uppercase tracking-[0.4em] mb-4">Direct Channel</h3>
        <h2 className="text-3xl md:text-7xl font-black mb-6 tracking-tighter">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#2DD4BF]">Connect.</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Ready to bring your next big idea to life? I'm just a message or call away. 
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-16 md:mb-20">
        {contactDetails.map((detail, idx) => (
          <a 
            key={idx}
            href={detail.href}
            className="group relative block p-[1px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2"
          >
            <div 
              className="absolute inset-0 opacity-10 group-hover:opacity-100 transition-opacity duration-700 blur-sm"
              style={{ background: `linear-gradient(45deg, ${detail.color}, transparent, ${detail.color})` }}
            ></div>
            
            <div className="relative glass bg-[#121212]/90 rounded-[1.5rem] md:rounded-[2rem] px-4 py-10 md:p-12 h-full flex flex-col items-center text-center">
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 transition-all duration-500 group-hover:rotate-[10deg] shadow-lg"
                style={{ backgroundColor: `${detail.color}10`, color: detail.color, border: `1px solid ${detail.color}20` }}
              >
                {detail.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-3 md:mb-4">{detail.label}</span>
              <span className="text-[3.8vw] xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-white group-hover:text-glow-teal transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis w-full block">
                {detail.value}
              </span>
              
              <div className="mt-6 md:mt-8 flex items-center text-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest mr-2">Contact Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center py-6 md:py-10">
        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 md:mb-10"></div>
        <span className="text-gray-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.6em] md:tracking-[0.8em] mb-6 md:mb-8">Digital Footprint</span>
        <div className="flex justify-center gap-6 md:gap-10">
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
              aria-label={social.name}
            >
              <div 
                className="absolute -inset-2 md:-inset-3 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500"
                style={{ backgroundColor: social.color }}
              ></div>
              <div 
                className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center glass rounded-xl md:rounded-2xl border-white/5 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                style={{ color: 'white' }}
              >
                <div className="scale-90 md:scale-100 group-hover:scale-110 transition-transform duration-300" style={{ color: social.color }}>
                  {social.icon}
                </div>
              </div>
              <span className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-white">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
