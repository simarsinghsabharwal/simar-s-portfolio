
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 flex justify-center lg:justify-start">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2DD4BF] via-[#FF6B6B] to-[#2DD4BF] rounded-full blur-md opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
          <div className="absolute -inset-4 bg-[#2DD4BF]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#121212] z-10 bg-[#1a1a1a] flex items-center justify-center shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
               alt="Simar Singh Profile" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
               style={{ objectPosition: 'center 20%' }}
               onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Simar+Sabharwal&background=121212&color=2DD4BF&size=512&bold=true';
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="absolute -top-2 -right-6 glass px-5 py-2 rounded-2xl text-[10px] font-black tracking-widest border-[#2DD4BF]/40 z-20 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
            ENGINEER
          </div>
          <div className="absolute -bottom-2 -left-6 glass px-5 py-2 rounded-2xl text-[10px] font-black tracking-widest border-[#FF6B6B]/40 z-20 shadow-lg animate-bounce" style={{ animationDuration: '4s' }}>
            CREATIVE
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="inline-block px-4 py-1 rounded-full border border-[#2DD4BF]/20 bg-[#2DD4BF]/5 mb-6">
          <span className="text-[#2DD4BF] text-[10px] font-black uppercase tracking-[0.5em]">System Profile</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tighter">
          Architecting Seamless <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#FF6B6B] text-glow-teal">Digital Worlds.</span>
        </h2>
        
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-2xl">
          <p>
            I am a results-driven developer dedicated to building scalable web applications with clean architecture and extreme performance. Currently pursuing my <span className="text-white font-semibold">BCA at BVIMR</span>, I blend academic rigor with real-world technical execution.
          </p>
          <p>
            My philosophy is simple: <span className="text-[#2DD4BF] italic">Code should be as elegant as it is functional.</span> I specialize in bridging the gap between complex backend logic and intuitive, high-impact user interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
