import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  noindex?: boolean;
}

const SEOHead = ({
  title,
  description,
  canonical,
  type = 'website',
  image = '/og-image.png',
  noindex = false,
}: SEOHeadProps) => {
  const siteUrl = 'https://balajidesign.com';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullTitle = `${title} | Balaji Design & Constructions Wardha`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="Balaji Design & Constructions" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Wardha" />
      <meta name="geo.position" content="20.7387;78.6030" />
      <meta name="ICBM" content="20.7387, 78.6030" />
    </Helmet>
  );
};

export default SEOHead;
