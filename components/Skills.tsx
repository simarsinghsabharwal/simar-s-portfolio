
import React from 'react';

interface SkillProps {
  name: string;
  icon: string;
  desc: string;
  percent: number;
  color: string;
}

const SkillCard: React.FC<SkillProps> = ({ name, icon, desc, percent, color }) => {
  return (
    <div className="glass group relative p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className={`absolute top-0 right-0 w-24 h-24 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500`} style={{ backgroundColor: color }}></div>
      
      <div className="relative z-10">
        <div className="text-4xl mb-6">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {desc}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold uppercase tracking-tighter">
            <span className="text-gray-500">Mastery</span>
            <span style={{ color }}>{percent}%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percent}%`, backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillsList: SkillProps[] = [
    { name: 'HTML', icon: '🎨', desc: 'Structuring web pages with semantic perfection and accessibility.', percent: 95, color: '#FF6B6B' },
    { name: 'CSS', icon: '💅', desc: 'Advanced styling, animations, and responsive layouts that look stunning.', percent: 90, color: '#2DD4BF' },
    { name: 'JavaScript', icon: '⚡', desc: 'Deep knowledge of ES6+, DOM, and asynchronous programming.', percent: 92, color: '#F7DF1E' },
    { name: 'TypeScript', icon: '🛡️', desc: 'Typed safety and robust interface designs for large applications.', percent: 88, color: '#2DD4BF' },
    { name: 'Node.js', icon: '🚀', desc: 'Building high-performance server-side logic and RESTful APIs.', percent: 85, color: '#2DD4BF' },
    { name: 'Python', icon: '🐍', desc: 'Writing clean, efficient code for data, logic, and automation.', percent: 82, color: '#4584B6' },
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