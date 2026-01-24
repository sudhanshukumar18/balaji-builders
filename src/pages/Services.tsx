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
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema, ServiceSchema } from '@/components/StructuredData';
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
  slug: 'turnkey-project'
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
          <div className="space-y-16">
            {services.map((service, index) => <div key={service.slug} id={service.slug} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-display text-4xl text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>)}
                  </ul>
                  <Button asChild className="btn-primary rounded-none group">
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className={`group relative overflow-hidden rounded-lg aspect-[4/3] lg:aspect-square ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {service.video ? (
                    <video src={service.video} autoPlay loop muted playsInline className="w-full h-full object-cover object-center" />
                  ) : service.image ? (
                    <>
                      <img src={service.image} alt={service.title} className="w-full h-full object-center transition-transform duration-500 group-hover:scale-105 object-contain" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                        <div className="flex items-center gap-3 text-accent-foreground">
                          <service.icon className="w-8 h-8 text-primary" />
                          <span className="font-display text-xl">{service.title}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="bg-secondary w-full h-full flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-primary/20" />
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