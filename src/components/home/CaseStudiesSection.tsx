'use client';

import React from 'react';
import { CASE_STUDIES } from '@/data/caseStudiesData';
import { Award, CheckCircle2 } from 'lucide-react';
import styles from './CaseStudiesSection.module.css';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.headerArea}>
          <span className="badge-tag">ENTERPRISE CASE STUDIES</span>
          <h2 className={styles.sectionTitle}>Proven Results for Industry Leaders</h2>
          <p className={styles.sectionDesc}>
            See how North America’s largest automotive OEMs, bio-pharmaceutical producers, and retail leaders optimize their supply chain performance with Vanguardia.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className={styles.grid}>
          {CASE_STUDIES.map((cs) => (
            <div key={cs.id} className={styles.caseCard}>
              <div
                className={styles.cardHeaderImg}
                style={{ backgroundImage: `url(${cs.imageUrl})` }}
              >
                <div className={styles.cardHeaderImgOverlay} />
                <span className={styles.industryTag}>{cs.clientIndustry}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.title}>{cs.title}</h3>

                {/* Key Results */}
                <div className={styles.resultsBox}>
                  {cs.results.map((res) => (
                    <div key={res.metric} className={styles.resultRow}>
                      <span className={styles.resultMetric}>{res.metric}</span>
                      <span className={styles.resultDesc}>{res.description}</span>
                    </div>
                  ))}
                </div>

                {/* Client Quote */}
                <div className={styles.quoteBlock}>
                  "{cs.quote.text}"
                  <span className={styles.authorText}>
                    — {cs.quote.author}, {cs.quote.title} ({cs.quote.company})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
