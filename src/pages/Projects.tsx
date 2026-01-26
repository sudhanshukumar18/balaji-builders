import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';
import projectResidential1 from '@/assets/project-residential-1.jpg';
import projectCommercial1 from '@/assets/project-commercial-1.jpg';
import projectResidential2 from '@/assets/project-residential-2.jpg';
import projectBungalow from '@/assets/project-bungalow.jpg';
import heroImage from '@/assets/hero-construction.jpg';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';

const projects = [
  {
    id: 1,
    title: 'Modern G+1, 3 BHK House',
    category: 'Residential',
    description: 'A stunning contemporary villa with modern amenities and beautiful landscaping.',
    image: projectResidential1,
    slug: 'modern-villa-residence',
  },
  {
    id: 2,
    title: 'Modern G+1, 4 BHK Bungalow',
    category: 'Residential',
    description: 'A stylish G+1 modern Indian bungalow with contemporary façade and elegant textures.',
    image: projectCommercial1,
    slug: 'wardha-business-center',
  },
  {
    id: 3,
    title: 'Sunrise Apartments',
    category: 'Residential',
    description: 'Multi-story apartment complex with modern facilities and amenities.',
    image: projectResidential2,
    slug: 'sunrise-apartments',
  },
  {
    id: 4,
    title: 'Heritage Bungalow',
    category: 'Residential',
    description: 'Traditional bungalow design blended with contemporary comfort.',
    image: projectBungalow,
    slug: 'heritage-bungalow',
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Our Projects - Construction Portfolio"
        description="View our completed construction projects in Wardha: residential villas, commercial buildings, apartments, and bungalows. Quality craftsmanship by Balaji Constructions."
        canonical="/projects"
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Projects', url: '/projects' }]} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Our Portfolio
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
              Featured Projects
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our portfolio of completed projects showcasing our commitment to quality and
              innovative design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group relative overflow-hidden bg-muted aspect-[4/3] card-hover"
              >
              <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} construction project in Wardha by Balaji Constructions`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-primary text-sm uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl text-accent-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-accent-foreground/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
