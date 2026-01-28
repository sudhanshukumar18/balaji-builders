import { Link } from 'react-router-dom';
import { Home, Building2, Paintbrush, Ruler, KeyRound, Compass, PenTool } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Custom homes, villas, and apartments',
    slug: 'residential-construction',
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Office buildings and retail spaces',
    slug: 'commercial-construction',
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description: 'Transform your spaces beautifully',
    slug: 'interior-design',
  },
  {
    icon: Ruler,
    title: 'Design & Planning',
    description: 'Comprehensive architectural planning',
    slug: 'design-planning',
  },
  {
    icon: KeyRound,
    title: 'Turnkey Project',
    description: 'Complete end-to-end delivery',
    slug: 'turnkey-project',
  },
  {
    icon: Compass,
    title: 'Structural Design',
    description: 'Expert structural engineering',
    slug: 'structural-design',
  },
  {
    icon: PenTool,
    title: 'Architectural Design',
    description: 'Creative architectural solutions',
    slug: 'architectural-design',
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  return (
    <div
      className={`
        absolute top-full left-0 right-0 w-full
        bg-background/98 backdrop-blur-xl
        border-b border-border/50
        shadow-2xl shadow-black/20
        transition-all duration-300 ease-in-out
        ${isOpen 
          ? 'opacity-100 translate-y-0 visible pointer-events-auto' 
          : 'opacity-0 -translate-y-3 invisible pointer-events-none'
        }
      `}
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6 pb-4 border-b border-border/30">
          <h3 className="text-primary font-medium text-sm uppercase tracking-[0.2em]">
            Our Services
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Comprehensive construction and design solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services#${service.slug}`}
              onClick={onClose}
              className="group flex items-start gap-3 p-4 rounded-lg 
                         bg-transparent hover:bg-primary/5
                         border border-transparent hover:border-primary/20
                         transition-all duration-200 ease-out"
              style={{
                transitionDelay: isOpen ? `${index * 30}ms` : '0ms',
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center 
                              group-hover:bg-primary group-hover:scale-105
                              transition-all duration-200 flex-shrink-0">
                <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="min-w-0">
                <h4 className="font-medium text-sm text-primary-foreground group-hover:text-primary transition-colors truncate">
                  {service.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between">
          <p className="text-muted-foreground text-sm">
            Can't find what you're looking for?
          </p>
          <Link
            to="/contact"
            onClick={onClose}
            className="text-primary text-sm font-medium hover:underline underline-offset-4"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
