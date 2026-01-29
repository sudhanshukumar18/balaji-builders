import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeInUp } from '@/components/ui/motion';
import projectResidential1 from '@/assets/project-residential-1.png';
import projectCommercial1 from '@/assets/project-commercial-1.png';
import projectResidential2 from '@/assets/project-residential-2.png';
import projectBungalow from '@/assets/project-bungalow.jpg';
const projects = [{
  id: 1,
  title: 'Planning',
  category: 'Residential',
  image: projectResidential1,
  slug: 'modern-villa-residence'
}, {
  id: 2,
  title: 'Modern G+1, 4 BHK Bungalow',
  category: 'Residential',
  image: projectCommercial1,
  slug: 'wardha-business-center'
}, {
  id: 3,
  title: 'Modern 3 BHK House',
  category: 'Residential',
  image: projectResidential2,
  slug: 'sunrise-apartments'
}, {
  id: 4,
  title: 'Heritage Bungalow',
  category: 'Residential',
  image: projectBungalow,
  slug: 'heritage-bungalow'
}];
const ProjectsSection = () => {
  return;
};
export default ProjectsSection;