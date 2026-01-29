import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeInUp } from '@/components/ui/motion';
import projectResidential1 from '@/assets/project-residential-1.png';
import projectCommercial1 from '@/assets/project-commercial-1.png';
import projectResidential2 from '@/assets/project-residential-2.png';

const projects = [{
  id: 1,
  title: 'Planning',
  category: 'Residential',
  image: projectResidential1,
  slug: 'modern-villa-residence'
}, {
  id: 2,
  title: 'Exterior design',
  category: 'Residential',
  image: projectCommercial1,
  slug: 'wardha-business-center'
}, {
  id: 3,
  title: 'Interior design',
  category: 'Residential',
  image: projectResidential2,
  slug: 'sunrise-apartments'
}];
const ProjectsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeInUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
                Our Portfolio
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                Featured Projects
              </h2>
            </div>
            <Link to="/projects">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <FadeInUp key={project.id} delay={index * 0.1}>
              <Link
                to={`/projects/${project.slug}`}
                className="group relative overflow-hidden bg-muted aspect-[4/3] block card-hover"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="text-primary text-sm uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-display text-xl lg:text-2xl text-accent-foreground">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full border border-accent-foreground/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;