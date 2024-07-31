"use client";
import { useRef, useMemo } from "react";
import {
  useScroll,
  LazyMotion,
  m,
  domAnimation,
  useTransform,
  MotionValue,
} from "framer-motion";
import { cn } from "@/core/generic/cn";

interface ColoredWord {
  word: string;
  position: number;
}

interface ParagraphProps {
  paragraphText: string;
  paragraphClassName?: string;
  wordClassName?: string;
  coloredWords?: ColoredWord[];
  scrollProgressOffset?: any;
}

const ParagraphOpacityScroll = ({
  paragraphText,
  paragraphClassName,
  wordClassName,
  coloredWords,
  scrollProgressOffset = ["start 0.9", "start 0.25"],
  ...props
}: React.PropsWithChildren<ParagraphProps>) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: scrollProgressOffset,
  });

  const words = useMemo(() => paragraphText.split(" "), [paragraphText]);

  const wordsWithCharacters = useMemo(() => {
    return words.map((word) => ({
      word,
      characters: word.split(""),
    }));
  }, [words]);

  const wordsWithCharactersLength = wordsWithCharacters.length;

  return (
    <LazyMotion strict features={domAnimation}>
      <p
        className={cn("flex cursor-default flex-wrap", paragraphClassName)}
        ref={paragraphRef}
        {...props}
      >
        {wordsWithCharacters.map(({ word, characters }, index) => {
          const start = index / wordsWithCharactersLength;
          const end = start + 1 / wordsWithCharactersLength;
          const isColored = coloredWords?.some(
            (coloredWord) =>
              coloredWord.word === word && coloredWord.position === index,
          );
          return (
            <Word
              key={index}
              range={[start, end]}
              progress={scrollYProgress}
              wordClassName={wordClassName}
              isColored={isColored}
              characters={characters}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </LazyMotion>
  );
};

export default ParagraphOpacityScroll;

const Word = ({
  children,
  range,
  progress,
  wordClassName,
  isColored,
  characters,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
  wordClassName?: string;
  isColored?: boolean;
  characters: string[];
}) => {
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span
      className={cn(
        "relative",
        wordClassName,
        isColored
          ? "bg-gradient-to-b from-primary-500 from-40% to-accent-500 bg-clip-text text-transparent"
          : "",
      )}
    >
      {characters.map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Character key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute text-foreground/10">{children}</span>
      <m.span style={{ opacity: opacity }}>{children}</m.span>
    </span>
  );
};
