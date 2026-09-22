import React from 'react';
import Metadata from 'next';
import { COMPANY_INFO } from '@/data/companyData';
import { TERMINAL_LOCATIONS } from '@/data/terminalsData';
import { 
  ShieldCheck, 
  Award, 
  Truck, 
  Users, 
  Globe, 
  MapPin, 
  CheckCircle2, 
  Leaf 
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Corporate Profile & Asset Capabilities',
  description: 'Learn about Vanguardia Transport Group, an asset-based carrier operating 450+ power units, 38 transcontinental hubs, and GDP-compliant cold chain networks.',
};

export default function AboutPage() {
  const leadershipTeam = [
    {
      name: 'Arthur Vanguardia',
      title: 'Founder & Chief Executive Officer',
      bio: 'Over 30 years of surface transportation leadership, scaling Vanguardia from a 10-truck regional carrier into a transcontinental asset-backed enterprise.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'Dr. Marcus Vance',
      title: 'VP of Supply Chain Intelligence & Economics',
      bio: 'Ph.D. in Logistics Engineering from MIT. Former Senior Economist at the U.S. Department of Transportation, overseeing freight market index modeling.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'Elena Rostova',
      title: 'Director of Fleet Operations & Sustainability',
      bio: 'Pioneered Vanguardia’s zero-emission fleet decarbonization roadmap and satellite telematics integration across 1,000+ trailing assets.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Banner */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '5rem 0 4rem 0' }}>
        <div className="container">
          <span className="badge-tag-accent">CORPORATE PROFILE & HISTORY</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, marginTop: '0.75rem' }}>
            Built on Reliability. Powered by Scale.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#CBD5E1', maxWidth: '760px', marginTop: '1rem', lineHeight: 1.6 }}>
            Founded in {COMPANY_INFO.establishedYear}, Vanguardia Transport Group is a premier North American asset-based surface carrier and logistics provider.
          </p>
        </div>
      </section>

      {/* Overview & Key Stats */}
      <section className="container" style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
          {COMPANY_INFO.stats.slice(0, 4).map((st) => (
            <div key={st.label}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                {st.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span className="badge-tag">THE ASSET ADVANTAGE</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              Why Asset Ownership Matters in Modern Freight
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              In an era where freight brokers rely on volatile spot markets and unvetted third-party owner-operators, Vanguardia takes a fundamentally different path: <strong>we own our fleet</strong>.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              By controlling over 450 Class-8 tractors and 600 custom trailers, we provide enterprise shippers with absolute capacity guarantees, 99.4% on-time performance, and zero-compromise safety standards.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                '100% In-House Maintenance & Safety Inspection Standards',
                'Dedicated Driver Fleet with Low Turnover (< 12% vs. 90% Industry Avg)',
                'Unified Satellite Telematics Across All Trailing Units',
                'Direct Executive Accountability for Every Shipper Account',
              ].map((point) => (
                <li key={point} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              height: '420px',
              borderRadius: 'var(--radius-lg)',
              backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--color-border)',
            }}
          />
        </div>
      </section>

      {/* Leadership Team */}
      <section className="container" style={{ marginTop: '6rem' }}>
        <div style={{ textTransform: 'center', textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
          <span className="badge-tag">EXECUTIVE LEADERSHIP</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.75rem' }}>
            Led by Supply Chain Veterans
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {leadershipTeam.map((member) => (
            <div
              key={member.name}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <img
                src={member.avatar}
                alt={member.name}
                style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-full)', objectFit: 'cover' }}
              />
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-accent)', marginTop: '0.2rem' }}>
                  {member.title}
                </div>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Terminals Directory */}
      <section className="container" style={{ marginTop: '6rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
          <span className="badge-tag">NATIONWIDE NETWORK</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.75rem' }}>
            38 Transcontinental Terminals & Cross-Dock Hubs
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
                  {term.region}
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
                {term.address}
              </p>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                Dock Doors: <strong>{term.dockDoors}</strong> | Warehouse: <strong>{(term.squareFeet / 1000).toFixed(0)}k sq. ft.</strong>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
