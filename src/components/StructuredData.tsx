import { Helmet } from 'react-helmet-async';

// LocalBusiness Schema for Homepage
export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://balajidesign.com/#business',
    name: 'Balaji Design & Constructions',
    alternateName: 'Balaji Constructions Wardha',
    description: 'Professional construction company in Wardha, Maharashtra offering residential and commercial construction, design services with 6+ years of experience.',
    url: 'https://balajidesign.com',
    telephone: '+918624838652',
    email: 'contact@balajidesign.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mhada Colony, Arvi Naka, Sindi Meghe',
      addressLocality: 'Wardha',
      addressRegion: 'Maharashtra',
      postalCode: '442001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.7387,
      longitude: 78.6030,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '6',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '₹₹₹',
    image: 'https://balajidesign.com/og-image.jpg',
    sameAs: [
      'https://www.facebook.com/balajidesignconstructions',
      'https://www.instagram.com/balajidesignconstructions',
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 20.7387,
        longitude: 78.6030,
      },
      geoRadius: '50000',
    },
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'Wardha District, Maharashtra',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Service Schema
interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
}

export const ServiceSchema = ({ serviceName, serviceDescription }: ServiceSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Balaji Design & Constructions',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Wardha',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Wardha',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://balajidesign.com${item.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSchema = ({ faqs }: { faqs: FAQItem[] }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Organization Schema
export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Balaji Design & Constructions',
    url: 'https://balajidesign.com',
    logo: 'https://balajidesign.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-86248-38652',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
