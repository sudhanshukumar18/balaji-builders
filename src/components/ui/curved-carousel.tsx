import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
interface CurvedCarouselProps {
  images: string[];
  className?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}
export default function CurvedCarousel({
  images,
  className,
  aspectRatio = 'portrait'
}: CurvedCarouselProps) {
  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square'
  };
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const visibleCount = 7;
  const cardWidth = 280;
  const swipeThreshold = 50; // Minimum swipe distance to trigger navigation

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);
    const xOffset = diff * (cardWidth * 0.6);
    const yOffset = Math.pow(absDiff, 1.8) * 25;
    const scale = Math.max(0.5, 1 - absDiff * 0.12);
    const rotateY = diff * -8;
    const zIndex = 50 - absDiff;
    const opacity = Math.max(0.3, 1 - absDiff * 0.2);
    return {
      x: xOffset,
      y: yOffset,
      scale,
      rotateY,
      zIndex,
      opacity
    };
  };
  const scrollTo = (index: number) => {
    const newIndex = Math.max(0, Math.min(images.length - 1, index));
    setActiveIndex(newIndex);
  };
  const scrollPrev = () => scrollTo(activeIndex - 1);
  const scrollNext = () => scrollTo(activeIndex + 1);

  // Handle drag/swipe
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const {
      offset,
      velocity
    } = info;

    // Use velocity for quick swipes, offset for slow drags
    const swipe = offset.x + velocity.x * 0.5;
    if (swipe < -swipeThreshold) {
      scrollNext();
    } else if (swipe > swipeThreshold) {
      scrollPrev();
    }
  };
  const handleDragStart = () => {
    setIsDragging(true);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') scrollPrev();
      if (e.key === 'ArrowRight') scrollNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);
  return <div className={cn('relative w-full select-none', className)}>
      {/* Carousel container with swipe */}
      <motion.div ref={containerRef} className="relative h-[450px] md:h-[500px] flex items-end justify-center overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y" style={{
      perspective: '1200px'
    }} drag="x" dragConstraints={{
      left: 0,
      right: 0
    }} dragElastic={0.1} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        {/* Cards */}
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {images.map((image, index) => {
          const style = getCardStyle(index);
          const isActive = index === activeIndex;

          // Only render cards within visible range
          if (Math.abs(index - activeIndex) > Math.floor(visibleCount / 2) + 1) {
            return null;
          }
          return <motion.div key={index} className="absolute cursor-pointer pointer-events-auto" style={{
            width: cardWidth,
            zIndex: style.zIndex
          }} animate={{
            x: style.x,
            y: style.y,
            scale: style.scale,
            rotateY: style.rotateY,
            opacity: style.opacity
          }} transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }} onPointerUp={() => !isDragging && scrollTo(index)} whileHover={isActive ? {
            scale: style.scale * 1.05
          } : {}}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl transition-shadow duration-300">
                  <div className={cn(aspectClasses[aspectRatio], "bg-muted")}>
                    <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  
                  {/* Gradient overlay for non-active cards */}
                  {!isActive && <div className="absolute inset-0 bg-charcoal/30" />}
                </div>
              </motion.div>;
        })}
        </div>
        
        {/* Swipe hint for mobile */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground/60 text-xs md:hidden">
          <ChevronLeft className="w-3 h-3 animate-pulse" />
          <span>Swipe to navigate</span>
          <ChevronRight className="w-3 h-3 animate-pulse" />
        </div>
      </motion.div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button variant="outline" size="icon" onClick={scrollPrev} disabled={activeIndex === 0} className="h-12 w-12 rounded-full border-2 border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-30">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>

        {/* Dot indicators */}
        

        <Button variant="outline" size="icon" onClick={scrollNext} disabled={activeIndex === images.length - 1} className="h-12 w-12 rounded-full border-2 border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-30">
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Image counter */}
      <div className="text-center mt-4">
        
      </div>
    </div>;
}