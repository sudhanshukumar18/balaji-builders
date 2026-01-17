import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<'logo' | 'text' | 'exit'>('logo');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('text'), 800);
    const timer2 = setTimeout(() => setPhase('exit'), 2800);
    const timer3 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0">
            {/* Animated gradient orbs */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[hsl(45,80%,55%)]/15 rounded-full blur-3xl"
            />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }} />
            </div>
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center px-6">
            {/* Logo burst effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: [0, 3, 4], opacity: [0.8, 0.3, 0] }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-radial from-primary/60 to-transparent rounded-full"
            />
            
            {/* Secondary burst */}
            <motion.div
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: [0, 2.5, 3.5], opacity: [0.6, 0.2, 0] }}
              transition={{ duration: 1.8, delay: 0.2, ease: 'easeOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-[hsl(45,80%,55%)]/50 to-transparent rounded-full"
            />

            {/* Construction icon/symbol */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-24 h-24 mx-auto border-2 border-primary/30 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-[hsl(45,80%,55%)] rotate-45" />
              </motion.div>
            </motion.div>

            {/* Balaji Design text */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-display text-5xl md:text-7xl"
              >
                {"Balaji Design".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className={`inline-block ${char === " " ? "w-3" : ""} bg-gradient-to-r from-primary via-[hsl(45,80%,55%)] to-primary bg-clip-text text-transparent`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* & Constructions text */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-display text-4xl md:text-6xl"
              >
                {"& Constructions".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1 + index * 0.04,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className={`inline-block ${char === " " ? "w-3" : ""} bg-gradient-to-r from-[hsl(45,80%,55%)] via-primary to-[hsl(45,80%,55%)] bg-clip-text text-transparent`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h2>
            </div>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.8, duration: 0.8, ease: 'easeOut' }}
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-center mt-6 max-w-md mx-auto"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="text-muted-foreground text-sm md:text-base uppercase tracking-[0.3em] mt-6"
            >
              Building Dreams, Creating Landmarks
            </motion.p>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.3 }}
              className="mt-10 max-w-xs mx-auto"
            >
              <div className="h-0.5 bg-charcoal-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1, delay: 2.4, ease: 'easeInOut' }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </div>
            </motion.div>

            {/* Sparkle particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.cos((i / 12) * Math.PI * 2) * 150,
                  y: Math.sin((i / 12) * Math.PI * 2) * 150,
                }}
                transition={{
                  delay: 1.5 + i * 0.08,
                  duration: 1,
                  ease: 'easeOut',
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full"
              />
            ))}
          </div>

          {/* Corner decorations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/50"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-primary/50"
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SplashScreen;
