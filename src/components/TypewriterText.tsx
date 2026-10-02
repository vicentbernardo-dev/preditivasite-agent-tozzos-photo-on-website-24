import React from "react";
import { useTypewriter } from "../hooks/useTypewriter";

interface TypewriterTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  className = "",
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenWords = 2000,
}) => {
  const text = useTypewriter({
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  });

  return (
    <span className={className}>
      {text || <span className="invisible">A</span>}
    </span>
  );
};
