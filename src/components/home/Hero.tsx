'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  Calculator 
} from 'lucide-react';
import styles from './Hero.module.css';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [quickOrigin, setQuickOrigin] = useState('');
  const [quickDest, setQuickDest] = useState('');
  const [quickService, setQuickService] = useState('full-truckload-ftl');

  const handleQuickEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenQuoteModal();
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBgOverlay} />

      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Column: Brand Story & CTAs */}
          <div className={styles.heroLeft}>
            <div>
              <span className={styles.badge}>
                <ShieldCheck size={15} />
                <span>Asset Carrier • USDOT 3849120 • 99.4% On-Time SLA</span>
              </span>
            </div>

            <h1 className={styles.title}>
              Moving Enterprise Supply Chains Forward, <span className="text-gradient-subtle">Reliably.</span>
            </h1>

            <p className={styles.subtitle}>
              Asset-backed surface transportation, GDP cold chain, and high-volume FTL freight solutions powered by 450+ dedicated Class-8 power units and continuous satellite telematics.
            </p>

            <div className={styles.ctaBar}>
              <button onClick={onOpenQuoteModal} className="btn btn-primary" style={{ padding: '0.85rem 1.65rem' }}>
                <span>Request an Enterprise Quote</span>
                <ArrowRight size={17} />
              </button>
              <Link href="/contact" className="btn btn-outline-white" style={{ padding: '0.85rem 1.45rem' }}>
                <Mail size={17} />
                <span>Contact Dispatch</span>
              </Link>
            </div>

            {/* Integrated Stats Row */}
            <div className={styles.statTickerBar}>
              {COMPANY_INFO.stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statVal}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sleek Rate Estimator Card */}
          <div className={styles.quickEstimatorCard}>
            <div>
              <div className={styles.estimatorTitle}>
                <Calculator size={18} />
                <span>Quick Freight Lane Estimator</span>
              </div>
              <p className={styles.estimatorSub}>Instant contract rate estimates & equipment allocation</p>
            </div>

            <form onSubmit={handleQuickEstimateSubmit} className={styles.estimatorForm}>
              <input
                type="text"
                placeholder="Origin Zip Code (e.g. 60666)"
                className={styles.heroInput}
                value={quickOrigin}
                onChange={(e) => setQuickOrigin(e.target.value)}
              />

              <input
                type="text"
                placeholder="Destination Zip Code (e.g. 75201)"
                className={styles.heroInput}
                value={quickDest}
                onChange={(e) => setQuickDest(e.target.value)}
              />

              <select
                className={styles.heroSelect}
                value={quickService}
                onChange={(e) => setQuickService(e.target.value)}
              >
                <option value="full-truckload-ftl">53’ Dry Van Full Truckload (FTL)</option>
                <option value="temperature-controlled-cold-chain">Refrigerated Cold Chain (-20°F to 70°F)</option>
                <option value="heavy-haul-specialized">Heavy Haul & Over-Dimensional (RGN)</option>
                <option value="expedited-critical-freight">Expedited Emergency Hot-Shot</option>
              </select>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem' }}>
                <span>Calculate Instant Rate</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
