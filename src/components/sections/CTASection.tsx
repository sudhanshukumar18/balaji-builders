import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeInUp, ScaleIn } from '@/components/ui/motion';
import heroImage from '@/assets/hero-construction.jpg';

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-charcoal/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Start Your Project
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
              Ready to Build Your Dream?
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-muted-foreground text-lg mb-10">
              Whether you're planning a new home, commercial space, or renovation project, we're here
              to help. Contact us today for a free consultation and quote.
            </p>
          </FadeInUp>
          <ScaleIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary rounded-none group">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline text-accent-foreground hover:text-foreground rounded-none">
                <a href="tel:+918624838652">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
