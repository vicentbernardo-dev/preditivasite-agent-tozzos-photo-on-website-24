import { useState, useEffect } from "react";

interface UseTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export const useTypewriter = ({
  words,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenWords = 2000,
}: UseTypewriterProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isComplete = text === currentWord;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (isComplete) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else {
          setText(currentWord.substring(0, text.length + 1));
        }
      }
    }, isDeleting ? deletingSpeed : isComplete ? delayBetweenWords : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return text;
};
