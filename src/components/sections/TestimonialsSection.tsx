import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight } from '@/components/ui/motion';

const testimonials = [
  {
    id: 1,
    quote:
      'Honest work, proper guidance and experienced designer. Balaji Design & Constructions made our dream home a reality. Highly recommended!',
    name: 'Rajesh Sharma',
    title: 'Homeowner, Wardha',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Professional team with great attention to detail. They completed our commercial project on time and within budget. Excellent service!',
    name: 'Priya Deshmukh',
    title: 'Business Owner',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'From design to construction, everything was handled smoothly. The quality of work exceeded our expectations. Thank you Balaji team!',
    name: 'Amit Patil',
    title: 'Residential Client',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <FadeInLeft>
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Testimonials
            </p>
            <h2 className="section-title text-foreground mb-6">
              What Our Clients Say
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                <span className="text-foreground font-semibold">5.0</span> Rating • 6 Google Reviews
              </p>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our commitment to quality and client satisfaction has earned us the trust of
              homeowners and businesses across Wardha. Read what our clients have to say about
              working with us.
            </p>
          </FadeInLeft>

          {/* Right Testimonial Card */}
          <FadeInRight className="relative">
            <div className="bg-background p-8 lg:p-12 shadow-elevated relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-8">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <p className="font-display text-xl text-foreground">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonials[currentIndex].title}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 -z-10" />
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
