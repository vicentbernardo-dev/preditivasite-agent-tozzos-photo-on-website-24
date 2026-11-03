import React from 'react';
import { TrendingUp, Activity, Zap, ShieldCheck } from 'lucide-react';

// Animações em CSS puro (keyframes em src/index.css) usando só transform/opacity:
// rodam no compositor, sem tarefas no main thread. Antes eram ~10 animações
// infinitas do Framer Motion, incluindo filter: drop-shadow (repaint a cada frame),
// que somavam a maior parte do TBT da home.
export const HeroLogoMotion: React.FC = () => (
  <div className="group relative w-full max-w-[440px] aspect-square flex items-center justify-center select-none">
    {/* Outer ambient glow fields */}
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[#0DF205]/20 rounded-full blur-[100px] pointer-events-none transition-colors duration-700 group-hover:bg-[#0DF205]/30"
    />
    <div
      aria-hidden="true"
      className="absolute inset-10 bg-[#26D3AB]/15 rounded-full blur-[80px] pointer-events-none"
    />

    {/* Orbital Ring 1: Clockwise thin line */}
    <div className="hero-spin absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] border border-[#0DF205]/20 rounded-full pointer-events-none [--spin-duration:25s]">
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0DF205] shadow-[0_0_12px_#0DF205]" />
      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#26D3AB] shadow-[0_0_8px_#26D3AB]" />
    </div>

    {/* Orbital Ring 2: Counter-Clockwise dashed */}
    <div className="hero-spin-reverse absolute w-[240px] h-[240px] sm:w-[270px] sm:h-[270px] border border-dashed border-[#26D3AB]/25 rounded-full pointer-events-none [--spin-duration:35s]">
      <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#0DF205] shadow-[0_0_10px_#0DF205]" />
    </div>

    {/* Floating Centerpiece: 4-pointed neon star */}
    <div className="hero-float relative z-10 flex items-center justify-center [--float-y:-12px] [--float-duration:3.5s]">
      {/* Pulsating Radiating Wave Rings */}
      <div className="hero-ripple absolute w-24 h-24 rounded-full border border-[#0DF205]/60 pointer-events-none [--ripple-scale:2.2] [--ripple-opacity:0.6]" />
      <div className="hero-ripple absolute w-24 h-24 rounded-full border border-[#26D3AB]/40 pointer-events-none [--ripple-scale:2.8] [--ripple-opacity:0.4] [animation-delay:0.7s]" />

      {/* Glow pulsante: camada borrada animando só opacity (no lugar do drop-shadow animado) */}
      <div aria-hidden="true" className="hero-glow absolute w-28 h-28 rounded-full bg-[#0DF205]/60 blur-2xl pointer-events-none" />

      {/* Central Glowing 4-pointed Star */}
      <div className="transition-transform duration-500 group-hover:scale-[1.15]">
        <div className="hero-pulse cursor-pointer">
          <svg
            width="130"
            height="130"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_25px_rgba(13,242,5,0.75)]"
          >
            {/* Smooth 4-pointed concave star */}
            <path
              d="M24 2C24 14.15 14.15 24 2 24C14.15 24 24 33.85 24 46C24 33.85 33.85 24 46 24C33.85 24 24 14.15 24 2Z"
              fill="#0DF205"
            />
          </svg>
        </div>
      </div>
    </div>

    {/* Floating Micro-Badge Top Right: +95 PageSpeed */}
    <div className="hero-drift absolute -top-2 right-0 sm:right-2 z-30 [--drift-x:4px] [--drift-y:-10px] [--drift-duration:4s]">
      <div className="bg-[#0D1612]/95 border border-[#0DF205]/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#0DF205] font-mono flex items-center gap-2.5 shadow-[0_4px_25px_rgba(13,242,5,0.3)] hover:scale-105 transition-transform">
        <TrendingUp className="w-4 h-4 text-[#0DF205]" />
        <span className="font-bold">+95 PageSpeed</span>
      </div>
    </div>

    {/* Floating Micro-Badge Bottom Left: Core Web Vitals Pass */}
    <div className="hero-drift absolute -bottom-2 left-0 sm:left-2 z-30 [--drift-x:-3px] [--drift-y:10px] [--drift-duration:4.4s] [animation-delay:0.8s]">
      <div className="bg-[#0D1612]/95 border border-[#26D3AB]/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#26D3AB] font-mono flex items-center gap-2.5 shadow-[0_4px_25px_rgba(38,211,171,0.3)] hover:scale-105 transition-transform">
        <Activity className="w-4 h-4 text-[#26D3AB]" />
        <span className="font-bold">Core Web Vitals Pass</span>
      </div>
    </div>

    {/* Floating Micro-Badge Right Center: 100% Preditivo */}
    <div className="hidden sm:block absolute top-1/2 -right-6 -translate-y-1/2 z-30">
      <div className="hero-drift [--drift-x:8px] [--drift-y:0px] [--drift-duration:4.8s] [animation-delay:1.4s]">
        <div className="bg-[#0D1612]/90 border border-white/20 rounded-xl px-3.5 py-2 text-xs text-white/90 font-mono flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
          <Zap className="w-4 h-4 text-[#0DF205]" />
          <span>100% Preditivo</span>
        </div>
      </div>
    </div>

    {/* Floating Micro-Badge Top Left: Squad Dedicado */}
    <div className="hero-drift hidden sm:block absolute top-6 -left-4 z-30 [--drift-x:-4px] [--drift-y:6px] [--drift-duration:5s] [animation-delay:0.4s]">
      <div className="bg-[#0D1612]/90 border border-[#0DF205]/30 rounded-xl px-3.5 py-2 text-xs text-[#0DF205] font-mono flex items-center gap-2 shadow-lg">
        <ShieldCheck className="w-4 h-4 text-[#0DF205]" />
        <span>Squad Especialista</span>
      </div>
    </div>
  </div>
);
