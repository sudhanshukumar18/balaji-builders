import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-construction.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex">
      {/* Left Dark Panel */}
      <div className="hidden lg:flex w-1/2 bg-charcoal relative z-10">
        <div className="flex flex-col justify-center px-12 xl:px-20 py-32">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-6"
            >
              Wardha's Trusted Builder
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-5xl xl:text-7xl text-accent-foreground leading-[1.1] mb-6"
            >
              Building Dreams,
              <br />
              Creating{' '}
              <span className="text-primary">Landmarks</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              Professional construction & design services in Wardha. With 15+ years of experience,
              we transform your vision into reality with quality craftsmanship and honest work.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild className="btn-primary rounded-none group">
                <Link to="/projects">
                  View Our Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline text-accent-foreground hover:text-foreground rounded-none">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Image Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="w-full lg:w-1/2 relative"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent lg:from-transparent lg:via-transparent lg:to-charcoal/30" />
        </div>

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

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm py-6 px-6 lg:px-12 z-20"
        >
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-16">
            <div className="text-center lg:text-left">
              <p className="font-display text-3xl lg:text-4xl text-primary-foreground">5.0</p>
              <p className="text-primary-foreground/80 text-sm">Google Rating</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="font-display text-3xl lg:text-4xl text-primary-foreground">6+</p>
              <p className="text-primary-foreground/80 text-sm">Happy Clients</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="font-display text-3xl lg:text-4xl text-primary-foreground">15+</p>
              <p className="text-primary-foreground/80 text-sm">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
