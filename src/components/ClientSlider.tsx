import React from "react";
import { motion } from "motion/react";

interface Client {
  name: string;
  category?: string;
  logo: string;
}

interface ClientSliderProps {
  clients: Client[];
  /** Seconds for one full loop of the list (lower = faster). */
  duration?: number;
}

export const ClientSlider: React.FC<ClientSliderProps> = ({
  clients,
  duration = 30,
}) => {
  // The list is rendered twice and the track moves by exactly one copy's width,
  // so the loop restarts without a visible jump and never ends.
  const renderCopy = (copyIndex: number) => (
    <div key={copyIndex} className="flex shrink-0" aria-hidden={copyIndex > 0}>
      {clients.map((client) => (
        <div
          key={`${copyIndex}-${client.name}`}
          className="w-44 sm:w-52 h-16 mr-4 sm:mr-6 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#0DF205]/30 transition-all flex flex-col items-center justify-center group shrink-0"
        >
          <img
            src={client.logo}
            alt={copyIndex === 0 ? client.name : ""}
            className="h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          />
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono mt-1">
            {client.category}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {renderCopy(0)}
        {renderCopy(1)}
      </motion.div>
    </div>
  );
};
