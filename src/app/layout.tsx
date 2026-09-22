import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { generateOrganizationSchema } from '@/lib/seo';
import { COMPANY_INFO } from '@/data/companyData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} | Enterprise Surface Transport & Freight Logistics`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: COMPANY_INFO.shortDesc,
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.svg',
    apple: '/icon.svg',
  },
  keywords: [
    'Freight Logistics',
    'Full Truckload Transport',
    'Refrigerated Cold Chain Carrier',
    'Heavy Haul Logistics',
    'Asset-Based Carrier',
    'USDOT 3849120',
    'Intermodal Rail Freight',
    'Contract Warehousing',
  ],
  authors: [{ name: COMPANY_INFO.legalName }],
  creator: COMPANY_INFO.legalName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vanguardiafreight.com',
    title: `${COMPANY_INFO.name} | Precision Freight & Enterprise Logistics`,
    description: COMPANY_INFO.shortDesc,
    siteName: COMPANY_INFO.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateOrganizationSchema();

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
