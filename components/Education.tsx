
import React from 'react';

const EducationEntry: React.FC<{ 
  title: string; 
  institution: string; 
  period: string; 
  description: string; 
  isCurrent?: boolean;
}> = ({ title, institution, period, description, isCurrent }) => {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className={`absolute left-0 md:left-1/2 md:-ml-[9px] top-0 w-[18px] h-[18px] rounded-full z-10 border-2 ${isCurrent ? 'bg-[#2DD4BF] border-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.5)]' : 'bg-[#121212] border-gray-600'}`}>
        {isCurrent && <div className="absolute inset-0 rounded-full animate-ping bg-[#2DD4BF] opacity-40"></div>}
      </div>

      <div className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-12 group`}>
        <div className={`w-full md:w-[45%] mb-4 md:mb-0 ${isCurrent ? 'md:text-right' : 'md:text-right md:order-1'}`}>
           <span className={`text-sm font-mono font-bold tracking-widest ${isCurrent ? 'text-[#2DD4BF]' : 'text-gray-500'}`}>
             {period}
           </span>
        </div>

        <div className={`w-full md:w-[45%] ${isCurrent ? 'md:order-1' : 'md:text-left'}`}>
          <div className="glass p-6 rounded-2xl border border-white/5 group-hover:border-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#2DD4BF] transition-colors">{title}</h3>
            <h4 className="text-[#FF6B6B] font-medium text-sm mb-4 uppercase tracking-wider">{institution}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-[#FF6B6B] text-lg font-bold uppercase tracking-widest mb-4">The Foundation</h3>
        <h2 className="text-4xl md:text-5xl font-bold">Academic <span className="text-glow-teal text-[#2DD4BF]">Journey.</span></h2>
      </div>

      <div className="relative">
        <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#2DD4BF] via-[#FF6B6B] to-transparent opacity-10 hidden md:block"></div>

        <div className="space-y-4 md:space-y-0">
          <EducationEntry 
            title="Bachelor of Computer Applications (BCA)"
            institution="Bharati Vidyapeeth Institute of Management and Research (BVIMR), Delhi"
            period="2024 - Present"
            description="Focusing on software engineering, data structures, and web development. Actively engaging in modern frameworks and full-stack architecture studies."
            isCurrent={true}
          />

          <EducationEntry 
            title="Senior Secondary (12th Grade)"
            institution="K.R. Mangalam World School, Vikaspuri"
            period="Completed"
            description="Achieved academic excellence with a focus on Information Technology and Mathematics, laying the groundwork for a career in tech."
            isCurrent={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;