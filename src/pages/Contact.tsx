import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-construction.jpg';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen">
      <SEOHead
        title="Contact Us - Get Free Construction Quote"
        description="Contact Balaji Design & Constructions for free quote. Call +91 86248 38652 or visit us at Mhada Colony, Arvi Naka, Wardha. Professional builders in Maharashtra."
        canonical="/contact"
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]} />
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
              Contact Us
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
              Let's Build Together
            </h1>
            <p className="text-muted-foreground text-lg">
              Ready to start your project? Get in touch with us for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-4xl text-foreground mb-8">Get In Touch</h2>
              <div className="space-y-6 mb-12">
                <a
                  href="tel:+918624838652"
                  className="flex items-start gap-4 p-6 bg-secondary border border-border hover:bg-primary/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-xl text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground">+91 86248 38652</p>
                  </div>
                </a>
                <a
                  href="mailto:contact@balajidesign.com"
                  className="flex items-start gap-4 p-6 bg-secondary border border-border hover:bg-primary/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-xl text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground">contact@balajidesign.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-6 bg-secondary border border-border">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-xl text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      Mhada Colony, Arvi Naka,<br />
                      Sindi Meghe, Wardha,<br />
                      Maharashtra 442001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-secondary border border-border">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-xl text-foreground mb-1">Working Hours</p>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.6244553076833!2d78.60073731540556!3d20.738739386180075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd321ec4d7d57ad%3A0x7f3f3dc33a8c7e4!2sWardha%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-charcoal p-8 lg:p-12">
              <h3 className="font-display text-3xl text-accent-foreground mb-6">
                Request a Free Quote
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-charcoal-light border-muted-foreground/20 text-accent-foreground placeholder:text-muted-foreground rounded-none h-12"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-charcoal-light border-muted-foreground/20 text-accent-foreground placeholder:text-muted-foreground rounded-none h-12"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-charcoal-light border-muted-foreground/20 text-accent-foreground placeholder:text-muted-foreground rounded-none h-12"
                  />
                </div>
                <div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-charcoal-light border border-muted-foreground/20 text-accent-foreground h-12 px-3 rounded-none focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Project Type *</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="interior">Interior Design</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-charcoal-light border-muted-foreground/20 text-accent-foreground placeholder:text-muted-foreground rounded-none resize-none"
                  />
                </div>
                <Button type="submit" className="btn-primary rounded-none w-full group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
