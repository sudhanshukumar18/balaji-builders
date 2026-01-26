import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Building2, Paintbrush, Ruler, ArrowRight, CheckCircle, KeyRound, Compass, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  icon: React.ComponentType<{
    className?: string;
  }>;
  title: string;
  description: string;
  features: string[];
  slug: string;
  image?: string;
  video?: string;
}
const services: Service[] = [{
  icon: Home,
  title: 'Residential Construction',
  description: 'Custom homes, villas, and apartments built with precision and care.',
  features: ['Custom home design and construction', 'Villa and bungalow projects', 'Apartment building development', 'Home additions and extensions', 'Foundation and structural work'],
  slug: 'residential-construction',
  image: serviceResidential
}, {
  icon: Building2,
  title: 'Commercial Construction',
  description: 'Office buildings, retail spaces, and commercial complexes.',
  features: ['Office building construction', 'Retail and shopping spaces', 'Industrial facilities', 'Warehouse construction', 'Commercial renovations'],
  slug: 'commercial-construction',
  image: serviceCommercial
}, {
  icon: Paintbrush,
  title: 'Interior Design',
  description: 'Transform your spaces with our expert interior design services.',
  features: ['Complete interior design solutions', 'Kitchen and bathroom design', 'Living space optimization', 'Custom furniture design', 'Color and material consultation'],
  slug: 'interior-design',
  video: '/videos/service-interior.mp4'
}, {
  icon: Ruler,
  title: 'Design & Planning',
  description: 'Comprehensive architectural design and planning services.',
  features: ['Architectural design', 'Site planning and analysis', '3D visualization and rendering', 'Permit and approval assistance', 'Project management'],
  slug: 'design-planning',
  image: serviceDesignPlanning
}, {
  icon: KeyRound,
  title: 'Turnkey Project',
  description: 'Complete end-to-end project delivery from concept to keys. We handle everything so you can move in hassle-free.',
  features: ['Single point of contact for entire project', 'Design to completion management', 'Quality materials and workmanship', 'Timely project delivery', 'Post-construction support and warranty'],
  slug: 'turnkey-project',
  image: serviceTurnkey
}, {
  icon: Compass,
  title: 'Structural Design',
  description: 'Expert structural engineering and design services ensuring safety, stability, and optimal load distribution.',
  features: ['Structural analysis and calculations', 'RCC design and detailing', 'Steel structure design', 'Foundation design optimization', 'Seismic and wind load analysis'],
  slug: 'structural-design',
  image: serviceStructural
}, {
  icon: PenTool,
  title: 'Architectural Design',
  description: 'Creative architectural solutions blending aesthetics with functionality. Unique designs tailored to your vision.',
  features: ['Conceptual design and sketching', '3D modeling and visualization', 'Building elevation design', 'Space planning and layout', 'Sustainable design solutions'],
  slug: 'architectural-design',
  image: serviceArchitectural
}];
const Services = () => {
  return <main className="min-h-screen">
      <SEOHead title="Construction Services - Residential & Commercial" description="Professional construction services in Wardha: residential homes, commercial buildings, interior design, and architectural planning. Get free quote from Balaji Constructions." canonical="/services" />
      <BreadcrumbSchema items={[{
      name: 'Home',
      url: '/'
    }, {
      name: 'Services',
      url: '/services'
    }]} />
      <ServiceSchema serviceName="Construction Services" serviceDescription="Complete construction services including residential, commercial, interior design and planning in Wardha, Maharashtra." />
      <FAQSchema faqs={serviceFAQs} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Our Services
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-muted-foreground text-lg">
              From initial design to final construction, we offer end-to-end building solutions
              tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => <div key={service.slug} id={service.slug} className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3 sm:mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6">{service.description}</p>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, i) => <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-foreground">{feature}</span>
                      </li>)}
                  </ul>
                  <Button asChild className="btn-primary rounded-none group w-full sm:w-auto">
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className={`group relative overflow-hidden rounded-lg aspect-video sm:aspect-[4/3] lg:aspect-square ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  {service.video ? (
                    <video src={service.video} autoPlay loop muted playsInline className="w-full h-full object-cover object-center" />
                  ) : service.image ? (
                    <>
                      <img src={service.image} alt={service.title} className="w-full h-full object-center transition-transform duration-500 group-hover:scale-105 object-contain" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 sm:pb-8">
                        <div className="flex items-center gap-2 sm:gap-3 text-accent-foreground">
                          <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                          <span className="font-display text-lg sm:text-xl">{service.title}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="bg-secondary w-full h-full flex items-center justify-center">
                      <service.icon className="w-24 h-24 sm:w-32 sm:h-32 text-primary/20" />
                    </div>
                  )}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </main>;
};
export default Services;