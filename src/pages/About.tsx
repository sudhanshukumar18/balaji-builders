import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Award, Clock, GraduationCap, Briefcase, Target, Eye, Rocket, Shield, Handshake, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-construction.jpg';
import founderShubham from '@/assets/founder-shubham.png';
import founderPrashad from '@/assets/founder-prashad.png';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleIn, Counter } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const founders = [
    {
      name: 'Shubham Dadgal',
      qualifications: ['B.E (Civil Engg.)', 'M.Tech (Structural Engg.)'],
      experience: '6+ Years Experience',
      bio: 'Specializing in structural engineering and modern construction techniques, Shubham brings technical excellence and innovation to every project.',
      image: founderShubham,
    },
    {
      name: 'Prashad Gawande',
      qualifications: ['B.E (Civil Engg.)'],
      experience: '6+ Years Experience',
      bio: 'With expertise in civil engineering and project management, Prashad ensures every construction meets the highest standards of quality.',
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

  const timeline = [
    { year: '2019', title: 'Company Founded', description: 'Balaji Design & Constructions was established in Wardha with a vision to deliver quality construction.' },
    { year: '2020', title: 'First Major Projects', description: 'Successfully completed our first 10 residential projects, building trust in the community.' },
    { year: '2022', title: 'Commercial Expansion', description: 'Expanded services to include commercial construction and larger residential projects.' },
    { year: '2024', title: '30+ Clients Milestone', description: 'Achieved 30+ satisfied clients with a perfect 5.0 Google rating.' },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Local Expertise',
      description: 'Deep understanding of Wardha\'s construction needs, regulations, and climate requirements.',
    },
    {
      icon: Rocket,
      title: 'End-to-End Service',
      description: 'From design to completion, we handle everything so you can focus on your dream.',
    },
    {
      icon: Handshake,
      title: 'Transparent Communication',
      description: 'Regular updates, clear pricing, and honest timelines throughout your project.',
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-charcoal/90" />
        </motion.div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.p 
              className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.p>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Building Trust Since 2019
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              For over 6 years, Balaji Design & Constructions has been transforming visions into
              reality across Wardha and Maharashtra.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft>
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
            </FadeInLeft>
            <FadeInRight>
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <motion.div 
                  className="bg-secondary p-6 lg:p-8 text-center shadow-card"
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className="font-display text-5xl text-primary mb-2">
                    <Counter to={6} duration={2} suffix="+" />
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Years Experience</p>
                </motion.div>
                <motion.div 
                  className="bg-card p-6 lg:p-8 text-center shadow-card mt-8"
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className="font-display text-5xl text-primary mb-2">
                    <Counter to={5} duration={2} suffix=".0" />
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Google Rating</p>
                  <div className="flex gap-1 mt-3 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg 
                        key={i} 
                        className="w-4 h-4 text-gold fill-current" 
                        viewBox="0 0 20 20"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 300 }}
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-card p-6 lg:p-8 text-center shadow-card -mt-8"
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className="font-display text-5xl text-primary mb-2">
                    <Counter to={30} duration={2} suffix="+" />
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Happy Clients</p>
                </motion.div>
                <motion.div 
                  className="bg-secondary p-6 lg:p-8 text-center shadow-card"
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className="font-display text-5xl text-primary mb-2">
                    <Counter to={100} duration={2} suffix="%" />
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Satisfaction</p>
                </motion.div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Our Journey
            </p>
            <h2 className="section-title text-foreground">
              Milestones That Define Us
            </h2>
          </FadeInUp>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{ originY: 0 }}
            />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
                />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div 
                    className="bg-card p-6 shadow-card border border-border hover:border-primary/50 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-display text-lg mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <FadeInLeft>
              <motion.div 
                className="relative bg-card p-8 lg:p-10 border border-border h-full group hover:border-primary/50 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-gold" />
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-3xl text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional construction services that transform our clients' visions into reality, 
                  while maintaining the highest standards of quality, integrity, and customer satisfaction in every project we undertake.
                </p>
              </motion.div>
            </FadeInLeft>
            
            <FadeInRight>
              <motion.div 
                className="relative bg-card p-8 lg:p-10 border border-border h-full group hover:border-primary/50 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-primary" />
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-3xl text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become Wardha's most trusted construction partner, known for innovative designs, 
                  sustainable building practices, and creating spaces that enhance the quality of life for generations to come.
                </p>
              </motion.div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Meet Our Founders
            </p>
            <h2 className="section-title text-foreground">
              The Visionaries Behind Our Success
            </h2>
          </FadeInUp>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="group relative bg-card border border-border p-8 text-center hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]"
                  whileHover={{ y: -10 }}
                >
                  {/* Photo with animated border */}
                  <div className="relative w-44 h-44 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-gold to-primary opacity-75 animate-[spin_8s_linear_infinite]" />
                    <div className="absolute inset-[3px] rounded-full bg-card" />
                    <div className="absolute inset-[6px] rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                      {founder.image ? (
                        <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
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
                  <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {founder.name}
                  </h3>
                  
                  {/* Bio */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {founder.bio}
                  </p>
                  
                  {/* Qualifications */}
                  <div className="space-y-1 mb-4">
                    {founder.qualifications.map((qual, qIndex) => (
                      <div key={qIndex} className="flex items-center justify-center gap-2 text-muted-foreground">
                        <GraduationCap className="w-4 h-4 text-gold" />
                        <span className="text-sm">{qual}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{founder.experience}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
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
                <motion.div 
                  className="bg-secondary p-8 shadow-card h-full group"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 10 }}
                  >
                    <value.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Why Choose Us
            </p>
            <h2 className="section-title text-foreground mb-6">
              Your Trusted Building Partner
            </h2>
            <p className="text-muted-foreground text-lg">
              We bring together local expertise, comprehensive services, and transparent communication 
              to deliver exceptional construction experiences.
            </p>
          </FadeInUp>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <ScaleIn key={index} delay={index * 0.2}>
                <motion.div 
                  className="text-center p-8 bg-card border border-border hover:border-primary/50 transition-all duration-500"
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <item.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-2xl text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
                Start Your Project
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
                Ready to Build Your Dream?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss your construction project. Get a free consultation and quote from 
                Wardha's most trusted construction partner.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Button asChild className="btn-primary rounded-none group text-lg px-8 py-6">
                    <Link to="/contact">
                      Get a Free Quote
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Button asChild variant="outline" className="btn-outline rounded-none group text-lg px-8 py-6">
                    <a href="tel:+919876543210">
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                </motion.div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
