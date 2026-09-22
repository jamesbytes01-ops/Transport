'use client';

import React from 'react';
import Link from 'next/link';
import { FLEET_DATA } from '@/data/fleetData';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import styles from './FleetShowcase.module.css';

export const FleetShowcase: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.headerArea}>
          <div className={styles.titleBox}>
            <span className="badge-tag-accent">ASSET & FLEET CAPABILITIES</span>
            <h2 className={styles.sectionTitle}>Modern Asset Fleet & Satellite Telematics</h2>
            <p className={styles.sectionDesc}>
              We own, operate, and maintain over 450 Class-8 power units and 600 trailing assets, guaranteeing capacity without reliance on third-party brokerage spot markets.
            </p>
          </div>

          <Link href="/fleet" className="btn btn-outline-white">
            <span>Explore All Fleet Specs</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Fleet Cards Grid */}
        <div className={styles.fleetGrid}>
          {FLEET_DATA.slice(0, 3).map((asset) => (
            <div key={asset.id} className={styles.fleetCard}>
              <div
                className={styles.cardImgArea}
                style={{ backgroundImage: `url(${asset.imageUrl})` }}
              >
                <span className={styles.cardCategoryBadge}>{asset.category}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{asset.name}</h3>

                <div className={styles.specPills}>
                  <span className={styles.specPill}>Max Payload: {asset.maxPayloadLbs.toLocaleString()} Lbs</span>
                  <span className={styles.specPill}>{asset.totalActiveUnits} Active Units</span>
                  {asset.temperatureRange && (
                    <span className={styles.specPill} style={{ color: 'var(--color-accent)' }}>
                      {asset.temperatureRange.split(' ')[0]}
                    </span>
                  )}
                </div>

                <div>
                  <div className={styles.telematicsTitle}>Integrated Telematics</div>
                  <ul className={styles.telematicsList}>
                    {asset.telematics.slice(0, 3).map((t) => (
                      <li key={t} className={styles.telematicsItem}>
                        <CheckCircle2 size={14} />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
