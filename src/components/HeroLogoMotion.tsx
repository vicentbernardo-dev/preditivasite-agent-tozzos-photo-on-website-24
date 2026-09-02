import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Activity, Zap, ShieldCheck } from 'lucide-react';

export const HeroLogoMotion: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full max-w-[440px] aspect-square flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer ambient glow fields */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[#0DF205]/20 rounded-full blur-[100px] pointer-events-none transition-all duration-700 group-hover:bg-[#0DF205]/30"
      />
      <div 
        aria-hidden="true" 
        className="absolute inset-10 bg-[#26D3AB]/15 rounded-full blur-[80px] pointer-events-none"
      />

      {/* Orbital Ring 1: Clockwise thin line */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] border border-[#0DF205]/20 rounded-full pointer-events-none"
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0DF205] shadow-[0_0_12px_#0DF205]" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#26D3AB] shadow-[0_0_8px_#26D3AB]" />
      </motion.div>

      {/* Orbital Ring 2: Counter-Clockwise dashed */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[240px] h-[240px] sm:w-[270px] sm:h-[270px] border border-dashed border-[#26D3AB]/25 rounded-full pointer-events-none"
      >
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#0DF205] shadow-[0_0_10px_#0DF205]" />
      </motion.div>

      {/* Floating Centerpiece: 4-pointed neon star with smooth pulsation & floating motion */}
      <motion.div
        animate={{ 
          y: isHovered ? [0, -6, 0] : [0, -12, 0],
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="relative z-10 flex items-center justify-center"
      >
        {/* Pulsating Radiating Wave Rings */}
        <motion.div
          animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
          className="absolute w-24 h-24 rounded-full border border-[#0DF205]/60 pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 2.8, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', delay: 0.7 }}
          className="absolute w-24 h-24 rounded-full border border-[#26D3AB]/40 pointer-events-none"
        />

        {/* Central Glowing 4-pointed Star */}
        <motion.div
          animate={{ 
            scale: isHovered ? [1.15, 1.25, 1.15] : [1, 1.1, 1],
            filter: [
              'drop-shadow(0 0 25px rgba(13,242,5,0.75)) drop-shadow(0 0 50px rgba(13,242,5,0.4))',
              'drop-shadow(0 0 45px rgba(13,242,5,0.95)) drop-shadow(0 0 80px rgba(13,242,5,0.6))',
              'drop-shadow(0 0 25px rgba(13,242,5,0.75)) drop-shadow(0 0 50px rgba(13,242,5,0.4))',
            ]
          }}
          transition={{ 
            duration: 2.2, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="cursor-pointer"
        >
          <svg
            width="130"
            height="130"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300"
          >
            {/* Smooth 4-pointed concave star */}
            <path
              d="M24 2C24 14.15 14.15 24 2 24C14.15 24 24 33.85 24 46C24 33.85 33.85 24 46 24C33.85 24 24 14.15 24 2Z"
              fill="#0DF205"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Floating Micro-Badge Top Right: +95 PageSpeed */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 right-0 sm:right-2 z-30 bg-[#0D1612]/95 border border-[#0DF205]/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#0DF205] font-mono flex items-center gap-2.5 shadow-[0_4px_25px_rgba(13,242,5,0.3)] backdrop-blur-md hover:scale-105 transition-transform"
      >
        <TrendingUp className="w-4 h-4 text-[#0DF205]" />
        <span className="font-bold">+95 PageSpeed</span>
      </motion.div>

      {/* Floating Micro-Badge Bottom Left: Core Web Vitals Pass */}
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -3, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute -bottom-2 left-0 sm:left-2 z-30 bg-[#0D1612]/95 border border-[#26D3AB]/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#26D3AB] font-mono flex items-center gap-2.5 shadow-[0_4px_25px_rgba(38,211,171,0.3)] backdrop-blur-md hover:scale-105 transition-transform"
      >
        <Activity className="w-4 h-4 text-[#26D3AB]" />
        <span className="font-bold">Core Web Vitals Pass</span>
      </motion.div>

      {/* Floating Micro-Badge Right Center: 100% Preditivo */}
      <motion.div
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
        className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 z-30 bg-[#0D1612]/90 border border-white/20 rounded-xl px-3.5 py-2 text-xs text-white/90 font-mono items-center gap-2 shadow-lg backdrop-blur-md hover:scale-105 transition-transform"
      >
        <Zap className="w-4 h-4 text-[#0DF205]" />
        <span>100% Preditivo</span>
      </motion.div>

      {/* Floating Micro-Badge Top Left: Squad Dedicado */}
      <motion.div
        animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="hidden sm:flex absolute top-6 -left-4 z-30 bg-[#0D1612]/90 border border-[#0DF205]/30 rounded-xl px-3.5 py-2 text-xs text-[#0DF205] font-mono items-center gap-2 shadow-lg backdrop-blur-md"
      >
        <ShieldCheck className="w-4 h-4 text-[#0DF205]" />
        <span>Squad Especialista</span>
      </motion.div>
    </div>
  );
};

