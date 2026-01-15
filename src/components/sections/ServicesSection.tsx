import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building2, Paintbrush, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeInUp } from '@/components/ui/motion';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description:
      'Custom homes, villas, and apartments built with precision and care. From foundation to finishing, we deliver your dream home.',
    slug: 'residential-construction',
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'Office buildings, retail spaces, and commercial complexes designed for functionality and aesthetic appeal.',
    slug: 'commercial-construction',
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description:
      'Transform your spaces with our expert interior design services. Modern, traditional, or contemporary styles.',
    slug: 'interior-design',
  },
  {
    icon: Ruler,
    title: 'Design & Planning',
    description:
      'Comprehensive architectural design and planning services to bring your vision to life from concept to blueprint.',
    slug: 'design-planning',
  },
];

const ServicesSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
  };

  return (
    <section className="section-padding bg-charcoal overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.p>
          <h2 className="section-title text-accent-foreground mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From initial design to final construction, we offer end-to-end building solutions
            tailored to your specific needs and budget.
          </p>
        </FadeInUp>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <Link
                  to={`/services#${service.slug}`}
                  className="group bg-charcoal-light p-8 border border-muted-foreground/10 hover:border-primary/50 transition-all duration-300 block h-full relative overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300"
                      variants={iconVariants}
                    >
                      <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </motion.div>
                    
                    <h3 className="font-display text-2xl text-accent-foreground mb-4">{service.title}</h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <motion.span 
                      className="inline-flex items-center text-primary text-sm font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <FadeInUp className="text-center">
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="inline-block"
          >
            <Button asChild className="btn-primary rounded-none group">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ServicesSection;
