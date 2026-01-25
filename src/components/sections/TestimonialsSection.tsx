import { useState, useEffect } from 'react';
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
  const [direction, setDirection] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <FadeInLeft>
            <motion.p 
              className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Testimonials
            </motion.p>
            <h2 className="section-title text-foreground mb-6">
              What Our Clients Say
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-5 h-5 text-gold fill-current" 
                    viewBox="0 0 20 20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 300 }}
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </motion.svg>
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
            
            {/* Progress dots */}
            <div className="flex gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 sm:h-2 rounded-full transition-all duration-300 min-w-[10px] ${
                    index === currentIndex ? 'w-8 sm:w-8 bg-primary' : 'w-2.5 sm:w-2 bg-border hover:bg-primary/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </FadeInLeft>

          {/* Right Testimonial Card */}
          <FadeInRight className="relative">
            <motion.div 
              className="bg-background p-6 sm:p-8 lg:p-12 shadow-elevated relative overflow-hidden"
              whileHover={{ y: -5, boxShadow: 'var(--shadow-elevated)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Quote className="absolute top-6 right-6 w-16 h-16 text-primary" />
              </motion.div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      className="w-4 h-4 text-gold fill-current" 
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </motion.svg>
                  ))}
                </div>
                
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <p className="text-foreground text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <p className="font-display text-lg sm:text-xl text-foreground">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {testimonials[currentIndex].title}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <div className="flex gap-2 mt-6 sm:mt-8">
                  <motion.button
                    onClick={prevTestimonial}
                    className="w-10 h-10 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors min-w-[44px] min-h-[44px]"
                    aria-label="Previous testimonial"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={nextTestimonial}
                    className="w-10 h-10 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors min-w-[44px] min-h-[44px]"
                    aria-label="Next testimonial"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 -z-10"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <motion.div 
              className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary/20 -z-10"
              initial={{ scale: 0, rotate: 10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
