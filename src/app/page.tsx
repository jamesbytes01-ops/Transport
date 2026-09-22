'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/home/Hero';
import { ServiceGrid } from '@/components/home/ServiceGrid';
import { FleetShowcase } from '@/components/home/FleetShowcase';
import { ResearchPreview } from '@/components/home/ResearchPreview';
import { CaseStudiesSection } from '@/components/home/CaseStudiesSection';
import { TrustSection } from '@/components/home/TrustSection';
import { QuoteModal } from '@/components/ui/QuoteModal';

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => setIsQuoteOpen(true)} />

      {/* Core Services Spotlight */}
      <ServiceGrid onOpenQuoteModal={() => setIsQuoteOpen(true)} />

      {/* Asset Fleet & Telematics Showcase */}
      <FleetShowcase />

      {/* Research & Market Intelligence */}
      <ResearchPreview />

      {/* Enterprise Case Studies & Metrics */}
      <CaseStudiesSection />

      {/* Trust & Safety Certifications */}
      <TrustSection />

      {/* Page-level Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
