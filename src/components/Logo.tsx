import React from 'react';
import logoImg from '../assets/LOGO.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-12',
    xl: 'h-12 sm:h-14',
  };

  return (
    <div className={`inline-flex items-center select-none group cursor-pointer ${className}`}>
      <img
        src={logoImg}
        alt="Preditiva"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(13,242,5,0.3)]`}
      />
    </div>
  );
};


