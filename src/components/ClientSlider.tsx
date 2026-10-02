import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Client {
  name: string;
  category: string;
  logo: string;
}

interface ClientSliderProps {
  clients: Client[];
  itemsPerSlide?: number;
}

export const ClientSlider: React.FC<ClientSliderProps> = ({
  clients,
  itemsPerSlide = 5,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const itemsToShow = itemsPerSlide;
  const totalSlides = Math.ceil(clients.length / itemsToShow);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const visibleClients = clients.slice(
    currentIndex * itemsToShow,
    (currentIndex + 1) * itemsToShow
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full">
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6"
          >
            {visibleClients.map((client) => (
              <div
                key={client.name}
                className="h-16 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#0DF205]/30 transition-all flex flex-col items-center justify-center group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono mt-1">
                  {client.category}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full border border-[#0DF205]/30 hover:border-[#0DF205] hover:bg-[#0DF205]/10 transition-all text-[#0DF205] cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                index === currentIndex
                  ? "bg-[#0DF205] w-8"
                  : "bg-[#0DF205]/30 hover:bg-[#0DF205]/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full border border-[#0DF205]/30 hover:border-[#0DF205] hover:bg-[#0DF205]/10 transition-all text-[#0DF205] cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4 text-white/40 text-sm font-mono">
        {currentIndex + 1} de {totalSlides}
      </div>
    </div>
  );
};
