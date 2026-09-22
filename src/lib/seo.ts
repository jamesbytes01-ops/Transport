import { COMPANY_INFO } from '@/data/companyData';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LogisticsService',
    '@id': 'https://vanguardiafreight.com/#organization',
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: 'https://vanguardiafreight.com',
    logo: 'https://vanguardiafreight.com/images/brand-logo.png',
    description: COMPANY_INFO.shortDesc,
    email: COMPANY_INFO.email.quotes,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.headquarters.address,
      addressLocality: COMPANY_INFO.headquarters.city,
      addressRegion: COMPANY_INFO.headquarters.state,
      postalCode: COMPANY_INFO.headquarters.zip,
      addressCountry: COMPANY_INFO.headquarters.country,
    },
    areaServed: ['US', 'CA', 'MX'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Freight & Transportation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Truckload (FTL) Freight Transportation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Temperature-Controlled Cold Chain Logistics',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Heavy Haul & Specialized Over-Dimensional Logistics',
          },
        },
      ],
    },
    knowsAbout: [
      'Truckload Freight',
      'Cold Chain Logistics',
      'Intermodal Freight Rail',
      'Supply Chain Management',
      'Contract Warehousing',
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: `https://vanguardiafreight.com${it.item}`,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  excerpt: string;
  publishDate: string;
  slug: string;
  authorName: string;
  imageUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishDate,
    url: `https://vanguardiafreight.com/blog/${article.slug}`,
    image: article.imageUrl,
    author: {
      '@type': 'Person',
      name: article.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://vanguardiafreight.com/images/brand-logo.png',
      },
    },
  };
}
