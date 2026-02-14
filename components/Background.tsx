
import React, { useEffect, useState } from 'react';

const Background: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#0a0a0a]">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-[5] pointer-events-none" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`, backgroundRepeat: 'repeat' }}></div>

      {/* Animated Gradient Mesh */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#2DD4BF]/10 rounded-full blur-[140px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#FF6B6B]/5 rounded-full blur-[140px] animate-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-[#121212]/40 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Tech Grid with Radial Mask */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ 
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, 
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(circle at center, transparent 20%, black 100%)',
        WebkitMaskImage: 'radial-gradient(circle at center, transparent 20%, black 100%)'
      }}></div>

      {/* Side Glow Beams */}
      <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#2DD4BF]/20 to-transparent blur-md"></div>
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF6B6B]/10 to-transparent blur-md"></div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 15s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Background;