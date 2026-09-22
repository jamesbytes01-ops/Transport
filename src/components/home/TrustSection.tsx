'use client';

import React from 'react';
import { ShieldCheck, Award, Lock, FileCheck, CheckCircle2 } from 'lucide-react';
import styles from './TrustSection.module.css';

export const TrustSection: React.FC = () => {
  const trustSignals = [
    {
      title: 'Top-Tier DOT Safety Rating',
      desc: 'USDOT #3849120 with zero out-of-service violations. 100% compliant with Federal Motor Carrier Safety Administration (FMCSA) mandates.',
      icon: <ShieldCheck size={22} />,
    },
    {
      title: 'ISO 9001:2015 Quality System',
      desc: 'Certified Quality Management System covering load dispatch, temperature auditing, equipment maintenance, and claims resolution.',
      icon: <Award size={22} />,
    },
    {
      title: 'EPA SmartWay Transport Partner',
      desc: 'Top 1% environmental scoring with aerodynamic trailer fairings, low-rolling resistance tires, and low-idle auxiliary power units (APUs).',
      icon: <FileCheck size={22} />,
    },
    {
      title: 'C-TPAT Tier 2 & GDP Certified',
      desc: 'Validated supply chain security protocols for cross-border freight (US, Canada, Mexico) and FDA Title 21 pharmaceutical transport.',
      icon: <Lock size={22} />,
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.titleArea}>
            <span className="badge-tag-accent">COMPLIANCE & SAFETY ASSURANCE</span>
            <h2 className={styles.title}>Uncompromising Trust & Enterprise Standards</h2>
            <p className={styles.desc}>
              Vanguardia maintains rigorous safety protocols, environmental stewardship, and regulatory certifications to protect high-value enterprise cargo at every mile.
            </p>
          </div>

          <div className={styles.badgeGrid}>
            {trustSignals.map((sig) => (
              <div key={sig.title} className={styles.badgeCard}>
                <div className={styles.iconBox}>{sig.icon}</div>
                <div>
                  <h4 className={styles.badgeTitle}>{sig.title}</h4>
                  <p className={styles.badgeDesc}>{sig.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
