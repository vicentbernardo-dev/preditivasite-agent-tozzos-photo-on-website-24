import React from "react";
import { CLIENT_LOGOS } from "../data/clientLogos";

interface ClientSliderProps {
  /** Seconds for one full loop of the list (lower = faster). */
  duration?: number;
}

export const ClientSlider: React.FC<ClientSliderProps> = ({
  duration = 30,
}) => {
  // The list is rendered twice and the track moves by exactly one copy's width,
  // so the loop restarts without a visible jump and never ends.
  // A animação é CSS (.marquee-track em src/index.css): roda no compositor e
  // para sozinha com prefers-reduced-motion.
  const renderCopy = (copyIndex: number) => (
    <div key={copyIndex} className="flex shrink-0" aria-hidden={copyIndex > 0}>
      {CLIENT_LOGOS.map((client) => (
        <div
          key={`${copyIndex}-${client.name}`}
          className="w-36 sm:w-44 h-16 mr-6 sm:mr-10 flex items-center justify-center shrink-0"
        >
          <img
            src={client.logo}
            alt={copyIndex === 0 ? client.name : ""}
            width={160}
            height={40}
            className="h-10 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div
        className="marquee-track flex w-max"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {renderCopy(0)}
        {renderCopy(1)}
      </div>
    </div>
  );
};
