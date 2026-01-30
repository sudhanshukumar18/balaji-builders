import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeInUp } from '@/components/ui/motion';
import projectResidential1 from '@/assets/project-residential-1.png';
import projectCommercial1 from '@/assets/project-commercial-1.png';
import projectResidential2 from '@/assets/project-residential-2.png';
const projects = [{
  id: 1,
  title: 'Planning',
  category: 'Residential',
  image: projectResidential1
}, {
  id: 2,
  title: 'Exterior design',
  category: 'Residential',
  image: projectCommercial1
}, {
  id: 3,
  title: 'Interior design',
  category: 'Residential',
  image: projectResidential2
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};
const ProjectsSection = () => {
  return null;
};
export default ProjectsSection;