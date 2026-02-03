import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState } from 'react';

interface ImageCardProps {
  image: string;
  alt: string;
  aspectRatio?: string;
  category?: string;
}

const ImageCard = ({ image, alt, aspectRatio = "4/3", category }: ImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className={`aspect-[${aspectRatio}] rounded-xl overflow-hidden cursor-pointer bg-muted relative group`}
      style={{ 
        rotateX: springRotateX, 
        rotateY: springRotateY, 
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        opacity: { duration: 0.5 },
        y: { duration: 0.5 }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image with brightness effect */}
      <motion.img 
        src={image} 
        alt={alt} 
        className="w-full h-full object-cover"
        animate={{ 
          scale: isHovered ? 1.08 : 1,
          filter: isHovered ? "brightness(1.1)" : "brightness(1)"
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        loading="lazy"
      />
      
      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Category badge */}
      {category && (
        <motion.div
          className="absolute bottom-4 left-4 right-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 20 
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {category}
          </span>
        </motion.div>
      )}
      
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          x: isHovered ? "100%" : "-100%"
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default ImageCard;
