import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Quote } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema, ReviewSchema } from '@/components/StructuredData';

const reviews = [
  {
    id: 1,
    quote: 'Honest work, proper guidance and experienced designer. Balaji Design & Constructions made our dream home a reality. Highly recommended!',
    name: 'Rajesh Sharma',
    title: 'Homeowner, Wardha',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Professional team with great attention to detail. They completed our commercial project on time and within budget. Excellent service!',
    name: 'Priya Deshmukh',
    title: 'Business Owner',
    rating: 5,
  },
  {
    id: 3,
    quote: 'From design to construction, everything was handled smoothly. The quality of work exceeded our expectations. Thank you Balaji team!',
    name: 'Amit Patil',
    title: 'Residential Client',
    rating: 5,
  },
  {
    id: 4,
    quote: 'Very cooperative and understanding team. They listened to all our requirements and delivered exactly what we wanted.',
    name: 'Sneha Kulkarni',
    title: 'Villa Owner',
    rating: 5,
  },
  {
    id: 5,
    quote: 'Best construction company in Wardha. Their work quality is top-notch and prices are reasonable.',
    name: 'Vikram Joshi',
    title: 'Property Developer',
    rating: 5,
  },
  {
    id: 6,
    quote: 'Excellent experience working with Balaji Design & Constructions. Would definitely recommend to anyone looking for quality construction.',
    name: 'Meera Deshpande',
    title: 'Apartment Owner',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Client Reviews - 5.0★ Google Rating"
        description="Read reviews from satisfied clients of Balaji Design & Constructions. 5.0 star Google rating with 6+ reviews. Trusted builders in Wardha, Maharashtra."
        canonical="/reviews"
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Reviews', url: '/reviews' }]} />
      <ReviewSchema reviews={reviews.map(r => ({ name: r.name, text: r.quote, rating: r.rating, title: r.title }))} />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-charcoal">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Client Reviews
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
              What Our Clients Say
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-accent-foreground text-lg">
                5.0 Rating • 6 Google Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-background p-8 shadow-card relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{review.quote}"</p>
                <div>
                  <p className="font-display text-xl text-foreground">{review.name}</p>
                  <p className="text-muted-foreground text-sm">{review.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Reviews;
