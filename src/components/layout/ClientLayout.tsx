'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteModal } from '@/components/ui/QuoteModal';

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};
