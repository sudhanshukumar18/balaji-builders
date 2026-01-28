import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Building2, Paintbrush, Ruler, ArrowRight, CheckCircle, KeyRound, Compass, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '@/assets/hero-construction.jpg';
import serviceResidential from '@/assets/service-residential.png';
import serviceCommercial from '@/assets/service-commercial.png';
import serviceArchitectural from '@/assets/service-architectural.png';
import serviceStructural from '@/assets/service-structural.png';
import serviceDesignPlanning from '@/assets/service-design-planning.png';
import serviceTurnkey from '@/assets/service-turnkey.png';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '@/components/StructuredData';

const serviceFAQs = [
  {
    question: 'What types of construction services do you offer in Wardha?',
    answer: 'Balaji Design & Constructions offers comprehensive construction services including residential construction (homes, villas, apartments), commercial construction (offices, retail spaces), interior design, architectural design, structural design, and turnkey project solutions in Wardha and surrounding areas of Maharashtra.',
  },
  {
    question: 'How much does home construction cost in Wardha?',
    answer: 'Home construction costs in Wardha vary based on factors like plot size, design complexity, materials, and finishes. We offer free consultations and detailed cost estimates. Contact us at +91 86248 38652 for a personalized quote for your residential project.',
  },
  {
    question: 'Do you provide turnkey construction services?',
    answer: 'Yes, we provide complete turnkey construction services. This means we handle everything from initial design and planning to final construction and handover. You get a single point of contact, quality materials, timely delivery, and post-construction support.',
  },
  {
    question: 'What is your typical construction timeline?',
    answer: 'Construction timelines depend on project scope and complexity. A typical residential home takes 8-12 months, while commercial projects may take 12-18 months. We provide detailed project schedules and ensure timely completion with regular progress updates.',
  },
  {
    question: 'Do you offer architectural and structural design services?',
    answer: 'Yes, we have expert architects and structural engineers who provide comprehensive design services including 3D visualization, structural analysis, RCC design, foundation design, and sustainable building solutions tailored to your requirements and local building codes.',
  },
];

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  slug: string;
  image?: string;
  video?: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: 'Residential Construction',
    shortTitle: 'Residential',
    description: 'Custom homes, villas, and apartments built with precision and care. From foundation to finishing, we deliver your dream home with quality materials and expert craftsmanship.',
    features: ['Custom home design and construction', 'Villa and bungalow projects', 'Apartment building development', 'Home additions and extensions', 'Foundation and structural work'],
    slug: 'residential-construction',
    image: serviceResidential
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    shortTitle: 'Commercial',
    description: 'Office buildings, retail spaces, and commercial complexes designed for functionality and aesthetic appeal. We create spaces that enhance productivity and brand presence.',
    features: ['Office building construction', 'Retail and shopping spaces', 'Industrial facilities', 'Warehouse construction', 'Commercial renovations'],
    slug: 'commercial-construction',
    image: serviceCommercial
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    shortTitle: 'Interior',
    description: 'Transform your spaces with our expert interior design services. We blend modern aesthetics with functional design to create environments that inspire.',
    features: ['Complete interior design solutions', 'Kitchen and bathroom design', 'Living space optimization', 'Custom furniture design', 'Color and material consultation'],
    slug: 'interior-design',
    video: '/videos/service-interior.mp4'
  },
  {
    icon: Ruler,
    title: 'Design & Planning',
    shortTitle: 'Planning',
    description: 'Comprehensive architectural design and planning services to bring your vision to life. From concept to blueprint, we ensure every detail is perfect.',
    features: ['Architectural design', 'Site planning and analysis', '3D visualization and rendering', 'Permit and approval assistance', 'Project management'],
    slug: 'design-planning',
    image: serviceDesignPlanning
  },
  {
    icon: KeyRound,
    title: 'Turnkey Project',
    shortTitle: 'Turnkey',
    description: 'Complete end-to-end project delivery from concept to keys. We handle everything so you can move in hassle-free with zero stress.',
    features: ['Single point of contact for entire project', 'Design to completion management', 'Quality materials and workmanship', 'Timely project delivery', 'Post-construction support and warranty'],
    slug: 'turnkey-project',
    image: serviceTurnkey
  },
  {
    icon: Compass,
    title: 'Structural Design',
    shortTitle: 'Structural',
    description: 'Expert structural engineering and design services ensuring safety, stability, and optimal load distribution for lasting structures.',
    features: ['Structural analysis and calculations', 'RCC design and detailing', 'Steel structure design', 'Foundation design optimization', 'Seismic and wind load analysis'],
    slug: 'structural-design',
    image: serviceStructural
  },
  {
    icon: PenTool,
    title: 'Architectural Design',
    shortTitle: 'Architectural',
    description: 'Creative architectural solutions blending aesthetics with functionality. Unique designs tailored to your vision and lifestyle.',
    features: ['Conceptual design and sketching', '3D modeling and visualization', 'Building elevation design', 'Space planning and layout', 'Sustainable design solutions'],
    slug: 'architectural-design',
    image: serviceArchitectural
  }
];

// Animation variants with proper TypeScript typing
const heroLabelVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const heroTitleVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: 0.15, ease: 'easeOut' as const } 
  }
};

const heroDescVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' as const } }
};

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const mediaVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } 
  }
};

const iconBoxVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.5, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const } 
  }
};

