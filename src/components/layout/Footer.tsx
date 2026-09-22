'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  Truck, 
  MapPin, 
  PhoneCall, 
  Mail, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Truck size={20} />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    display: 'block',
                  }}
                >
                  VANGUARDIA
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  TRANSPORT GROUP
                </span>
              </div>
            </div>

            <p className={styles.brandDesc}>
              {COMPANY_INFO.shortDesc} Asset-based transportation, GDP cold chain, and high-volume FTL freight solutions across North America.
            </p>

            <div style={{ fontSize: '0.8125rem', color: '#CBD5E1' }}>
              <strong>Operational Credentials:</strong> {COMPANY_INFO.dotNumber} | {COMPANY_INFO.mcNumber} | SCAC: {COMPANY_INFO.scacCode}
            </div>

            <div className={styles.certList}>
              {COMPANY_INFO.certifications.map((cert) => (
                <span key={cert} className={styles.certBadge}>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Transportation Services */}
          <div>
            <h4 className={styles.colTitle}>Freight Services</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services/full-truckload-ftl">Full Truckload (FTL)</Link>
              </li>
              <li>
                <Link href="/services/temperature-controlled-cold-chain">Refrigerated Cold Chain</Link>
              </li>
              <li>
                <Link href="/services/heavy-haul-specialized">Heavy Haul & Over-Dimensional</Link>
              </li>
              <li>
                <Link href="/services/intermodal-rail-freight">Intermodal Rail Freight</Link>
              </li>
              <li>
                <Link href="/services/warehousing-contract-logistics">Contract Warehousing</Link>
              </li>
              <li>
                <Link href="/services/expedited-critical-freight">Expedited & Hot-Shot Freight</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Research */}
          <div>
            <h4 className={styles.colTitle}>Company & Insights</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about">About Vanguardia</Link>
              </li>
              <li>
                <Link href="/fleet">Fleet Specifications</Link>
              </li>
              <li>
                <Link href="/industries">Industries Served</Link>
              </li>
              <li>
                <Link href="/research">Research & Insights</Link>
              </li>
              <li>
                <Link href="/blog">Logistics Blog</Link>
              </li>
              <li>
                <Link href="/contact">Terminal Network</Link>
              </li>
            </ul>
          </div>

          {/* Dispatch & Dispatch Centers */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Dispatch Command</h4>
            
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <div>
                <strong>Headquarters:</strong><br />
                {COMPANY_INFO.headquarters.address}<br />
                {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state} {COMPANY_INFO.headquarters.zip}
              </div>
            </div>

            <div className={styles.contactItem}>
              <PhoneCall size={18} />
              <div>
                <strong>24/7 Central Dispatch:</strong><br />
                <a href={`tel:${COMPANY_INFO.phone.dispatch}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>
                  {COMPANY_INFO.phone.dispatch}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Mail size={18} />
              <div>
                <strong>Freight Enquiries:</strong><br />
                <a href={`mailto:${COMPANY_INFO.email.quotes}`} style={{ color: '#FFFFFF' }}>
                  {COMPANY_INFO.email.quotes}
                </a>
              </div>
            </div>

            {/* Freight Market Intelligence Newsletter */}
            <div className={styles.newsletterBox}>
              <div className={styles.newsletterTitle}>Freight Market Intelligence</div>
              <p className={styles.newsletterDesc}>
                Subscribe to our quarterly supply chain briefings and rate outlook reports.
              </p>
              {subscribed ? (
                <div style={{ color: 'var(--color-success)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} />
                  <span>Subscribed! Check your inbox for reports.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                  <input
                    type="email"
                    required
                    placeholder="Enter corporate email"
                    className={styles.newsletterInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary" style={{ padding: '0.6rem 0.9rem' }}>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance Bar */}
        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All Rights Reserved. Asset-Based Surface Carrier.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/about#compliance">Safety & DOT Compliance</Link>
            <Link href="/contact#terms">Terms of Carriage</Link>
            <Link href="/contact#privacy">Privacy Policy</Link>
            <Link href="/contact#claims">Claims & Insurance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
