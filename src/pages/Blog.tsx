import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';
import projectResidential1 from '@/assets/project-residential-1.jpg';
import projectCommercial1 from '@/assets/project-commercial-1.jpg';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';

const blogPosts = [
  {
    id: 1,
    title: '5 Essential Tips for Planning Your Dream Home',
    category: 'Construction Tips',
    date: 'January 5, 2026',
    excerpt: 'Planning a new home? Here are five essential tips to ensure your construction project goes smoothly from start to finish.',
    image: projectResidential1,
    slug: 'tips-for-planning-dream-home',
  },
  {
    id: 2,
    title: 'Modern Design Trends in Commercial Construction',
    category: 'Design Trends',
    date: 'December 28, 2025',
    excerpt: 'Explore the latest trends in commercial building design that are shaping the future of workspaces.',
    image: projectCommercial1,
    slug: 'modern-design-trends-commercial',
  },
  {
    id: 3,
    title: 'Choosing the Right Materials for Your Project',
    category: 'Materials',
    date: 'December 15, 2025',
    excerpt: 'A comprehensive guide to selecting the best construction materials for durability and cost-effectiveness.',
    image: heroImage,
    slug: 'choosing-right-materials',
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Construction Blog - Tips & Industry Insights"
        description="Read construction tips, design trends, and industry insights from Wardha's top builders. Expert advice on home building, materials, and project planning."
        canonical="/blog"
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }]} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Our Blog
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
              Industry Insights & Updates
            </h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest construction tips, design trends, and industry news.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-cream overflow-hidden card-hover group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-primary text-sm font-medium uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-sm">{post.date}</span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all"
                  >
                    Read Article
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
