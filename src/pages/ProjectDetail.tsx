import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectResidential1 from '@/assets/project-residential-1.jpg';
import projectCommercial1 from '@/assets/project-commercial-1.jpg';
import projectResidential2 from '@/assets/project-residential-2.jpg';
import projectBungalow from '@/assets/project-bungalow.jpg';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';

const projectsData: Record<string, {
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  area: string;
  image: string;
  details: string[];
}> = {
  'modern-villa-residence': {
    title: 'Modern G+1, 3 BHK House',
    category: 'Residential',
    description: 'A testament to modern architecture. The modern 3 BHK house seamlessly combines elegance and functionality, offering three spacious bedrooms, three stylish bathrooms, a contemporary kitchen, and a bright, open-plan living and dining area.',
    location: 'Wardha-442001, MH',
    year: '2024',
    area: '1,900 sq.ft (176.51 sq.mt)',
    image: projectResidential1,
    details: [
      'Three spacious bedrooms with attached bathrooms',
      'Contemporary modular kitchen',
      'Open-plan living and dining area',
      'Large windows and balconies for natural light',
      'Vitrified tile flooring throughout',
      'Sleek sanitary fixtures',
      'High-quality finishes',
    ],
  },
  'wardha-business-center': {
    title: 'Wardha Business Center',
    category: 'Commercial',
    description: 'State-of-the-art commercial complex designed to accommodate modern businesses with premium amenities and infrastructure.',
    location: 'Central Wardha',
    year: '2023',
    area: '25,000 sq.ft',
    image: projectCommercial1,
    details: [
      'Multi-floor office spaces',
      'Modern elevator systems',
      'Ample parking facilities',
      'Conference and meeting rooms',
      'High-speed connectivity infrastructure',
    ],
  },
  'sunrise-apartments': {
    title: 'Sunrise Apartments',
    category: 'Residential',
    description: 'Premium multi-story apartment complex offering modern living with excellent amenities and stunning views.',
    location: 'Arvi Naka, Wardha',
    year: '2024',
    area: '45,000 sq.ft',
    image: projectResidential2,
    details: [
      '24 residential units',
      'Club house and gym',
      'Children play area',
      '24/7 security',
      'Power backup',
    ],
  },
  'heritage-bungalow': {
    title: 'Heritage Bungalow',
    category: 'Residential',
    description: 'A beautiful bungalow that blends traditional Indian architecture with modern comfort and convenience.',
    location: 'Sindi Meghe, Wardha',
    year: '2023',
    area: '2,800 sq.ft',
    image: projectBungalow,
    details: [
      'Traditional design elements',
      'Modern kitchen and bathrooms',
      'Vastu-compliant layout',
      'Beautiful garden space',
      'Covered parking',
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl text-foreground mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-primary hover:underline">
              View All Projects
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <SEOHead
        title={`${project.title} - ${project.category} Project`}
        description={`${project.description} Located in ${project.location}. ${project.area} built-up area completed in ${project.year} by Balaji Constructions.`}
        canonical={`/projects/${slug}`}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Projects', url: '/projects' },
        { name: project.title, url: `/projects/${slug}` }
      ]} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <Link
            to="/projects"
            className="inline-flex items-center text-accent-foreground/70 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
            {project.category}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="bg-secondary p-8 border border-border">
              <h3 className="font-display text-2xl text-foreground mb-6">Project Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p>
                    <p className="text-foreground font-medium">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-muted-foreground text-sm">Year Completed</p>
                    <p className="text-foreground font-medium">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Ruler className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-muted-foreground text-sm">Built-up Area</p>
                    <p className="text-foreground font-medium">{project.area}</p>
                  </div>
                </div>
              </div>

              <hr className="my-8 border-border" />

              <h4 className="font-display text-xl text-foreground mb-4">Key Features</h4>
              <ul className="space-y-3">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="btn-primary rounded-none w-full mt-8 group">
                <Link to="/contact">
                  Start Similar Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
