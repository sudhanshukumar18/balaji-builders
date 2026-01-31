import { motion, HTMLMotionProps, Variants, useScroll, useTransform, useSpring, useInView, MotionValue } from 'framer-motion';
import { ReactNode, useRef, useEffect, useState } from 'react';

// Animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: { opacity: 1, rotate: 0, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: { opacity: 1, filter: 'blur(0px)' },
};

interface MotionDivProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInUp = ({ children, className, delay = 0, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={fadeInUp}
    transition={{ 
      duration: 0.7, 
      delay, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const FadeInDown = ({ children, className, delay = 0, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={fadeInDown}
    transition={{ 
      duration: 0.7, 
      delay, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const FadeInLeft = ({ children, className, delay = 0, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={fadeInLeft}
    transition={{ 
      duration: 0.8, 
      delay, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const FadeInRight = ({ children, className, delay = 0, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={fadeInRight}
    transition={{ 
      duration: 0.8, 
      delay, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, className, delay = 0, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={scaleIn}
    transition={{ 
      duration: 0.6, 
      delay, 
      ease: [0.34, 1.56, 0.64, 1]
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const BlurIn = ({ children, className, delay = 0, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={blurIn}
    transition={{ 
      duration: 0.8, 
      delay, 
      ease: 'easeOut'
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={staggerContainer}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className, ...props }: MotionDivProps) => (
  <motion.div
    variants={fadeInUp}
    transition={{ 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Parallax scroll component
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export const Parallax = ({ children, className, speed = 0.5 }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
};

// Counter animation component
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const Counter = ({ from = 0, to, duration = 2, suffix = '', prefix = '', className }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(from + (to - from) * easeOutQuart);
      
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

// Magnetic hover effect
interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const Magnetic = ({ children, className, strength = 0.3 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;
    
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// Floating animation
interface FloatingProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export const Floating = ({ children, className, duration = 3, distance = 10 }: FloatingProps) => (
  <motion.div
    className={className}
    animate={{
      y: [-distance, distance, -distance],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.div>
);

// Text reveal animation (letter by letter)
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal = ({ text, className, delay = 0 }: TextRevealProps) => {
  const words = text.split(' ');
  
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.4,
                delay: delay + (wordIndex * word.length + charIndex) * 0.03,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

// Reveal on scroll with mask effect
interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const Reveal = ({ children, className, direction = 'up' }: RevealProps) => {
  const directionMap = {
    up: { y: 75 },
    down: { y: -75 },
    left: { x: 75 },
    right: { x: -75 },
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, ...directionMap[direction] }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Glow pulse animation for CTAs
interface GlowPulseProps {
  children: ReactNode;
  className?: string;
}

export const GlowPulse = ({ children, className }: GlowPulseProps) => (
  <motion.div
    className={`relative ${className}`}
    whileHover={{ scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  >
    <motion.div
      className="absolute inset-0 rounded-inherit bg-primary/20 blur-xl"
      animate={{
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

// Smooth scroll progress indicator
export const useScrollProgress = (): MotionValue<number> => {
  const { scrollYProgress } = useScroll();
  return useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
};
