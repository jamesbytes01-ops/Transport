import React from 'react';

export const metadata = {
  title: 'Claims & Cargo Insurance Policy',
  description: 'Cargo claims process, loss notice protocols, and $10M primary cargo liability insurance policy guidelines.',
};

export default function ClaimsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Cargo Claims Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #070C19 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Cargo Claims & Insurance</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">RISK MANAGEMENT & CLAIMS</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>$10,000,000 Primary Cargo Coverage</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>
            Cargo Claims & Insurance Policy
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem' }}>
            Cargo claims process, loss notice protocols, and liability insurance guidelines for GetDigiFort (DMB Transit Inc.).
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <span>$10,000,000 Primary Cargo Policy</span>
            </div>
            <div className="header-stat-pill">
              <span>$10,000,000 Auto Liability Coverage</span>
            </div>
            <div className="header-stat-pill">
              <span>claims@getdigifort.com</span>
            </div>
          </div>
        </div>
      </section>

      <article className="container" style={{ maxWidth: '840px', marginTop: '3rem' }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '3rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>1. Cargo Claim Filing Timeline</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Under 49 U.S.C. § 14706, notice of cargo loss or damage must be filed in writing with Vanguardia within nine (9) months from the date of delivery. For concealed damage, written notice must be submitted within five (5) business days of delivery.
          </p>

          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>2. Required Documentation</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            All claims submissions must include: (a) Signed Delivery Receipt showing exceptions noted, (b) Original vendor invoice showing net product cost, (c) Itemized statement of loss/damage calculation, and (d) Inspection photos.
          </p>

          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>3. Submit a Cargo Claim Online</h2>
          <p>
            Submit claim documents directly to our Risk Management Department at <a href="mailto:claims@vanguardiafreight.com" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>claims@vanguardiafreight.com</a>.
          </p>
        </div>
      </article>
    </div>
  );
}
