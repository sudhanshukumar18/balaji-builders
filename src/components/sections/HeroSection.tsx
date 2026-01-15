import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Counter } from '@/components/ui/motion';
import heroImage from '@/assets/hero-construction.jpg';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.8]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.05,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const headlineWords = ['Building', 'Dreams,'];
  const headlineWords2 = ['Creating'];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex overflow-hidden">
      {/* Left Dark Panel */}
      <div className="hidden lg:flex w-1/2 bg-charcoal relative z-10">
        <div className="flex flex-col justify-center px-12 xl:px-20 py-32">
          <div className="max-w-xl">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-6"
            >
              Wardha's Trusted Builder
            </motion.p>
            
            <h1 className="font-display text-5xl xl:text-7xl text-accent-foreground leading-[1.1] mb-6">
              <span className="block overflow-hidden">
                {headlineWords.map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    custom={wordIndex}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden">
                {headlineWords2.map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    custom={wordIndex + 2}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="text-primary inline-block"
                >
                  Landmarks
                </motion.span>
              </span>
            </h1>
            
            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              Professional construction & design services in Wardha. With 15+ years of experience,
              we transform your vision into reality with quality craftsmanship and honest work.
            </motion.p>
            
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Button asChild className="btn-primary rounded-none group">
                  <Link to="/projects">
                    View Our Projects
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Button asChild variant="outline" className="btn-outline text-accent-foreground hover:text-foreground rounded-none">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Image Panel with Parallax */}
      <div className="w-full lg:w-1/2 relative overflow-hidden">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={heroImage}
            alt="Construction site"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent lg:from-transparent lg:via-transparent lg:to-charcoal/30" 
        />

        {/* Mobile Content Overlay */}
        <div className="lg:hidden relative z-10 min-h-screen flex flex-col justify-center px-6 py-32">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4"
            >
              Wardha's Trusted Builder
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl text-accent-foreground leading-[1.1] mb-6"
            >
              Building Dreams,
              <br />
              Creating <span className="text-primary">Landmarks</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-base leading-relaxed mb-8"
            >
              Professional construction & design services in Wardha. With 15+ years of experience,
              we transform your vision into reality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild className="btn-primary rounded-none">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline text-accent-foreground hover:text-foreground rounded-none">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar with Counter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm py-6 px-6 lg:px-12 z-20"
        >
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-16">
            <motion.div 
              className="text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="font-display text-3xl lg:text-4xl text-primary-foreground">
                <Counter to={5} duration={1.5} suffix=".0" />
              </p>
              <p className="text-primary-foreground/80 text-sm">Google Rating</p>
            </motion.div>
            <motion.div 
              className="text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="font-display text-3xl lg:text-4xl text-primary-foreground">
                <Counter to={6} duration={1.5} suffix="+" />
              </p>
              <p className="text-primary-foreground/80 text-sm">Happy Clients</p>
            </motion.div>
            <motion.div 
              className="text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="font-display text-3xl lg:text-4xl text-primary-foreground">
                <Counter to={15} duration={1.5} suffix="+" />
              </p>
              <p className="text-primary-foreground/80 text-sm">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
