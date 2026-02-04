import Header from '@/components/Header';
import Footer from '@/components/Footer';

import interior1 from '@/assets/interior-1.jpg';
import interior2 from '@/assets/interior-2.jpg';
import interior3 from '@/assets/interior-3.jpg';
import interior4 from '@/assets/interior-4.jpg';
import interior5 from '@/assets/interior-5.jpg';
import interior6 from '@/assets/interior-6.jpg';
import interior7 from '@/assets/interior-7.jpg';
import interior8 from '@/assets/interior-8.jpg';
import interior9 from '@/assets/interior-9.jpg';
import interior10 from '@/assets/interior-10.jpg';
import interior11 from '@/assets/interior-11.jpg';
import interior12 from '@/assets/interior-12.jpg';
import interior13 from '@/assets/interior-13.jpg';
import interior14 from '@/assets/interior-14.jpg';
import interior15 from '@/assets/interior-15.jpg';
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
import exterior14 from '@/assets/exterior-14.jpg';
import exterior15 from '@/assets/exterior-15.jpg';
import exterior16 from '@/assets/exterior-16.jpg';
import exterior17 from '@/assets/exterior-17.jpg';
import exterior18 from '@/assets/exterior-18.jpg';
import exterior19 from '@/assets/exterior-19.jpg';
import exterior20 from '@/assets/exterior-20.jpg';
import exterior21 from '@/assets/exterior-21.jpg';
import planning1 from '@/assets/planning-1.jpg';
import planning2 from '@/assets/planning-2.jpg';
import planning3 from '@/assets/planning-3.jpg';
import planning4 from '@/assets/planning-4.jpg';
import planning5 from '@/assets/planning-5.jpg';
import planning6 from '@/assets/planning-6.jpg';
import planning7 from '@/assets/planning-7.jpg';
import planning8 from '@/assets/planning-8.jpg';
import planning9 from '@/assets/planning-9.jpg';
import planning10 from '@/assets/planning-10.jpg';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { FadeInUp } from '@/components/ui/motion';
import { motion } from 'framer-motion';
import CurvedCarousel from '@/components/ui/curved-carousel';

const planningSliderImages = [
  planning1,
  planning2,
  planning3,
  planning4,
  planning5,
  planning6,
  planning7,
  planning8,
  planning9,
  planning10,
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
  exterior12,
  exterior13,
  exterior14,
  exterior15,
  exterior16,
  exterior17,
  exterior18,
  exterior19,
  exterior20,
  exterior21,
];

const interiorSliderImages = [
  interior1,
  interior2,
  interior3,
  interior4,
  interior5,
  interior6,
  interior7,
  interior8,
  interior9,
  interior10,
  interior11,
  interior12,
  interior13,
  interior14,
  interior15,
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
              <div className="mb-8 text-center">
                <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-2">
                  Design & Architecture
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Planning</h2>
              </div>
            </FadeInUp>
            <CurvedCarousel images={planningSliderImages} aspectRatio="landscape" />
          </div>
          
          {/* Exterior Design */}
          <div className="mb-16">
            <FadeInUp>
              <div className="mb-8 text-center">
                <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-2">
                  Facade & Elevation
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Exterior Design</h2>
              </div>
            </FadeInUp>
            <CurvedCarousel images={exteriorSliderImages} aspectRatio="portrait" />
          </div>
          
          {/* Interior Design */}
          <div className="mb-16">
            <FadeInUp>
              <div className="mb-8 text-center">
                <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-2">
                  Interior Concepts
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Interior Design</h2>
              </div>
            </FadeInUp>
            <CurvedCarousel images={interiorSliderImages} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
