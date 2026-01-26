import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-construction.jpg';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema, FAQSchema } from '@/components/StructuredData';

const contactFAQs = [
  {
    question: 'How can I get a free construction quote?',
    answer: 'Getting a free quote is easy! Call us at +91 86248 38652, WhatsApp us, or email balajidesignandconstruction@gmail.com. You can also visit our office at Prism Square, Bachelor Road, Wardha. We provide detailed estimates after understanding your project requirements.',
  },
  {
    question: 'What areas do you serve in Maharashtra?',
    answer: 'We primarily serve Wardha district and surrounding areas including Nagpur, Amravati, Chandrapur, and other parts of Vidarbha region in Maharashtra. Contact us to discuss your project location.',
  },
  {
    question: 'What are your working hours?',
    answer: 'Our office is open Monday to Saturday from 9:00 AM to 6:00 PM. We are closed on Sundays. However, you can reach us via WhatsApp or email anytime, and we will respond on the next business day.',
  },
  {
    question: 'How long does it take to get a response after inquiry?',
    answer: 'We typically respond to all inquiries within 24 hours on business days. For urgent matters, calling us directly at +91 86248 38652 is the fastest way to get in touch.',
  },
];
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.'
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <main className="min-h-screen">
      <SEOHead title="Contact Us - Get Free Construction Quote" description="Contact Balaji Design & Constructions for free quote. Call +91 86248 38652 or visit us at Prism Square, Bachelor Road, Wardha. Professional builders in Maharashtra." canonical="/contact" />
      <BreadcrumbSchema items={[{
      name: 'Home',
      url: '/'
    }, {
      name: 'Contact',
      url: '/contact'
    }]} />
      <FAQSchema faqs={contactFAQs} />
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
              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                {/* Phone Card */}
                <div className="group flex items-start gap-3 sm:gap-5 p-4 sm:p-6 bg-secondary border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-lg sm:text-xl text-foreground mb-2">Phone</p>
                    <div className="space-y-1">
                      <a href="tel:+918624838652" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group/link">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/link:bg-primary transition-colors flex-shrink-0" />
                        +91 86248 38652
                      </a>
                      <a href="tel:+919766953539" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group/link">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/link:bg-primary transition-colors flex-shrink-0" />
                        +91 97669 53539
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <a 
                  href="mailto:balajidesignandconstruction@gmail.com" 
                  className="group flex items-start gap-3 sm:gap-5 p-4 sm:p-6 bg-secondary border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-lg sm:text-xl text-foreground mb-2">Email</p>
                    <p className="text-sm sm:text-base text-muted-foreground group-hover:text-primary transition-colors break-all">
                      balajidesignandconstruction@gmail.com
                    </p>
                  </div>
                </a>

                {/* Address Card */}
                <div className="group flex items-start gap-3 sm:gap-5 p-4 sm:p-6 bg-secondary border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-lg sm:text-xl text-foreground mb-2">Address</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Prism Square<br />
                      Bachelor Road, Wardha<br />
                      Maharashtra 442001
                    </p>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="group flex items-start gap-3 sm:gap-5 p-4 sm:p-6 bg-secondary border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-lg sm:text-xl text-foreground mb-2">Working Hours</p>
                    <div className="text-sm sm:text-base text-muted-foreground space-y-1">
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                        Mon - Sat: 9:00 AM - 6:00 PM
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video bg-muted">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.6244553076833!2d78.60073731540556!3d20.738739386180075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd321ec4d7d57ad%3A0x7f3f3dc33a8c7e4!2sWardha%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location Map" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="bg-charcoal p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-display text-2xl sm:text-3xl text-accent-foreground mb-3 sm:mb-4">
                Get in Touch
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Reach out to us directly through your preferred channel.
              </p>
              <div className="flex flex-col gap-3 sm:gap-4">
                <a
                  href="https://wa.me/918624838652?text=Hi%2C%20I'd%20like%20to%20inquire%20about%20your%20construction%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary rounded-none w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+918624838652"
                  className="btn-primary rounded-none w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Us Now
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=balajidesignandconstruction@gmail.com&su=Hi&body=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20construction%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-none w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 bg-[#EA4335] hover:bg-[#d33426] text-white transition-colors font-medium text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send via Gmail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>;
};
export default Contact;