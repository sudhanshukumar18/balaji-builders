import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeInLeft, FadeInUp, StaggerContainer, Counter } from '@/components/ui/motion';

const AboutSection = () => {
  const highlights = [
    'Quality craftsmanship & materials',
    'Transparent pricing & honest work',
    'On-time project delivery',
    'Personalized design solutions',
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section className="section-padding bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <FadeInLeft>
            <motion.p 
              className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.p>
            <h2 className="section-title text-foreground mb-6">
              Your Trusted Construction
              <br />
              Partner in Wardha
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Balaji Design & Constructions has been serving Wardha and surrounding areas for over
              15 years. We specialize in residential and commercial construction, bringing your
              dreams to life with dedication, expertise, and an unwavering commitment to quality.
            </p>
            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 300 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="inline-block"
            >
              <Button asChild className="btn-primary rounded-none group">
                <Link to="/about">
                  More About Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </FadeInLeft>

          {/* Right Stats Cards */}
          <StaggerContainer className="grid grid-cols-2 gap-4 lg:gap-6">
            <motion.div 
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-elevated)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-background p-6 lg:p-8 shadow-card"
            >
              <p className="font-display text-5xl lg:text-6xl text-primary mb-2">
                <Counter to={5} duration={2} suffix=".0" />
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Google Rating</p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-4 h-4 text-gold fill-current" 
                    viewBox="0 0 20 20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 300 }}
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </motion.svg>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-elevated)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-charcoal p-6 lg:p-8 shadow-card mt-8"
            >
              <p className="font-display text-5xl lg:text-6xl text-primary mb-2">
                <Counter to={6} duration={2} suffix="+" />
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Satisfied Clients</p>
              <p className="text-accent-foreground/70 text-sm mt-3">& Growing</p>
            </motion.div>
            
            <motion.div 
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-elevated)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-charcoal p-6 lg:p-8 shadow-card -mt-8"
            >
              <p className="font-display text-5xl lg:text-6xl text-primary mb-2">
                <Counter to={15} duration={2} suffix="+" />
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Years Experience</p>
              <p className="text-accent-foreground/70 text-sm mt-3">Since 2009</p>
            </motion.div>
            
            <motion.div 
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-elevated)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-background p-6 lg:p-8 shadow-card"
            >
              <p className="font-display text-5xl lg:text-6xl text-primary mb-2">
                <Counter to={100} duration={2} suffix="%" />
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Commitment</p>
              <p className="text-foreground/70 text-sm mt-3">To Excellence</p>
            </motion.div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
