import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight, Truck, Factory, ShieldAlert, Cpu } from 'lucide-react';

export const metadata = {
  title: 'Industries Served | Specialized B2B Logistics Solutions',
  description: 'Tailored transportation & supply chain solutions for Automotive, Bio-Pharma, Retail FMCG, Heavy Industrial Machinery, and Energy sectors.',
};

export default function IndustriesPage() {
  const industries = [
    {
      title: 'Automotive & Aerospace OEM',
      tag: 'JUST-IN-TIME (JIT) LINE FEEDING',
      desc: 'Zero-downtime freight feeds connecting tier-1 automotive suppliers directly to vehicle assembly lines across the Midwest and Sunbelt auto corridors.',
      keyPoints: [
        'Dedicated 45-truck drop-trailer yard buffers',
        'Geofenced 30-min automated arrival pings',
        'Emergency standby hot-shot sleeper units',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Pharmaceuticals & Healthcare',
      tag: 'GDP COLD CHAIN & ZERO EXCURSION',
      desc: 'FDA Title 21 CFR compliant transport for vaccines, biologics, active pharmaceutical ingredients (APIs), and sensitive surgical supplies.',
      keyPoints: [
        '-20°F to +70°F continuous microprocessor telemetry',
        'Pre-cooled trailer washout digital logs',
        '24/7 Command Center continuous temp pings',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'National Retail & FMCG',
      tag: 'PEAK SEASON CAPACITY & DROP-TRAILER',
      desc: 'High-cube 53-foot dry van networks engineered for rapid distribution center replenishment and Q4 surge volume guarantees.',
      keyPoints: [
        '3:1 Trailer-to-Tractor drop programs',
        '100% solar yard tracking telematics',
        'Access to 3.2M sq. ft. cross-dock hubs',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Heavy Machinery & Industrial',
      tag: 'OVER-DIMENSIONAL & RGN LOWBOYS',
      desc: 'Turnkey heavy haul solutions for transformers, industrial turbines, structural steel, and oversized construction rigs up to 150,000 lbs.',
      keyPoints: [
        '55-Ton Removable Gooseneck (RGN) lowboys',
        'In-house route surveying & state permitting',
        'Civilian and police escort coordination',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Banner */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '5rem 0 4rem 0' }}>
        <div className="container">
          <span className="badge-tag-accent">VERTICAL INDUSTRY EXPERIENCE</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, marginTop: '0.75rem' }}>
            Tailored Industry Supply Chain Solutions
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#CBD5E1', maxWidth: '760px', marginTop: '1rem', lineHeight: 1.6 }}>
            Every industry operates under distinct regulatory, operational, and time-sensitivity demands. Vanguardia delivers customized asset solutions.
          </p>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
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
                  height: '240px',
                  backgroundImage: `url(${ind.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ backgroundColor: 'var(--color-secondary)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  {ind.tag}
                </span>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  {ind.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {ind.desc}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {ind.keyPoints.map((pt) => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-main)', fontWeight: 600 }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <Link href="/contact#quote" className="btn btn-outline" style={{ width: '100%' }}>
                    <span>Discuss Industry Solutions</span>
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
