import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const otherLinks = [
    { name: 'Reviews', path: '/reviews' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  const socialVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.15, 
      rotate: 5,
    },
  };

  return (
    <footer className="bg-charcoal text-accent-foreground overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 md:px-6 lg:px-8 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <motion.div 
                className="w-10 h-10 bg-primary rounded flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <span className="font-display text-primary-foreground text-xl font-bold">B</span>
              </motion.div>
              <div>
                <h3 className="font-display text-lg leading-tight group-hover:text-primary transition-colors">Balaji Design</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-1">
                  & Constructions
                </p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building dreams and creating landmarks in Wardha. Your trusted partner for quality
              construction and innovative design solutions.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/share/19V9zhTriM/?mibextid=wwXIfr' },
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                  initial="rest"
                  whileHover="hover"
                  variants={socialVariants}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors inline-block relative group"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-px bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Other Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-xl mb-6">Other Pages</h4>
            <ul className="space-y-3">
              {otherLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors inline-block relative group"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-px bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <a
                  href="tel:+918624838652"
                  className="flex items-start gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span>
                    +91 86248 38652
                    <br />
                    +91 97669 53539
                  </span>
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <a
                  href="mailto:balajidesignandconstruction@gmail.com"
                  className="flex items-start gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  balajidesignandconstruction@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3 text-muted-foreground text-sm"
                whileHover={{ x: 5 }} 
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  Prism Square,
                  <br />
                  Bachelor Road, Wardha,
                  <br />
                  Maharashtra 442001
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-12 pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Balaji Design & Constructions. All rights reserved.
          </p>
          <motion.p 
            className="text-muted-foreground text-sm"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            Built with ❤️ in Wardha
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
