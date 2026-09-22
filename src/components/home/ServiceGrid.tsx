'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/servicesData';
import { 
  Truck, 
  Thermometer, 
  ShieldAlert, 
  Layers, 
  Warehouse, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight 
} from 'lucide-react';
import styles from './ServiceGrid.module.css';

interface ServiceGridProps {
  onOpenQuoteModal: () => void;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ onOpenQuoteModal }) => {
  const [activeTabId, setActiveTabId] = useState(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeTabId) || SERVICES_DATA[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck size={18} />;
      case 'Thermometer': return <Thermometer size={18} />;
      case 'ShieldAlert': return <ShieldAlert size={18} />;
      case 'Layers': return <Layers size={18} />;
      case 'Warehouse': return <Warehouse size={18} />;
      case 'Zap': return <Zap size={18} />;
      default: return <Truck size={18} />;
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerArea}>
          <span className="badge-tag">ENTERPRISE FREIGHT SERVICES</span>
          <h2 className={styles.sectionTitle}>Engineered Surface & Supply Chain Solutions</h2>
          <p className={styles.sectionDesc}>
            From high-volume dry van corridors to zero-excursion biopharmaceutical cold chain networks, Vanguardia operates asset-backed transportation tailored for Fortune 500 shippers.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabBar}>
          {SERVICES_DATA.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setActiveTabId(srv.id)}
              className={`${styles.tabBtn} ${activeTabId === srv.id ? styles.tabBtnActive : ''}`}
            >
              {getIcon(srv.iconName)}
              <span>{srv.title.split('(')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Service Spotlight Card */}
        <div className={styles.spotlightCard}>
          {/* Left Visual Column */}
          <div
            className={styles.spotlightImageArea}
            style={{ backgroundImage: `url(${activeService.imageUrl})` }}
          >
            <div className={styles.spotlightImageOverlay} />

            <div className={styles.spotlightBadge}>
              SLA GUARANTEED CARRIER
            </div>

            <div className={styles.spotlightImgFooter}>
              <div style={{ fontSize: '0.8125rem', color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Key Operational SLA Metrics
              </div>
              <div className={styles.metricsRow}>
                {activeService.metrics.map((m) => (
                  <div key={m.label} className={styles.metricItem}>
                    <span className={styles.metricVal}>{m.value}</span>
                    <span className={styles.metricLbl}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Specifications Column */}
          <div className={styles.spotlightContent}>
            <div>
              <h3 className={styles.spotlightTitle}>{activeService.title}</h3>
              <p className={styles.spotlightDesc}>{activeService.fullDesc}</p>

              <ul className={styles.featureList}>
                {activeService.keyFeatures.map((feat) => (
                  <li key={feat} className={styles.featureItem}>
                    <CheckCircle2 size={18} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Technical Specifications */}
              <div className={styles.specsBox}>
                <div className={styles.specsTitle}>Technical Equipment Specifications</div>
                <div className={styles.specsGrid}>
                  {Object.entries(activeService.specifications).slice(0, 4).map(([k, v]) => (
                    <div key={k} className={styles.specRow}>
                      <span className={styles.specLabel}>{k}:</span>
                      <span className={styles.specValue}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Spotlight Card Footer CTAs */}
            <div className={styles.spotlightFooter}>
              <button onClick={onOpenQuoteModal} className="btn btn-primary">
                <span>Quote This Service</span>
                <ArrowRight size={16} />
              </button>
              <Link href={`/services/${activeService.slug}`} className="btn btn-outline">
                <span>View Complete Specs</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
