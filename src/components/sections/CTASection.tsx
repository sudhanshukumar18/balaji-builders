import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { FadeInUp, ScaleIn } from '@/components/ui/motion';
import heroImage from '@/assets/hero-construction.jpg';

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-cover bg-center scale-110"
      >
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/90" />
      </motion.div>
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <motion.p 
              className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Start Your Project
            </motion.p>
          </FadeInUp>
          
          <FadeInUp delay={0.1}>
            <motion.h2 
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Build Your Dream?
            </motion.h2>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 px-4 sm:px-0">
              Whether you're planning a new home, commercial space, or renovation project, we're here
              to help. Contact us today for a free consultation and quote.
            </p>
          </FadeInUp>
          
          <ScaleIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="relative group"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/50 blur-xl rounded-none"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <Button asChild className="btn-primary rounded-none group relative">
                  <Link to="/contact">
                    Get a Free Quote
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
                  <a href="tel:+918624838652">
                    <Phone className="mr-2 w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </motion.div>
            </div>
          </ScaleIn>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
