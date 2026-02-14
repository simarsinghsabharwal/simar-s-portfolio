
import React from 'react';

const ProjectCard: React.FC<{ title: string; index: number }> = ({ title, index }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-[2px] bg-gradient-to-r from-[#2DD4BF] via-[#FF6B6B] to-[#2DD4BF] rounded-2xl blur-sm opacity-20 group-hover:opacity-100 transition duration-500 animate-gradient-x"></div>
      
      <div className="relative glass rounded-2xl overflow-hidden bg-[#181818]">
        <div className="h-64 w-full relative overflow-hidden bg-gray-900">
          <img 
            src={`https://picsum.photos/seed/proj${index}/600/400`} 
            alt={title}
            className="w-full h-full object-cover blur-[2px] grayscale scale-110 group-hover:scale-100 transition-all duration-700 opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-6 py-2 glass rounded-full text-xs font-bold tracking-[0.3em] text-white uppercase border-[#2DD4BF]/40">
              In Development
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <span className="text-[#2DD4BF] font-mono text-sm">#0{index}</span>
          </div>
          <p className="text-gray-500 mb-8 leading-relaxed">
            A revolutionary platform built with modern technologies focusing on scalability and user interaction. Coming to production soon.
          </p>
          
          <div className="flex gap-4">
            <button disabled className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-500 text-sm font-bold cursor-not-allowed">
              Live Demo
            </button>
            <button disabled className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-500 text-sm font-bold cursor-not-allowed">
              Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-[#FF6B6B] text-lg font-bold uppercase tracking-widest mb-4">Showcase</h3>
        <h2 className="text-4xl md:text-5xl font-bold">Projects <span className="text-glow-teal text-[#2DD4BF]">Coming Soon.</span></h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          I am currently working on high-performance applications that will redefine how we interact with the web. Check back soon for the unveil.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <ProjectCard key={i} index={i} title={`Project Nova ${i}`} />
        ))}
      </div>
      
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Projects;