import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectResidential1 from '@/assets/project-residential-1.jpg';
import projectCommercial1 from '@/assets/project-commercial-1.jpg';
import projectResidential2 from '@/assets/project-residential-2.jpg';
import projectBungalow from '@/assets/project-bungalow.jpg';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';
import PDFViewer from '@/components/PDFViewer';
import { FadeInUp } from '@/components/ui/motion';

const projectsData: Record<string, {
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  area: string;
  image: string;
  details: string[];
  pdf?: string;
}> = {
  'modern-villa-residence': {
    title: 'Modern Villa Residence',
    category: 'Residential',
    description: 'A stunning contemporary villa featuring modern architecture with clean lines, open spaces, and seamless indoor-outdoor living.',
    location: 'Wardha, Maharashtra',
    year: '2024',
    area: '3,500 sq.ft',
    image: projectResidential1,
    details: [
      'Contemporary architectural design',
      'Premium imported materials',
      'Smart home integration',
      'Landscaped garden with pool',
      'Energy-efficient systems',
    ],
    pdf: '/pdfs/shubham-portfolio.pdf',
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

      {/* PDF Documentation Section */}
      {project.pdf && (
        <FadeInUp>
          <section className="section-padding bg-secondary">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    Project Documentation
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    View detailed floor plans and specifications
                  </p>
                </div>
                <Button asChild className="btn-primary rounded-none group">
                  <a href={project.pdf} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
              <PDFViewer src={project.pdf} title={`${project.title} Documentation`} />
            </div>
          </section>
        </FadeInUp>
      )}

      <Footer />
    </main>
  );
};

export default ProjectDetail;
