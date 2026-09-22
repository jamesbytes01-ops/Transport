import React from 'react';
import { COMPANY_INFO } from '@/data/companyData';
import { TERMINAL_LOCATIONS } from '@/data/terminalsData';
import { MapPin, Mail, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Contact Dispatch & Terminal Directory',
  description: 'Reach Vanguardia Central Dispatch 24/7/365. Access regional terminal locations, headquarters address, and shipper support.',
};

export default function ContactPage() {
  const faqs = [
    {
      q: 'What is Vanguardia’s emergency dispatch response SLA?',
      a: 'Central Dispatch operates 24/7/365. For expedited or time-critical shipments, dedicated power units can be dispatched within 30 minutes of booking confirmation.',
    },
    {
      q: 'How does Vanguardia handle cold chain temperature logging?',
      a: 'Every reefer trailer features satellite telematics streaming supply air, return air, and internal zone temperatures every 60 seconds. Shippers receive automated PDF excursion logs upon delivery.',
    },
    {
      q: 'Can Vanguardia manage dedicated customer fleets?',
      a: 'Yes. Vanguardia offers Dedicated Fleet Solutions where we assign customized Class-8 power units, trailing assets, and dedicated drivers exclusively to your manufacturing or retail facility.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Contact Command Center Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 55%, #070C19 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div className="breadcrumb-nav" style={{ marginBottom: 0 }}>
              <a href="/">Home</a>
              <span className="breadcrumb-separator">/</span>
              <span style={{ color: '#E2E8F0', fontWeight: 500 }}>24/7 Dispatch & Terminals</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontSize: '0.8125rem', color: '#34D399', fontWeight: 600 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#34D399', display: 'inline-block', boxShadow: '0 0 8px #34D399' }} />
              Central Dispatch 24/7 Active
            </div>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.85rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.85rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Contact GetDigiFort Command Center
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '820px', marginTop: '0.85rem', lineHeight: 1.6 }}>
            Direct access to our 24/7 central dispatch desk, regional hub managers, and enterprise rate specialists across North America.
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <Clock size={14} color="#34D399" /> <span>Average Dispatch Turnaround: 15 Mins</span>
            </div>
            <div className="header-stat-pill">
              <MapPin size={14} color="#38BDF8" /> <span>38 Transcontinental Hubs</span>
            </div>
            <div className="header-stat-pill">
              <Mail size={14} color="#FBBF24" /> <span>dispatch@getdigifort.com</span>
            </div>
            <div className="header-stat-pill">
              <ShieldCheck size={14} color="#A78BFA" /> <span>USDOT #3849120 | MC-892104</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '3rem' }}>
          {/* Left Column: Direct Email & HQ Info */}
          <div>
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                24/7 Digital Dispatch Desk
              </h3>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Mail size={22} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--color-primary)' }}>
                    {COMPANY_INFO.email.support}
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>24/7/365 Central Dispatch Desk</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Mail size={22} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-primary)' }}>
                    {COMPANY_INFO.email.quotes}
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>Average rate response time: 15 minutes</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <MapPin size={22} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-primary)' }}>
                    Corporate Headquarters:
                  </strong>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    {COMPANY_INFO.headquarters.address}<br />
                    {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state} {COMPANY_INFO.headquarters.zip}
                  </span>
                </div>
              </div>
            </div>

            {/* Credentials Card */}
            <div style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Carrier Licensing & Authority
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                {COMPANY_INFO.dotNumber} • {COMPANY_INFO.mcNumber}
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6 }}>
                SCAC Code: <strong>{COMPANY_INFO.scacCode}</strong> | Insurance Coverage: <strong>$10M Primary Liability & Cargo Policy</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '2.5rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              Send an Operational Inquiry
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Fill out the form below to connect with a regional dispatch officer or account executive.
            </p>

            <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>First Name *</label>
                <input type="text" required placeholder="e.g. Michael" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>Last Name *</label>
                <input type="text" required placeholder="e.g. Vance" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>Corporate Email *</label>
                <input type="email" required placeholder="mvance@company.com" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>Topic of Inquiry</label>
                <select style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}>
                  <option>Request Freight Rate Quote</option>
                  <option>Dedicated Fleet Allocation</option>
                  <option>Cold Chain GDP Audit</option>
                  <option>Claims & Cargo Insurance</option>
                  <option>Careers & Driver Opportunities</option>
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>Message / Freight Requirements *</label>
                <textarea rows={4} required placeholder="Describe your freight origin/destination, volume requirements, or equipment needs..." style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                  <span>Submit Inquiry to Dispatch</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Terminal Directory */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
          <span className="badge-tag">REGIONAL TERMINAL NETWORK</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.75rem' }}>
            Dispatch Hubs & Cross-Dock Facilities
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {TERMINAL_LOCATIONS.map((term) => (
            <div
              key={term.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                border: '1px solid var(--color-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  {term.city}, {term.state}
                </h4>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, backgroundColor: 'var(--color-secondary-subtle)', color: 'var(--color-secondary)', padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-sm)' }}>
                  {term.terminalCode}
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
                {term.address}
              </p>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                Dispatch: <strong>{term.dispatchEmail}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shipper FAQ Section */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
          <span className="badge-tag">FREIGHT & OPERATIONAL FAQ</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.75rem' }}>
            Frequently Asked Questions by Enterprise Shippers
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '840px', margin: '0 auto' }}>
          {faqs.map((faq) => (
            <div
              key={faq.q}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                {faq.q}
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
