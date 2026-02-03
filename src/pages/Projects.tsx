import Header from '@/components/Header';
import Footer from '@/components/Footer';

import projectResidential2 from '@/assets/project-residential-2.png';
import interior1 from '@/assets/interior-1.jpg';
import interior2 from '@/assets/interior-2.jpg';
import interior3 from '@/assets/interior-3.jpg';
import interior4 from '@/assets/interior-4.jpg';
import interior5 from '@/assets/interior-5.jpg';
import interior6 from '@/assets/interior-6.jpg';
import interior7 from '@/assets/interior-7.jpg';
import interior8 from '@/assets/interior-8.jpg';
import interior9 from '@/assets/interior-9.jpg';
import heroImage from '@/assets/hero-construction.jpg';
import exterior1 from '@/assets/exterior-1.jpg';
import exterior2 from '@/assets/exterior-2.jpg';
import exterior3 from '@/assets/exterior-3.jpg';
import exterior4 from '@/assets/exterior-4.jpg';
import exterior5 from '@/assets/exterior-5.jpg';
import exterior6 from '@/assets/exterior-6.jpg';
import exterior7 from '@/assets/exterior-7.jpg';
import exterior8 from '@/assets/exterior-8.jpg';
import exterior9 from '@/assets/exterior-9.jpg';
import exterior10 from '@/assets/exterior-10.jpg';
import exterior11 from '@/assets/exterior-11.jpg';
import exterior12 from '@/assets/exterior-12.jpg';
import exterior13 from '@/assets/exterior-13.jpg';
import planning1 from '@/assets/planning-1.jpg';
import planning2 from '@/assets/planning-2.jpg';
import planning3 from '@/assets/planning-3.jpg';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { FadeInUp } from '@/components/ui/motion';

const planningSliderImages = [
  planning1,
  planning2,
  planning3,
];

const exteriorSliderImages = [
  exterior1,
  exterior2,
  exterior3,
  exterior4,
  exterior5,
  exterior6,
  exterior7,
  exterior8,
  exterior9,
  exterior10,
  exterior11,
  exterior12,
  exterior13,
];

const interiorSliderImages = [
  projectResidential2,
  interior1,
  interior2,
  interior3,
  interior4,
  interior5,
  interior6,
  interior7,
  interior8,
  interior9,
];

const Projects = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Our Projects - Construction Portfolio"
        description="View our completed construction projects in Wardha: residential villas, commercial buildings, apartments, and bungalows. Quality craftsmanship by Balaji Constructions."
        canonical="/projects"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
        ]}
      />
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
          <FadeInUp>
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
          </FadeInUp>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Planning */}
          <div className="mb-16">
            <FadeInUp>
              <div className="mb-8">
                <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-2">
                  Design & Architecture
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Planning</h2>
              </div>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {planningSliderImages.map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img src={image} alt={`Planning design ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Exterior Design */}
          <div className="mb-16">
            <FadeInUp>
              <div className="mb-8">
                <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-2">
                  Facade & Elevation
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Exterior Design</h2>
              </div>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exteriorSliderImages.map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img src={image} alt={`Exterior design ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Interior Design */}
          <div className="mb-16">
            <FadeInUp>
              <div className="mb-8">
                <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-2">
                  Interior Concepts
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Interior Design</h2>
              </div>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interiorSliderImages.map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img src={image} alt={`Interior design ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
