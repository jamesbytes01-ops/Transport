'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  Calculator, 
  CheckCircle2, 
  Truck, 
  Thermometer, 
  ShieldAlert 
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
        <div className={styles.heroContent}>
          {/* Executive Trust Badge */}
          <div>
            <span className={styles.badge}>
              <ShieldCheck size={16} />
              <span>Asset-Based Surface Carrier • USDOT 3849120 • 99.4% On-Time SLA</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className={styles.title}>
            Moving Enterprise Supply Chains Forward, <span className="text-gradient-subtle">Reliably.</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Asset-backed surface transportation, GDP cold chain, and high-volume FTL freight solutions powered by 450+ dedicated Class-8 power units and continuous satellite telematics.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className={styles.ctaBar}>
            <button onClick={onOpenQuoteModal} className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
              <span>Request an Enterprise Quote</span>
              <ArrowRight size={18} />
            </button>
            <a href={`tel:${COMPANY_INFO.phone.dispatch}`} className="btn btn-outline-white" style={{ padding: '1rem 1.75rem', fontSize: '1.05rem' }}>
              <PhoneCall size={18} />
              <span>24/7 Central Dispatch: {COMPANY_INFO.phone.dispatch}</span>
            </a>
          </div>

          {/* Quick Rate Estimator Bar */}
          <div className={styles.quickEstimatorBar}>
            <div className={styles.estimatorTitle}>
              <Calculator size={16} />
              <span>Quick Freight Lane Estimator</span>
            </div>

            <form onSubmit={handleQuickEstimateSubmit} className={styles.estimatorForm}>
              <input
                type="text"
                placeholder="Origin Zip (e.g. 60666)"
                className={styles.heroInput}
                value={quickOrigin}
                onChange={(e) => setQuickOrigin(e.target.value)}
              />

              <input
                type="text"
                placeholder="Destination Zip (e.g. 75201)"
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

              <button type="submit" className="btn btn-primary" style={{ height: '100%' }}>
                <span>Calculate Rate</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Live Stat Counter Bar */}
          <div className={styles.statTickerBar}>
            {COMPANY_INFO.stats.slice(0, 4).map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statVal}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
