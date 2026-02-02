import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Clock, Shield, Award, Wrench } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Counter, Floating } from '@/components/ui/motion';
import heroImage from '@/assets/hero-construction.jpg';

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({
    length: 20
  }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15
  }));
  return <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => <motion.div key={particle.id} className="absolute rounded-full bg-primary/20" style={{
      width: particle.size,
      height: particle.size,
      left: `${particle.x}%`,
      bottom: '-10px'
    }} animate={{
      y: [0, -800],
      opacity: [0, 0.6, 0]
    }} transition={{
      duration: particle.duration,
      delay: particle.delay,
      repeat: Infinity,
      ease: 'linear'
    }} />)}
    </div>;
};

// Scroll indicator component
const ScrollIndicator = () => <motion.div initial={{
  opacity: 0
}} animate={{
  opacity: 1
}} transition={{
  delay: 1.5,
  duration: 0.8
}} className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 hidden lg:flex flex-col items-center gap-2">
    
    <motion.div animate={{
    y: [0, 8, 0]
  }} transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut'
  }}>
      
    </motion.div>
  </motion.div>;

// Trust badge component
const TrustBadge = ({
  icon: Icon,
  text,
  delay
}: {
  icon: typeof Shield;
  text: string;
  delay: number;
}) => <motion.div initial={{
  opacity: 0,
  scale: 0.8,
  x: 20
}} animate={{
  opacity: 1,
  scale: 1,
  x: 0
}} transition={{
  delay,
  duration: 0.5,
  ease: 'easeOut'
}} className="flex items-center gap-2 bg-charcoal/80 backdrop-blur-sm px-3 py-2 border border-primary/20">
    <Icon className="w-4 h-4 text-primary" />
    <span className="text-xs text-accent-foreground font-medium">{text}</span>
  </motion.div>;

// 3D tilt effect hook
const use3DTilt = (strength: number = 15) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), {
    stiffness: 100,
    damping: 20
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), {
    stiffness: 100,
    damping: 20
  });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return {
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave
  };
};

// Animated underline component
const AnimatedUnderline = ({
  delay
}: {
  delay: number;
}) => <motion.span initial={{
  scaleX: 0
}} animate={{
  scaleX: 1
}} transition={{
  delay,
  duration: 0.8,
  ease: 'easeOut'
}} className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary to-primary/50 origin-left" />;

