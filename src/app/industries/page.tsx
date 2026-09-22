import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight, Truck, Factory, ShieldAlert, Cpu, FileCheck } from 'lucide-react';

export const metadata = {
  title: 'Vertical Industry Solutions & Regulatory Compliance',
  description: 'Tailored transportation & supply chain solutions for Automotive, Bio-Pharma, Retail FMCG, Heavy Industrial Machinery, and Energy sectors.',
};

export default function IndustriesPage() {
  const industries = [
    {
      title: 'Automotive & Aerospace OEM',
      tag: 'JUST-IN-TIME (JIT) LINE FEEDING',
      slaScore: '99.94% On-Time',
      desc: 'Zero-downtime freight feeds connecting tier-1 automotive suppliers directly to vehicle assembly lines across the Midwest and Sunbelt auto corridors.',
      keyPoints: [
        'Dedicated 45-truck drop-trailer yard buffers',
        'Geofenced 30-min automated arrival pings',
        'Emergency standby hot-shot sleeper units',
      ],
      complianceChecklist: [
        'AIAG Freight Barcode Tagging Compliant',
        'ISO/TS 16949 Automotive Quality Protocols',
        'Tier-1 Drop-and-Hook Yard Telematics',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Pharmaceuticals & Healthcare',
      tag: 'GDP COLD CHAIN & ZERO EXCURSION',
      slaScore: '100% Temp Compliance',
      desc: 'FDA Title 21 CFR compliant transport for vaccines, biologics, active pharmaceutical ingredients (APIs), and sensitive surgical supplies.',
      keyPoints: [
        '-20°F to +70°F continuous microprocessor telemetry',
        'Pre-cooled trailer washout digital logs',
        '24/7 Command Center continuous temp pings',
      ],
      complianceChecklist: [
        'FDA 21 CFR Part 11 Electronic Records',
        'GDP (Good Distribution Practice) Certified',
        'Continuous Dual-Sensor Redundancy Logs',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'National Retail & FMCG',
      tag: 'PEAK SEASON CAPACITY & DROP-TRAILER',
      slaScore: '300% Q4 Surge Scalability',
      desc: 'High-cube 53-foot dry van networks engineered for rapid distribution center replenishment and Q4 surge volume guarantees.',
      keyPoints: [
        '3:1 Trailer-to-Tractor drop programs',
        '100% solar yard tracking telematics',
        'Access to 3.2M sq. ft. cross-dock hubs',
      ],
      complianceChecklist: [
        'EDI 856 / 940 / 945 WMS Integration',
        'GS1-128 Retail Compliance Labeling',
        'Must-Arrive-By-Date (MABD) Penalty Protection',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Heavy Machinery & Industrial',
      tag: 'OVER-DIMENSIONAL & RGN LOWBOYS',
      slaScore: 'Zero Oversized Incidents',
      desc: 'Turnkey heavy haul solutions for transformers, industrial turbines, structural steel, and oversized construction rigs up to 150,000 lbs.',
      keyPoints: [
        '55-Ton Removable Gooseneck (RGN) lowboys',
        'In-house route surveying & state permitting',
        'Civilian and police escort coordination',
      ],
      complianceChecklist: [
        'AASHTO Multi-State Oversize Clearance',
        'DOT Bridge Weight Stress Calculation',
        'Turnkey 48-Hour Permit Clearances',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Industry Solutions Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #064E3B 0%, #0F172A 55%, #0B132B 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Vertical Industry Solutions</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">VERTICAL INDUSTRY EXPERIENCE</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>4 Strategic Sector Corridors</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.85rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Tailored Industry Supply Chain Solutions
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '820px', marginTop: '0.85rem', lineHeight: 1.6 }}>
            Every industry operates under distinct regulatory, operational, and time-sensitivity demands. GetDigiFort delivers specialized asset configurations and compliance protocols.
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <Factory size={14} color="#34D399" /> <span>Automotive OEM JIT Line Feeding</span>
            </div>
            <div className="header-stat-pill">
              <Cpu size={14} color="#38BDF8" /> <span>Bio-Pharma FDA 21 CFR Cold Chain</span>
            </div>
            <div className="header-stat-pill">
              <Truck size={14} color="#FBBF24" /> <span>National Retail Peak Surge Drops</span>
            </div>
            <div className="header-stat-pill">
              <ShieldAlert size={14} color="#F43F5E" /> <span>Heavy Industrial & RGN Lowboys</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.25rem' }}>
          {industries.map((ind) => (
            <div
              key={ind.title}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  height: '220px',
                  backgroundImage: `url(${ind.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ backgroundColor: 'var(--color-secondary)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 600, padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  {ind.tag}
                </span>
                <span style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)', color: 'var(--color-accent)', fontSize: '0.75rem', fontWeight: 700, padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  {ind.slaScore}
                </span>
              </div>

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.15rem', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                  {ind.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {ind.desc}
                </p>

                {/* Key Operational Features */}
                <div>
                  <div style={{ fontSize: '0.78125rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Asset & Yard Execution
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {ind.keyPoints.map((pt) => (
                      <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Regulatory Compliance Checklist */}
                <div style={{ backgroundColor: 'var(--color-bg-elevated)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-secondary)', textTransform: 'uppercase', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <FileCheck size={14} />
                    <span>Regulatory & Compliance Framework</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                    {ind.complianceChecklist.map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <Link href="/contact" className="btn btn-outline" style={{ width: '100%', padding: '0.55rem' }}>
                    <span>Inquire Industry Solution</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