const titleVariants = {
  hidden: { opacity: 0, filter: 'blur(6px)', y: 10 },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)', 
    y: 0,
    transition: { duration: 0.5, delay: 0.15, ease: 'easeOut' as const } 
  }
};

const descVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, delay: 0.2, ease: 'easeOut' as const } 
  }
};

const featureListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.25,
    },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.35, ease: 'easeOut' as const } 
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.4, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] as const } 
  }
};

const Services = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('residential-construction');
  const tabsSectionRef = useRef<HTMLElement>(null);

  // Handle hash navigation from homepage with smooth scroll
  useEffect(() => {
    if (location.hash) {
      const slug = location.hash.replace('#', '');
      const serviceExists = services.find(s => s.slug === slug);
      if (serviceExists) {
        setActiveTab(slug);
        
        // Smooth scroll to tabs section after a short delay for page render
        const scrollTimeout = setTimeout(() => {
          if (tabsSectionRef.current) {
            const headerOffset = 100; // Account for fixed header
            const elementPosition = tabsSectionRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
        
        return () => clearTimeout(scrollTimeout);
      }
    }
  }, [location.hash]);

  const activeService = services.find(s => s.slug === activeTab) || services[0];

  return (
    <main className="min-h-screen">
      <SEOHead 
        title="Construction Services - Residential & Commercial" 
        description="Professional construction services in Wardha: residential homes, commercial buildings, interior design, and architectural planning. Get free quote from Balaji Constructions." 
        canonical="/services" 
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }]} />
      <ServiceSchema serviceName="Construction Services" serviceDescription="Complete construction services including residential, commercial, interior design and planning in Wardha, Maharashtra." />
      <FAQSchema faqs={serviceFAQs} />
      <Header />
      
      {/* Hero Section with Staggered Animations */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.p 
              variants={heroLabelVariants}
              initial="hidden"
              animate="visible"
              className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4"
            >
              Our Services
            </motion.p>
            <motion.h1 
              variants={heroTitleVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6"
            >
              Comprehensive Construction Solutions
            </motion.h1>
            <motion.p 
              variants={heroDescVariants}
              initial="hidden"
              animate="visible"
              className="text-muted-foreground text-lg"
            >
              From initial design to final construction, we offer end-to-end building solutions
              tailored to your specific needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tabs-Based Services Section */}
      <section ref={tabsSectionRef} className="section-padding bg-background" id="services-tabs">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Navigation with Animated Indicator */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12 overflow-x-auto scrollbar-hide"
            >
              <TabsList className="inline-flex w-full min-w-max gap-1 bg-transparent p-0 border-b border-border/50">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.slug}
                    value={service.slug}
                    className="group relative flex items-center gap-2 px-4 py-4 text-muted-foreground bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-transparent data-[state=active]:text-foreground hover:text-foreground transition-colors duration-200 min-h-[56px]"
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <service.icon className="w-4 h-4 shrink-0" />
                    </motion.div>
                    <span className="hidden sm:inline text-sm font-medium whitespace-nowrap">{service.shortTitle}</span>
                    
                    {/* Animated active indicator */}
                    {activeTab === service.slug && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            {/* Tab Content with Enhanced Animations */}
            {services.map((service) => (
              <TabsContent key={service.slug} value={service.slug} className="mt-0 focus-visible:outline-none">
                <AnimatePresence mode="wait">
                  {activeTab === service.slug && (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
                    >
                      {/* Media Area with Scale Animation */}
                      <motion.div 
                        variants={mediaVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-lg bg-muted group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                      >
                        {service.video ? (
                          <video
                            src={service.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : service.image ? (
                          <motion.img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <service.icon className="w-24 h-24 text-primary/20" />
                          </div>
                        )}
                        
                        {/* Subtle hover overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        />
                      </motion.div>

                      {/* Content Area with Staggered Animations */}
                      <motion.div 
                        variants={contentContainerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:py-8"
                      >
                        {/* Icon Box with Bounce Animation */}
                        <motion.div 
                          variants={iconBoxVariants}
                          className="flex items-center gap-3 mb-6"
                        >
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-primary" />
                          </div>
                        </motion.div>
                        
                        {/* Title with Blur Reveal */}
                        <motion.h2 
                          variants={titleVariants}
                          className="font-display text-3xl md:text-4xl text-foreground mb-4"
                        >
                          {service.title}
                        </motion.h2>
                        
                        {/* Description with Fade Up */}
                        <motion.p 
                          variants={descVariants}
                          className="text-muted-foreground text-lg leading-relaxed mb-8"
                        >
                          {service.description}
                        </motion.p>

                        {/* Feature List with Staggered Items */}
                        <motion.ul 
                          variants={featureListVariants}
                          initial="hidden"
                          animate="visible"
                          className="space-y-3 mb-10"
                        >
                          {service.features.map((feature, i) => (
                            <motion.li 
                              key={i} 
                              variants={featureItemVariants}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground">{feature}</span>
                            </motion.li>
                          ))}
                        </motion.ul>

                        {/* CTA Button with Scale Animation */}
                        <motion.div variants={buttonVariants}>
                          <Button asChild className="btn-primary rounded-none group relative overflow-hidden">
                            <Link to="/contact">
                              <motion.span 
                                className="relative z-10 flex items-center"
                                whileHover={{ x: 4 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                              >
                                Get a Quote
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </motion.span>
                            </Link>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
