import React from 'react';

export const metadata = {
  title: 'Terms of Carriage | Motor Carrier Tariff Rules',
  description: 'Terms of Carriage, motor carrier tariff rules, accessorial fee schedules, and freight liability terms for Vanguardia Transport Group.',
};

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Terms of Carriage Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #070C19 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Terms of Carriage</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">CONTRACT TARIFF & RULES</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>DMB Transit Inc. Tariff Series DMB-100</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>
            Terms of Carriage & Service Tariff Rules
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem' }}>
            Motor carrier tariff rules, accessorial fee schedules, and freight liability terms governing GetDigiFort (DMB Transit Inc.) operations.
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <span>Tariff Series DMB-100</span>
            </div>
            <div className="header-stat-pill">
              <span>USDOT #3849120 | MC-892104</span>
            </div>
            <div className="header-stat-pill">
              <span>Carmack Amendment (49 U.S.C. § 14706)</span>
            </div>
          </div>
        </div>
      </section>

      <article className="container" style={{ maxWidth: '840px', marginTop: '3rem' }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '3rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>1. Applicability & Carrier Operating Authority</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            All surface transportation, full truckload (FTL), temperature-controlled cold chain, and specialized heavy haul services provided by Vanguardia Logistics & Freight Systems Inc. (USDOT #3849120, MC-892104) are subject to these Terms of Carriage and standard bill of lading contracts.
          </p>

          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>2. Detention & Facility Dwell Time</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Free time for loading and unloading is two (2) hours total per facility. Detention beyond free time is assessed at standard tariff rates of $75.00 per hour, calculated in 15-minute increments.
          </p>

          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>3. Cold Chain Temperature Protocols</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Shippers requesting temperature-controlled transportation must specify target temperature set-points in writing on the bill of lading. Pre-cooling of trailer units to specified temperatures is performed in accordance with GDP and FSMA regulations.
          </p>

          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>4. Carrier Liability Limits</h2>
          <p>
            Carrier liability for loss, damage, or delay is governed by Carmack Amendment provisions (49 U.S.C. § 14706) up to $100,000 per shipment unless excess valuation coverage is requested and declared in writing prior to dispatch.
          </p>
        </div>
      </article>
    </div>
  );
}
