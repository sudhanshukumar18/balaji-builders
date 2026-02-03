import React, { useState, useEffect } from 'react';
import { FaCouch, FaBed, FaUtensils, FaBath, FaDoorOpen } from 'react-icons/fa';

interface Option {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface InteractiveSelectorProps {
  options?: Option[];
  title?: string;
  subtitle?: string;
}

const defaultOptions: Option[] = [
  {
    title: "Living Room",
    description: "Modern comfort & elegance",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    icon: <FaCouch className="w-5 h-5" />
  },
  {
    title: "Bedroom",
    description: "Serene & restful spaces",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    icon: <FaBed className="w-5 h-5" />
  },
  {
    title: "Kitchen",
    description: "Functional & stylish design",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    icon: <FaUtensils className="w-5 h-5" />
  },
  {
    title: "Bathroom",
    description: "Spa-like luxury retreats",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    icon: <FaBath className="w-5 h-5" />
  },
  {
    title: "Entrance",
    description: "Grand first impressions",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    icon: <FaDoorOpen className="w-5 h-5" />
  }
];

const InteractiveSelector = ({ 
  options = defaultOptions,
  title = "Interior Concepts",
  subtitle = "Explore our thoughtfully designed interior spaces"
}: InteractiveSelectorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [options]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-2 animate-fadeInTop">
          Interior Design
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-foreground animate-fadeInTop delay-300">
          {title}
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto animate-fadeInTop delay-600">
          {subtitle}
        </p>
      </div>

      {/* Options Container */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-3 h-auto md:h-[500px]">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden cursor-pointer
              transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
              rounded-2xl
              ${activeIndex === index 
                ? 'flex-[4] md:flex-[5]' 
                : 'flex-1 hover:flex-[1.5]'
              }
              ${animatedOptions.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[60px]'}
              min-h-[80px] md:min-h-0
            `}
            style={{
              transitionDelay: animatedOptions.includes(index) ? '0ms' : `${index * 180}ms`,
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div 
              className={`
                absolute bottom-0 left-0 w-full h-3/4
                transition-opacity duration-500
                ${activeIndex === index ? 'opacity-100' : 'opacity-60'}
              `}
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)'
              }}
            />
            
            {/* Background Image */}
            <img
              src={option.image}
              alt={option.title}
              className={`
                absolute inset-0 w-full h-full object-cover
                transition-all duration-700
                ${activeIndex === index ? 'scale-100 brightness-90' : 'scale-110 brightness-50'}
              `}
            />
            
            {/* Label with icon and info */}
            <div 
              className={`
                absolute bottom-0 left-0 right-0 p-4 md:p-6
                transition-all duration-500
                ${activeIndex === index ? 'opacity-100' : 'opacity-80'}
              `}
            >
              <div 
                className={`
                  flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full
                  bg-primary/20 backdrop-blur-sm border border-primary/30
                  mb-3 transition-all duration-500
                  ${activeIndex === index ? 'scale-100' : 'scale-90'}
                `}
              >
                <span className="text-primary">{option.icon}</span>
              </div>
              
              <div className={`
                transition-all duration-500
                ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'}
              `}>
                <h3 className="text-white font-display text-lg md:text-xl mb-1">
                  {option.title}
                </h3>
                <p className={`
                  text-white/70 text-sm
                  transition-all duration-500 overflow-hidden
                  ${activeIndex === index ? 'max-h-20 opacity-100' : 'max-h-0 md:max-h-20 opacity-0 md:opacity-100'}
                `}>
                  {option.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom animations */}
      <style>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
