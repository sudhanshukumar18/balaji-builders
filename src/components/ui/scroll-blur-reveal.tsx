import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollBlurRevealProps {
  text: string;
  className?: string;
  color?: string;
  fontSize?: string;
  lineHeight?: number;
  fullRevealDistance?: number;
  initialBlur?: number;
  initialOpacity?: number;
  letterSpacing?: string;
}

export const ScrollBlurReveal = ({
  text,
  className,
  color,
  fontSize = 'clamp(2rem, 5vw, 4rem)',
  lineHeight = 1.4,
  fullRevealDistance = 800,
  initialBlur = 4,
  initialOpacity = 0.15,
  letterSpacing = '-0.02em',
}: ScrollBlurRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = (text || '').split(' ');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let startPosition = 0;
    let containerHeight = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const rect = entry.boundingClientRect;
          startPosition = window.scrollY + rect.top;
          containerHeight = rect.height;
          handleScroll();
        } else {
          setIsVisible(false);
        }
      },
      { threshold: [0] }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const visibleHeight = window.innerHeight - elementTop;
      const progress = (visibleHeight - containerHeight) / (fullRevealDistance - containerHeight);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [fullRevealDistance]);

  return (
    <div
      ref={containerRef}
      className={cn('font-display text-center', className)}
      style={{
        color: color,
        fontSize: fontSize,
        lineHeight: lineHeight,
        opacity: isVisible ? 1 : 0,
        letterSpacing: letterSpacing,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      {words.map((word, index) => {
        const wordProgress = (scrollProgress - index / words.length) * words.length;
        const progress = Math.max(0, Math.min(1, wordProgress));
        const blurAmount = initialBlur * (1 - progress);
        const opacity = initialOpacity + (1 - initialOpacity) * progress;

        return (
          <span
            key={index}
            className="inline-block mr-[0.25em]"
            style={{
              filter: `blur(${blurAmount}px)`,
              opacity: opacity,
              transition: 'filter 0.15s ease-out, opacity 0.15s ease-out',
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default ScrollBlurReveal;
