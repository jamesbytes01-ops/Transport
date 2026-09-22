'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  Truck, 
  Mail, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight, 
  FileText, 
  UserCheck 
} from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Research & Insights', href: '/research' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={styles.headerWrapper}>
      {/* Executive Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarInfo}>
            <div className={styles.topBarItem}>
              <Mail size={14} />
              <span>24/7 Dispatch Desk: <strong>{COMPANY_INFO.email.quotes}</strong></span>
            </div>
            <div className={styles.topBarItem}>
              <ShieldCheck size={14} />
              <span>{COMPANY_INFO.dotNumber} | {COMPANY_INFO.mcNumber}</span>
            </div>
          </div>
          <div className={styles.topBarActions}>
            <Link href="/contact" className={styles.topBarLink}>
              <UserCheck size={14} />
              <span>Client Portal</span>
            </Link>
            <button onClick={onOpenQuoteModal} className={styles.topBarLink}>
              <FileText size={14} />
              <span>Quick Rate Estimator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className={styles.mainHeader}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logoArea}>
            <div className={styles.logoIcon}>
              <Truck size={24} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.brandName}>GETDIGIFORT</span>
              <span className={styles.brandSub}>DMB TRANSIT INC.</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className={styles.ctaGroup}>
            <Link href="/contact" className="btn btn-outline">
              <Mail size={16} />
              <span>Contact Dispatch</span>
            </Link>
            <button onClick={onOpenQuoteModal} className="btn btn-primary">
              <span>Request a Quote</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className={styles.backdrop} onClick={() => setMobileMenuOpen(false)} />
      )}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.mobileDrawerHeader}>
          <div className={styles.logoArea}>
            <div className={styles.logoIcon}>
              <Truck size={20} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.brandName} style={{ color: '#FFFFFF' }}>GETDIGIFORT</span>
              <span className={styles.brandSub}>DMB TRANSIT INC.</span>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className={styles.mobileCtas}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuoteModal();
            }}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <span>Request a Quote</span>
          </button>
          <Link
            href="/contact"
            className="btn btn-outline-white"
            style={{ width: '100%' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Mail size={16} />
            <span>Contact Dispatch</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
