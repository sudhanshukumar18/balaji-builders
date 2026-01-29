import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import projectResidential1 from '@/assets/project-residential-1.png';
import projectResidential2 from '@/assets/project-residential-2.png';
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
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { FadeInUp } from '@/components/ui/motion';

const planningImages = [
  { id: 1, image: projectResidential1, alt: 'Modern residential planning design' },
];

const exteriorImages = [
  { id: 1, image: exterior1, alt: 'Modern villa exterior with landscape' },
  { id: 2, image: exterior2, alt: 'Contemporary bungalow facade design' },
  { id: 3, image: exterior3, alt: 'Modern commercial exterior with glass' },
  { id: 4, image: exterior4, alt: 'Sunset view modern house exterior' },
  { id: 5, image: exterior5, alt: 'Traditional style house with modern elements' },
  { id: 6, image: exterior6, alt: 'Multi-story apartment complex design' },
  { id: 7, image: exterior7, alt: 'Modern apartment building elevation' },
  { id: 8, image: exterior8, alt: 'Contemporary apartment exterior view' },
  { id: 9, image: exterior9, alt: 'Residential complex exterior design' },
  { id: 10, image: exterior10, alt: 'Modern house with unique facade' },
];

const interiorImages = [
  { id: 1, image: projectResidential2, alt: 'Modern interior design concept' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

interface GalleryGridProps {
  images: { id: number; image: string; alt: string }[];
  title: string;
  category: string;
}

const GalleryGrid = ({ images, title, category }: GalleryGridProps) => (
  <div className="mb-16">
    <FadeInUp>
      <div className="mb-8">
        <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-2">
          {category}
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-foreground">{title}</h2>
      </div>
    </FadeInUp>
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {images.map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          className="group relative overflow-hidden bg-muted aspect-[4/3]"
        >
          <motion.img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            loading="lazy"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

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
          <GalleryGrid images={planningImages} title="Planning" category="Design & Architecture" />
          <GalleryGrid images={exteriorImages} title="Exterior Design" category="Facade & Elevation" />
          <GalleryGrid images={interiorImages} title="Interior Design" category="Interior Concepts" />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
