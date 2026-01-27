import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeInUp } from '@/components/ui/motion';
import projectResidential1 from '@/assets/project-residential-1.png';
import projectCommercial1 from '@/assets/project-commercial-1.jpg';
import projectResidential2 from '@/assets/project-residential-2.jpg';
import projectBungalow from '@/assets/project-bungalow.jpg';

const projects = [
  {
    id: 1,
    title: 'Modern Villa Residence',
    category: 'Residential',
    image: projectResidential1,
    slug: 'modern-villa-residence',
  },
  {
    id: 2,
    title: 'Wardha Business Center',
    category: 'Commercial',
    image: projectCommercial1,
    slug: 'wardha-business-center',
  },
  {
    id: 3,
    title: 'Sunrise Apartments',
    category: 'Residential',
    image: projectResidential2,
    slug: 'sunrise-apartments',
  },
  {
    id: 4,
    title: 'Heritage Bungalow',
    category: 'Residential',
    image: projectBungalow,
    slug: 'heritage-bungalow',
  },
];

const ProjectsSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <motion.p 
              className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Work
            </motion.p>
            <h2 className="section-title text-foreground">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md lg:text-right">
            Explore our portfolio of completed projects showcasing quality craftsmanship and
            innovative design solutions.
          </p>
        </FadeInUp>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: 'easeOut' }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group relative overflow-hidden bg-muted aspect-[4/3] block touch-manipulation"
              >
                <motion.div 
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <motion.p 
                    className="text-primary text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2"
                    initial={{ y: 10, opacity: 0.8 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.category}
                  </motion.p>
                  <div className="flex items-end justify-between gap-2">
                    <motion.h3 
                      className="font-display text-xl sm:text-2xl lg:text-3xl text-accent-foreground"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.div 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-accent-foreground/30 flex items-center justify-center flex-shrink-0"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: 'hsl(var(--primary))',
                        borderColor: 'hsl(var(--primary))',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
                    </motion.div>
                  </div>
                </div>
              </Link>
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
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ProjectsSection;
