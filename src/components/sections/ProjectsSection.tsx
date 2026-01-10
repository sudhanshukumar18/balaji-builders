import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeInUp, StaggerContainer } from '@/components/ui/motion';
import projectResidential1 from '@/assets/project-residential-1.jpg';
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
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Our Work
            </p>
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
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group relative overflow-hidden bg-muted aspect-[4/3] card-hover block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="text-primary text-sm uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <div className="flex items-end justify-between">
                    <h3 className="font-display text-2xl lg:text-3xl text-accent-foreground">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full border border-accent-foreground/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                      <ArrowUpRight className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeInUp className="text-center">
          <Button asChild className="btn-primary rounded-none group">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ProjectsSection;
