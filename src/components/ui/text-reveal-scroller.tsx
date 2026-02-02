import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealScrollerProps {
  text: string;
  className?: string;
}

export const TextRevealScroller = ({ text, className }: TextRevealScrollerProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(
    progress,
    range,
    ['hsl(0 0% 40%)', 'hsl(0 0% 95%)']
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.25em] transition-colors duration-200"
    >
      {children}
    </motion.span>
  );
};

export default TextRevealScroller;
