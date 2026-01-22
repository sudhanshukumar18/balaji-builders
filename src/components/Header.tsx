import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Sparkles } from 'lucide-react';
import logoImage from '@/assets/logo.png';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Magnetic effect hook
const useMagnetic = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, springX, springY, handleMouseMove, handleMouseLeave };
};

// Animated nav link component
const AnimatedNavLink = ({ 
  link, 
  isActive, 
  index 
}: { 
  link: { name: string; path: string }; 
  isActive: boolean; 
  index: number;
}) => {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } = useMagnetic();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={link.path}
        className={`relative text-sm font-medium tracking-wide transition-all duration-300 group nav-link-gradient ${
          isActive ? 'text-primary' : 'text-primary-foreground'
        }`}
      >
        {link.name}
        {/* Animated gradient underline */}
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary via-gold to-primary"
          initial={{ width: isActive ? '100%' : '0%', opacity: isActive ? 1 : 0 }}
          whileHover={{ width: '100%', opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundSize: '200% 100%' }}
        />
        {/* Active glow indicator */}
        {isActive && (
          <motion.span
            className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-primary"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ transform: 'translateX(-50%)' }}
          />
        )}
      </Link>
    </motion.div>
  );
};

// Animated hamburger icon
const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="w-6 h-6 relative flex items-center justify-center">
      <motion.span
        className="absolute w-5 h-0.5 bg-primary-foreground rounded-full"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -4,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute w-5 h-0.5 bg-primary-foreground rounded-full"
        animate={{
          opacity: isOpen ? 0 : 1,
          x: isOpen ? 10 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute w-5 h-0.5 bg-primary-foreground rounded-full"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 4,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, type: 'spring' as const, stiffness: 100 },
    }),
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'header-gradient-scrolled backdrop-blur-xl shadow-lg'
            : 'header-gradient'
        } ${isScrolled ? 'animate-none' : 'animate-gradient-shift'}`}
      >
        {/* Animated bottom border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] animated-border-gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0.5 }}
          style={{ animation: 'border-flow 3s linear infinite' }}
        />

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="flex items-center justify-between"
            animate={{ height: isScrolled ? 64 : 80 }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo with gradient border and glow */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                className="relative w-10 h-10 rounded flex items-center justify-center logo-glow shimmer-effect overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: isScrolled ? 0.9 : 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <img 
                  src={logoImage} 
                  alt="Balaji Design & Constructions Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </motion.div>
              <motion.div
                className="hidden sm:block"
                animate={{ opacity: isScrolled ? 0.9 : 1 }}
              >
                <h1 className="font-display text-lg leading-tight tracking-wide text-primary-foreground group-hover:text-gold transition-colors duration-300">
                  Balaji Design
                </h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60 -mt-1">
                  & Constructions
                </p>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <AnimatedNavLink
                  key={link.name}
                  link={link}
                  isActive={location.pathname === link.path}
                  index={index}
                />
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              className="hidden md:flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.a
                href="tel:+918624838652"
                className="flex items-center gap-2 text-sm font-medium text-primary-foreground hover:text-gold transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 0, 0] }}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="w-4 h-4" />
                </motion.div>
                <span className="group-hover:underline">+91 86248 38652</span>
              </motion.a>

              {/* CTA Button with animated gradient border */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded bg-primary blur-lg"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Button
                  asChild
                  className="relative btn-gradient-border rounded-none overflow-hidden group"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                    Contact Us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 relative z-50"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatedMenuIcon isOpen={isMobileMenuOpen} />
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel with gradient background */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-sm mobile-menu-gradient z-40 shadow-2xl overflow-hidden"
            >
              {/* Floating particles in mobile menu */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-primary/30"
                    initial={{
                      x: Math.random() * 300,
                      y: Math.random() * 600,
                    }}
                    animate={{
                      y: [null, Math.random() * -200],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              <nav className="flex flex-col p-6 pt-24 gap-2 relative z-10">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-display py-3 border-b border-primary-foreground/20 transition-colors block ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : 'text-primary-foreground hover:text-gold'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.a
                  custom={navLinks.length}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  href="tel:+918624838652"
                  className="flex items-center gap-2 text-lg font-medium py-3 mt-4 text-primary-foreground"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +91 86248 38652
                </motion.a>

                <motion.div
                  custom={navLinks.length + 1}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                >
                  <Button asChild className="btn-gradient-border rounded-none mt-4 w-full">
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Contact Us
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;