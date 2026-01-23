import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Award, Clock, GraduationCap, Briefcase } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';
import founderShubham from '@/assets/founder-shubham.png';
import founderPrashad from '@/assets/founder-prashad.png';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn, Counter } from '@/components/ui/motion';
import { VelocityText } from '@/components/ui/scroll-velocity';

const About = () => {
  const founders = [
    {
      name: 'Shubham Dadgal',
      qualifications: ['B.E (Civil Engg.)', 'M.Tech (Structural Engg.)'],
      experience: '6+ Years Experience',
      image: founderShubham,
    },
    {
      name: 'Prashad Gawande',
      qualifications: ['B.E (Civil Engg.)'],
      experience: '6+ Years Experience',
      image: founderPrashad,
    },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'Quality Craftsmanship',
      description: 'We use only the finest materials and employ skilled craftsmen to ensure every project meets the highest standards.',
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Your vision is our priority. We work closely with you at every stage to bring your dream to life.',
    },
    {
      icon: Award,
      title: 'Honest Work Ethics',
      description: 'Transparency and integrity are at the core of our business. No hidden costs, no surprises.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and commitments. Our projects are completed on schedule without compromising quality.',
    },
  ];

  return (
    <main className="min-h-screen">
      <SEOHead
        title="About Us - 6+ Years Construction Experience"
        description="Learn about Balaji Design & Constructions, Wardha's trusted builder. 6+ years experience, 5.0★ rating, quality construction with honest work ethics."
        canonical="/about"
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }]} />
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
              About Us
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
              Building Trust Since 2019
            </h1>
            <p className="text-muted-foreground text-lg">
              For over 6 years, Balaji Design & Constructions has been transforming visions into
              reality across Wardha and Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll Velocity Text Marquee */}
      <section className="py-8 bg-charcoal border-y border-border/30 overflow-hidden">
        <VelocityText 
          text="Quality Construction" 
          baseVelocity={3}
          textClassName="text-foreground/10"
          separator={<span className="mx-12 text-primary/30">★</span>}
        />
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeInUp>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="section-title text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Balaji Design & Constructions was founded in 2019 with a simple mission: to provide
                    honest, quality construction services to the people of Wardha and surrounding areas.
                  </p>
                  <p>
                    What started as a small local construction firm has grown into a trusted name in the
                    industry, known for our commitment to excellence, transparent business practices, and
                    personalized service.
                  </p>
                  <p>
                    Our team of experienced architects, engineers, and craftsmen work together to deliver
                    projects that exceed expectations. From residential homes to commercial buildings, every
                    project receives the same level of dedication and attention to detail.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="group bg-secondary p-8 text-center border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <p className="font-display text-5xl text-primary mb-2">
                    <Counter from={0} to={6} duration={2} suffix="+" />
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Years Experience</p>
                </div>
                <div className="group bg-card p-8 text-center border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <p className="font-display text-5xl text-primary mb-2">5.0</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Google Rating</p>
                </div>
                <div className="group bg-card p-8 text-center border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <p className="font-display text-5xl text-primary mb-2">
                    <Counter from={0} to={6} duration={2} suffix="+" />
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Happy Clients</p>
                </div>
                <div className="group bg-secondary p-8 text-center border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <p className="font-display text-5xl text-primary mb-2">
                    <Counter from={0} to={100} duration={2.5} suffix="%" />
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Satisfaction</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Second Velocity Marquee - Opposite Direction */}
      <section className="py-6 bg-primary/5 border-y border-primary/10 overflow-hidden">
        <VelocityText 
          text="Trusted Builder Since 2019" 
          baseVelocity={-2}
          textClassName="text-primary/20"
          separator={<span className="mx-10 text-gold/40">◆</span>}
        />
      </section>

      {/* Founders Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Meet Our Founders
            </p>
            <h2 className="section-title text-foreground">
              The Visionaries Behind Our Success
            </h2>
          </FadeInUp>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <StaggerItem key={index}>
                <div className="group relative bg-gradient-to-b from-card to-secondary/50 border border-border/50 p-10 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.2)]">
                  {/* Subtle corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/40" />
                  
                  {/* Photo with elegant border */}
                  <div className="relative w-36 h-36 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-gold/30 p-[2px]">
                      <div className="w-full h-full rounded-full bg-card" />
                    </div>
                    <div className="absolute inset-[4px] rounded-full overflow-hidden border-2 border-primary/20">
                      {founder.image ? (
                        <img src={founder.image} alt={founder.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-charcoal to-secondary">
                          <span className="font-display text-4xl text-primary">
                            {founder.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {founder.name}
                  </h3>
                  
                  {/* Divider */}
                  <div className="w-12 h-[2px] bg-primary/50 mx-auto mb-5" />
                  
                  {/* Qualifications */}
                  <div className="space-y-2 mb-6">
                    {founder.qualifications.map((qual, qIndex) => (
                      <div key={qIndex} className="flex items-center justify-center gap-2.5 text-muted-foreground">
                        <GraduationCap className="w-4 h-4 text-gold/80" />
                        <span className="text-sm tracking-wide">{qual}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-primary/5 border border-primary/15">
                    <Briefcase className="w-4 h-4 text-primary/80" />
                    <span className="text-sm font-medium text-primary tracking-wide">{founder.experience}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Our Values
            </p>
            <h2 className="section-title text-foreground">
              What Sets Us Apart
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="bg-background p-8 shadow-card card-hover h-full">
                  <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
