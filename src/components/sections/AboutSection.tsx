import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeInLeft, FadeInRight, FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const AboutSection = () => {
  const highlights = [
    'Quality craftsmanship & materials',
    'Transparent pricing & honest work',
    'On-time project delivery',
    'Personalized design solutions',
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <FadeInLeft>
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              About Us
            </p>
            <h2 className="section-title text-foreground mb-6">
              Your Trusted Construction
              <br />
              <span className="text-primary">Partner in Wardha</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Balaji Design & Constructions has been serving Wardha and surrounding areas for over
              15 years. We specialize in residential and commercial construction, bringing your
              dreams to life with dedication, expertise, and an unwavering commitment to quality.
            </p>
            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <FadeInUp key={index} delay={0.1 * index}>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                </FadeInUp>
              ))}
            </ul>
            <Button asChild className="btn-primary rounded-none group">
              <Link to="/about">
                More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </FadeInLeft>

          {/* Right Stats Cards */}
          <StaggerContainer className="grid grid-cols-2 gap-4 lg:gap-6">
            <StaggerItem className="bg-card border border-border p-6 lg:p-8 shadow-elevated card-hover rounded-lg">
              <p className="font-display text-5xl lg:text-6xl text-primary mb-2">5.0</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Google Rating</p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </StaggerItem>
            <StaggerItem className="bg-primary/10 border border-primary/20 p-6 lg:p-8 shadow-elevated card-hover mt-8 rounded-lg">
              <p className="font-display text-5xl lg:text-6xl text-primary mb-2">6+</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Satisfied Clients</p>
              <p className="text-foreground/70 text-sm mt-3">& Growing</p>
            </StaggerItem>
            <StaggerItem className="bg-primary/10 border border-primary/20 p-6 lg:p-8 shadow-elevated card-hover -mt-8 rounded-lg">
              <p className="font-display text-5xl lg:text-6xl text-primary mb-2">15+</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Years Experience</p>
              <p className="text-foreground/70 text-sm mt-3">Since 2009</p>
            </StaggerItem>
            <StaggerItem className="bg-card border border-border p-6 lg:p-8 shadow-elevated card-hover rounded-lg">
              <p className="font-display text-5xl lg:text-6xl text-primary mb-2">100%</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Commitment</p>
              <p className="text-foreground/70 text-sm mt-3">To Excellence</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
