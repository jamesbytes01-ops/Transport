'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Leaf, 
  Calendar,
  Building2
} from 'lucide-react';

export default function AboutPage() {
  const [selectedHubId, setSelectedHubId] = useState(TERMINAL_LOCATIONS[0].id);

  const selectedHub = TERMINAL_LOCATIONS.find((h) => h.id === selectedHubId) || TERMINAL_LOCATIONS[0];

  const milestones = [
    {
      year: '1998',
      title: 'Company Foundation',
      desc: 'Founded in Chicago, IL with 10 Class-8 power units serving regional Midwest manufacturing corridors.',
    },
    {
      year: '2006',
      title: 'GDP Cold Chain Division Launch',
      desc: 'Acquired Thermo King refrigerated trailing assets to launch biopharmaceutical and fresh produce cold chain operations.',
    },
    {
      year: '2014',
      title: 'Transcontinental Terminal Expansion',
      desc: 'Expanded network to 38 dispatch terminals across North America with 3.2M sq. ft. of contract warehousing.',
    },
    {
      year: '2020',
      title: 'Satellite Telematics & IoT Integration',
      desc: 'Equipped 100% of power units and trailers with Samsara and Orbcomm satellite tracking for continuous temp and location telemetry.',
    },
    {
      year: '2026',
      title: 'Zero-Emission Green Fleet Trial',
      desc: 'Pioneered Renewable Natural Gas (RNG) Class-8 tractors achieving an 85% lifecycle carbon reduction vs diesel.',
    },
  ];

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
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Corporate Legacy Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #451A03 100%)', color: '#FFFFFF', padding: '4.5rem 0 4.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>About Corporate Entity</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">CORPORATE HISTORY & ASSET PHILOSOPHY</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>Est. {COMPANY_INFO.establishedYear} • 28+ Years Excellence</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.85rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Built on Reliability. Powered by Asset Scale.
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '820px', marginTop: '0.85rem', lineHeight: 1.6 }}>
            GetDigiFort (Owned & Operated by DMB Transit Inc.) is a premier North American asset-based surface carrier operating 450+ Class-8 power units and 38 transcontinental hubs.
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <Calendar size={14} color="#FBBF24" /> <span>Founded {COMPANY_INFO.establishedYear}</span>
            </div>
            <div className="header-stat-pill">
              <Building2 size={14} color="#38BDF8" /> <span>DMB Transit Inc. Corporate Entity</span>
            </div>
            <div className="header-stat-pill">
              <Truck size={14} color="#34D399" /> <span>450+ Class-8 Power Units</span>
            </div>
            <div className="header-stat-pill">
              <MapPin size={14} color="#A78BFA" /> <span>38 Transcontinental Terminals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="container" style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-md)', border: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
          {COMPANY_INFO.stats.slice(0, 4).map((st) => (
            <div key={st.label}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                {st.value}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Asset Advantage Section */}
      <section className="container" style={{ marginTop: '4.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span className="badge-tag">THE ASSET ADVANTAGE</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, color: 'var(--color-primary)', marginTop: '0.75rem', marginBottom: '1rem' }}>
              Why Asset Ownership Matters in Enterprise Freight
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              In an era where freight brokers rely on volatile spot markets and unvetted third-party owner-operators, Vanguardia takes a fundamentally different path: <strong>we own and operate our entire fleet</strong>.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              By controlling over 450 Class-8 tractors and 600 custom trailers, we provide enterprise shippers with absolute capacity guarantees, 99.4% on-time performance, and zero-compromise safety standards.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                '100% In-House Maintenance & Safety Inspection Standards',
                'Dedicated Driver Fleet with Low Turnover (< 12% vs. 90% Industry Avg)',
                'Unified Satellite Telematics Across All Trailing Units',
                'Direct Executive Accountability for Every Shipper Account',
              ].map((point) => (
                <li key={point} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-primary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              height: '380px',
              borderRadius: 'var(--radius-lg)',
              backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)',
            }}
          />
        </div>
      </section>

      {/* Company Timeline & Milestones */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div style={{ textTransform: 'uppercase', fontSize: '0.78125rem', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
          EVOLUTION & MILESTONES
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '2rem' }}>
          28-Year Operational Growth Timeline
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
          {milestones.map((m) => (
            <div
              key={m.year}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-accent)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-accent)', fontFamily: 'var(--font-heading)' }}>
                {m.year}
              </div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)', margin: '0.35rem 0' }}>
                {m.title}
              </h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Regional Terminal Hub Explorer */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div style={{ textTransform: 'uppercase', fontSize: '0.78125rem', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
          38 TRANSCONTINENTAL HUBS
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          Interactive Regional Logistics Terminal Directory
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
          {/* Terminal Tabs List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {TERMINAL_LOCATIONS.map((term) => (
              <button
                key={term.id}
                onClick={() => setSelectedHubId(term.id)}
                style={{
                  textAlign: 'left',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid',
                  borderColor: selectedHubId === term.id ? 'var(--color-secondary)' : 'var(--color-border)',
                  backgroundColor: selectedHubId === term.id ? 'var(--color-secondary-subtle)' : '#FFFFFF',
                  color: selectedHubId === term.id ? 'var(--color-secondary)' : 'var(--color-text-main)',
                  fontWeight: selectedHubId === term.id ? 600 : 500,
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{term.city}, {term.state}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{term.region}</span>
              </button>
            ))}
          </div>

          {/* Selected Terminal Details */}
          <div style={{ backgroundColor: 'var(--color-bg-elevated)', borderRadius: 'var(--radius-md)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.78125rem', fontWeight: 700, backgroundColor: 'var(--color-secondary)', color: '#FFFFFF', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)' }}>
                  {selectedHub.terminalCode}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Region: {selectedHub.region}</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                {selectedHub.city}, {selectedHub.state} Logistics Hub
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
                {selectedHub.address}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ backgroundColor: '#FFFFFF', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>Hydraulic Dock Doors</span>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>{selectedHub.dockDoors} Doors</strong>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>Warehouse Footprint</span>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>{(selectedHub.squareFeet / 1000).toFixed(0)}k Sq. Ft.</strong>
                </div>
              </div>

              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Facility Certifications & Customs Status
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {selectedHub.certifications.map((c) => (
                  <span key={c} style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-main)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)' }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                Dispatch Contact: <strong>{selectedHub.dispatchEmail}</strong>
              </span>
              <Link href="/contact" className="btn btn-outline" style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}>
                Contact Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
          <span className="badge-tag">EXECUTIVE LEADERSHIP</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, color: 'var(--color-primary)', marginTop: '0.75rem' }}>
            Led by Supply Chain & Telematics Veterans
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
                gap: '1.15rem',
              }}
            >
              <img
                src={member.avatar}
                alt={member.name}
                style={{ width: '72px', height: '72px', borderRadius: 'var(--radius-full)', objectFit: 'cover' }}
              />
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-accent)', marginTop: '0.2rem' }}>
                  {member.title}
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
