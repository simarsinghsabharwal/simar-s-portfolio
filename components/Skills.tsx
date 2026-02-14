
import React from 'react';

interface SkillProps {
  name: string;
  icon: React.ReactNode;
  desc: string;
  color: string;
}

const SkillCard: React.FC<SkillProps> = ({ name, icon, desc, color }) => {
  return (
    <div className="glass group relative p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className={`absolute top-0 right-0 w-24 h-24 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500`} style={{ backgroundColor: color }}></div>
      
      <div className="relative z-10">
        <div className="mb-6" style={{ color: color }}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillsList: SkillProps[] = [
    { 
      name: 'HTML', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>
      ), 
      desc: 'Structuring web pages with semantic perfection and accessibility.', 
      color: '#FF6B6B' 
    },
    { 
      name: 'CSS', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      ), 
      desc: 'Advanced styling, animations, and responsive layouts that look stunning.', 
      color: '#2DD4BF' 
    },
    { 
      name: 'JavaScript', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      ), 
      desc: 'Deep knowledge of ES6+, DOM, and asynchronous programming.', 
      color: '#F7DF1E' 
    },
    { 
      name: 'TypeScript', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
      ), 
      desc: 'Typed safety and robust interface designs for large applications.', 
      color: '#2DD4BF' 
    },
    { 
      name: 'Node.js', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      ), 
      desc: 'Building high-performance server-side logic and RESTful APIs.', 
      color: '#2DD4BF' 
    },
    { 
      name: 'Python', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H9a7 7 0 0 0-7 7v5a7 7 0 0 0 7 7h6a7 7 0 0 0 7-7v-3"/><path d="M12 10V4"/><path d="M8 8h8"/></svg>
      ), 
      desc: 'Writing clean, efficient code for data, logic, and automation.', 
      color: '#4584B6' 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-[#2DD4BF] text-lg font-bold uppercase tracking-widest mb-4">The Toolkit</h3>
        <h2 className="text-4xl md:text-5xl font-bold">Tech Stack <span className="text-glow-coral text-[#FF6B6B]">& Powers.</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsList.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
