import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimationFrame, useMotionValue, useVelocity } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollVelocityProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
  containerClassName?: string;
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export const ScrollVelocity = ({
  children,
  baseVelocity = 2,
  className,
  containerClassName,
}: ScrollVelocityProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / contentWidth) + 2;
        setRepetitions(Math.max(newRepetitions, 4));
      }
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [children]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className={cn('overflow-hidden whitespace-nowrap', containerClassName)}
    >
      <motion.div
        className={cn('inline-flex', className)}
        style={{ x }}
      >
        {Array.from({ length: repetitions }).map((_, index) => (
          <div
            key={index}
            ref={index === 0 ? contentRef : undefined}
            className="inline-flex items-center"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

interface VelocityTextProps {
  text: string;
  baseVelocity?: number;
  className?: string;
  textClassName?: string;
  separator?: React.ReactNode;
}

export const VelocityText = ({
  text,
  baseVelocity = 2,
  className,
  textClassName,
  separator = <span className="mx-8 text-primary">•</span>,
}: VelocityTextProps) => {
  return (
    <ScrollVelocity baseVelocity={baseVelocity} containerClassName={className}>
      <span className={cn('font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider', textClassName)}>
        {text}
      </span>
      {separator}
    </ScrollVelocity>
  );
};

export default ScrollVelocity;
