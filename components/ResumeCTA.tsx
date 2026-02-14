import React from 'react';

const ResumeCTA: React.FC = () => {
  return (
    <div className="relative py-12 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"></div>
      
      <div className="relative z-10">
        <a 
          href="simarresume.pdf-1.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <button 
            className="group relative px-10 py-5 bg-[#FF6B6B] hover:bg-[#ff5252] text-white rounded-2xl font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_40px_rgba(255,107,107,0.3)] hover:shadow-[0_20px_60px_rgba(255,107,107,0.5)] hover:-translate-y-1 flex items-center gap-4 overflow-hidden"
          >
            <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            
            <span className="relative z-10">Download Full Resume</span>
          </button>
        </a>
      </div>

      <style>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .animate-shine {
          animation: shine 0.75s;
        }
      `}</style>
    </div>
  );
};

export default ResumeCTA;
