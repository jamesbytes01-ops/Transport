import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Corporate Data Governance',
  description: 'Privacy Policy and corporate data protection guidelines for Vanguardia Transport Group enterprise shippers and digital platform users.',
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Privacy Policy Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #070C19 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Privacy Policy</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">LEGAL & GOVERNANCE</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>Effective Date: January 1, 2026</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>
            Privacy Policy & Data Security
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem' }}>
            Corporate data protection and privacy governance guidelines for GetDigiFort (DMB Transit Inc.) enterprise shippers.
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <span>ISO 9001:2015 Standards</span>
            </div>
            <div className="header-stat-pill">
              <span>C-TPAT Tier 2 Validated</span>
            </div>
            <div className="header-stat-pill">
              <span>Zero Third-Party Broker Monetization</span>
            </div>
          </div>
        </div>
      </section>

      <article className="container" style={{ maxWidth: '840px', marginTop: '3rem' }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '3rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Vanguardia Logistics & Freight Systems Inc. ("Vanguardia") collects information necessary to execute commercial freight transportation, issue rate quotations, maintain carrier safety records, and optimize supply chain operations. This includes corporate contact details, pickup/delivery facility addresses, cargo specifications, and electronic bill of lading (eBOL) telemetry data.
          </p>

          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>2. Telematics & Geolocation Data</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Our trailing assets and Class-8 power units feature satellite GPS and IoT environmental telematics. Geolocation data collected during transit is strictly utilized for load milestone tracking, geofenced facility arrival notifications, cold chain temperature auditing, and security risk management.
          </p>

          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>3. Data Protection & Enterprise Security</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We implement ISO 9001:2015 and C-TPAT Tier 2 security standards to protect customer shipping data. Vanguardia does not sell, lease, or monetize customer shipper information to third-party data brokers.
          </p>

          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>4. Contact Data Governance Officer</h2>
          <p>
            For privacy inquiries or data governance requests, please contact our legal team at <a href="mailto:privacy@vanguardiafreight.com" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>privacy@vanguardiafreight.com</a>.
          </p>
        </div>
      </article>
    </div>
  );
}
