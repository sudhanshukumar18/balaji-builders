import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import logoImage from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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
    setIsMegaMenuOpen(false);
  }, [location]);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services', hasMegaMenu: true },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
            : 'bg-background/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={logoImage} 
                  alt="Balaji Design & Constructions Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display text-lg leading-tight tracking-wide text-primary-foreground">
                  Balaji Design
                </h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-1">
                  & Constructions
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.hasMegaMenu ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleMegaMenuEnter}
                    onMouseLeave={handleMegaMenuLeave}
                  >
                    <Link
                      to={link.path}
                      className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary flex items-center gap-1 ${
                        location.pathname === link.path || isMegaMenuOpen
                          ? 'text-primary'
                          : 'text-primary-foreground/80'
                      }`}
                    >
                      {link.name}
                      <ChevronDown 
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isMegaMenuOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-primary-foreground/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+918624838652"
                className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 86248 38652</span>
              </a>

              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-primary-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <div
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="lg:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background border-l border-border z-40 shadow-xl">
            <nav className="flex flex-col p-6 pt-24 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xl font-display py-4 border-b border-border transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-primary-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="tel:+918624838652"
                className="flex items-center gap-2 text-lg font-medium py-3 mt-4 text-primary-foreground"
              >
                <Phone className="w-5 h-5 text-primary" />
                +91 86248 38652
              </a>

              <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