// Typewriter effect hook
const useTypewriter = (text: string, delay: number = 0, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);
  return {
    displayText,
    isComplete
  };
};
const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.8]);
  const {
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave
  } = use3DTilt(8);
  const headlineWords = ['Building', 'Dreams,'];
  const headlineWords2 = ['Creating'];
  const {
    displayText
  } = useTypewriter('Professional construction & design services in Wardha, Nagpur, Pune. With 6+ years of experience, we transform your vision into reality with quality craftsmanship and honest work.', 1.0, 30);
  return <section ref={sectionRef} className="relative min-h-screen flex overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Left Dark Panel */}
      <div className="hidden lg:flex w-1/2 bg-charcoal relative z-10">
        {/* Decorative geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div initial={{
          opacity: 0,
          scale: 0
        }} animate={{
          opacity: 0.1,
          scale: 1
        }} transition={{
          delay: 0.5,
          duration: 1
        }} className="absolute top-20 right-20 w-64 h-64 border border-primary/30 rotate-45" />
          <motion.div initial={{
          opacity: 0,
          scale: 0
        }} animate={{
          opacity: 0.05,
          scale: 1
        }} transition={{
          delay: 0.7,
          duration: 1
        }} className="absolute bottom-40 left-10 w-32 h-32 rounded-full border-2 border-primary/20" />
          <Floating duration={6} distance={15}>
            <div className="absolute top-1/3 right-10 w-3 h-3 bg-primary/30 rotate-45" />
          </Floating>
          <Floating duration={8} distance={10}>
            <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-primary/40 rounded-full" />
          </Floating>
        </div>

        {/* Animated gradient orb */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.3,
        duration: 1
      }} className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />

        <div className="flex flex-col justify-center px-12 xl:px-20 py-32">
          <div className="max-w-xl">
            {/* Balaji Design & Constructions Splash Title */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-8 relative"
            >
              {/* Splash burst effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: [0, 2.5, 3], opacity: [0.8, 0.4, 0] }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-primary/60 to-transparent rounded-full blur-xl"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: [0, 2, 2.5], opacity: [0.6, 0.3, 0] }}
                transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
                className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-radial from-[hsl(45,80%,55%)]/50 to-transparent rounded-full blur-lg"
              />
              
              {/* Main title with letter-by-letter splash */}
              <div className="relative">
                <motion.h2 
                  className="font-display text-3xl xl:text-4xl leading-tight"
                >
                  <span className="block overflow-hidden">
                    {"Balaji Design".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ 
                          opacity: 0, 
                          y: 80,
                          rotateX: -90,
                          scale: 0.5
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          rotateX: 0,
                          scale: 1
                        }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.04,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        className={`inline-block ${char === " " ? "w-2" : ""} bg-gradient-to-r from-primary via-[hsl(45,80%,55%)] to-primary bg-clip-text text-transparent drop-shadow-[0_0_20px_hsl(0,72%,45%,0.5)]`}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </span>
                  <span className="block overflow-hidden mt-1">
                    {"& Constructions".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ 
                          opacity: 0, 
                          y: 80,
                          rotateX: -90,
                          scale: 0.5
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          rotateX: 0,
                          scale: 1
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5 + index * 0.04,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        className={`inline-block ${char === " " ? "w-2" : ""} bg-gradient-to-r from-primary via-[hsl(45,80%,55%)] to-primary bg-clip-text text-transparent drop-shadow-[0_0_20px_hsl(0,72%,45%,0.5)]`}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </span>
                </motion.h2>
                
                {/* Animated underline splash */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  className="h-1 bg-gradient-to-r from-primary via-[hsl(45,80%,55%)] to-primary origin-left mt-3"
                />
                
                {/* Sparkle particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0], 
                      scale: [0, 1.5, 0],
                      x: [0, (i % 2 ? 1 : -1) * (20 + i * 10)],
                      y: [0, -30 - i * 8]
                    }}
                    transition={{ 
                      delay: 1 + i * 0.1, 
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                    className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full"
                    style={{ left: `${15 + i * 12}%` }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1.5
          }} className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <motion.span animate={{
              rotate: [0, 10, -10, 0]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}>
                ⭐
              </motion.span>
              Wardha's Trusted Engineers
            </motion.p>
            
            <h1 className="font-display text-5xl xl:text-7xl text-accent-foreground leading-[1.1] mb-6">
              <span className="block overflow-hidden relative">
                {headlineWords.map((word, wordIndex) => <motion.span key={wordIndex} initial={{
                opacity: 0,
                y: 50
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.3 + wordIndex * 0.1,
                duration: 0.6,
                ease: 'easeOut'
              }} className="inline-block mr-4">
                    {word}
                  </motion.span>)}
                <AnimatedUnderline delay={1.2} />
              </span>
              <span className="block overflow-hidden">
                {headlineWords2.map((word, wordIndex) => <motion.span key={wordIndex} initial={{
                opacity: 0,
                y: 50
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.5 + wordIndex * 0.1,
                duration: 0.6,
                ease: 'easeOut'
              }} className="inline-block mr-4">
                    {word}
                  </motion.span>)}
                <motion.span initial={{
                opacity: 0,
                y: 50
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.6,
                duration: 0.6,
                ease: 'easeOut'
              }} className="inline-block relative">
                  <span className="bg-gradient-to-r from-primary via-primary to-[hsl(45,80%,55%)] bg-clip-text text-transparent drop-shadow-[0_0_30px_hsl(0,72%,45%,0.4)]">
                    Landmarks
                  </span>
                </motion.span>
              </span>
            </h1>
            
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} className="text-muted-foreground text-lg leading-relaxed mb-8 min-h-[80px]">
              {displayText}
              <motion.span animate={{
              opacity: [1, 0]
            }} transition={{
              duration: 0.5,
              repeat: Infinity
            }} className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle" />
            </motion.p>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.9
          }} className="flex flex-wrap gap-4">
              <motion.div whileHover={{
              scale: 1.05,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10
            }} className="relative group">
                {/* Glow effect */}
                <motion.div className="absolute inset-0 bg-primary/50 blur-xl rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" animate={{
                scale: [1, 1.1, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} />
                <Button asChild className="btn-primary rounded-none group relative z-10">
                  <Link to="/projects">
                    View Our Projects
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10
            }}>
                <Button asChild variant="outline" className="btn-outline text-accent-foreground hover:text-foreground rounded-none">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Image Panel with Parallax and 3D Tilt */}
      <div className="w-full lg:w-1/2 relative overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{
      perspective: 1000
    }}>
        <motion.div style={{
        y: imageY,
        scale: imageScale,
        rotateX,
        rotateY
      }} className="absolute inset-0 bg-cover bg-center">
          <motion.img initial={{
          scale: 1.2,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 1.5,
          ease: 'easeOut'
        }} src={heroImage} alt="Construction site" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.div style={{
        opacity: overlayOpacity
      }} className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent lg:from-transparent lg:via-transparent lg:to-charcoal/30" />

        {/* Floating Trust Badges - Desktop */}
        <div className="hidden lg:flex flex-col gap-3 absolute top-32 right-6 z-20">
          <TrustBadge icon={Shield} text="Licensed Builder" delay={1.2} />
          <TrustBadge icon={Award} text="ISO Certified" delay={1.4} />
          <TrustBadge icon={Wrench} text="Quality Assured" delay={1.6} />
        </div>

        {/* Mobile Content Overlay */}
        <div className="lg:hidden relative z-10 min-h-screen flex flex-col justify-center px-6 py-32">
          <div className="max-w-xl">
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Wardha's Trusted Engineers
            </motion.p>
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.3
          }} className="font-display text-4xl sm:text-5xl text-accent-foreground leading-[1.1] mb-6">
              Building Dreams,
              <br />
              Creating <span className="text-primary">Landmarks</span>
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="text-muted-foreground text-base leading-relaxed mb-8">
              Professional construction & design services in Wardha, Nagpur, Pune. With 6+ years of experience,
              we transform your vision into reality.
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} className="flex flex-wrap gap-4">
              <Button asChild className="btn-primary rounded-none">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline text-accent-foreground hover:text-foreground rounded-none">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />

        {/* Stats Bar with Counter Animation and Icons */}
        <motion.div initial={{
        opacity: 0,
        y: 100
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1,
        ease: 'easeOut'
      }} className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden">
          {/* Animated gradient border */}
          <motion.div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" animate={{
          x: ['-100%', '100%']
        }} transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }} />
          
          <div className="bg-primary/95 backdrop-blur-sm py-4 sm:py-6 px-4 sm:px-6 lg:px-12">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16">
              <motion.div className="text-center flex items-center gap-2 sm:gap-3" whileHover={{
              scale: 1.05
            }} transition={{
              type: 'spring',
              stiffness: 300
            }}>
                <div className="flex w-8 h-8 sm:w-10 sm:h-10 items-center justify-center bg-primary-foreground/10 rounded-full">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-primary-foreground">
                    <Counter to={5} duration={1.5} suffix=".0" />
                  </p>
                  <p className="text-primary-foreground/80 text-xs sm:text-sm">Google Rating</p>
                </div>
              </motion.div>
              
              <div className="hidden sm:block w-px bg-primary-foreground/20 self-stretch" />
              
              <motion.div className="text-center flex items-center gap-2 sm:gap-3" whileHover={{
              scale: 1.05
            }} transition={{
              type: 'spring',
              stiffness: 300
            }}>
                <div className="flex w-8 h-8 sm:w-10 sm:h-10 items-center justify-center bg-primary-foreground/10 rounded-full">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-primary-foreground">
                    <Counter to={30} duration={1.5} suffix="+" />
                  </p>
                  <p className="text-primary-foreground/80 text-xs sm:text-sm">Happy Clients</p>
                </div>
              </motion.div>
              
              <div className="hidden sm:block w-px bg-primary-foreground/20 self-stretch" />
              
              <motion.div className="text-center flex items-center gap-2 sm:gap-3" whileHover={{
              scale: 1.05
            }} transition={{
              type: 'spring',
              stiffness: 300
            }}>
                <div className="flex w-8 h-8 sm:w-10 sm:h-10 items-center justify-center bg-primary-foreground/10 rounded-full">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-primary-foreground">
                    <Counter to={6} duration={1.5} suffix="+" />
                  </p>
                  <p className="text-primary-foreground/80 text-xs sm:text-sm">Years Experience</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Shimmer effect */}
          <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" animate={{
          x: ['-200%', '200%']
        }} transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
          ease: 'linear'
        }} />
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;