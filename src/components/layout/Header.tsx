'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { href: '/loans', label: 'Loans' },
    { href: '/about', label: 'About' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <div className={styles.logoContainer}>
            <span className={styles.logoText}>OnlineLoans</span>
            <span className={styles.logoDomain}>.org</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navigationLinks.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.ctaButtons}>
            <Link href="/login" className={styles.loginButton}>
              Login
            </Link>
            <Link href="/apply" className={styles.applyButton}>
              Apply Now
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navigationLinks.map((link) => (
              <li key={link.href} className={styles.mobileNavItem}>
                <Link 
                  href={link.href} 
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileCtaButtons}>
            <Link 
              href="/login" 
              className={styles.mobileLoginButton}
              onClick={closeMobileMenu}
            >
              Login
            </Link>
            <Link 
              href="/apply" 
              className={styles.mobileApplyButton}
              onClick={closeMobileMenu}
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.mobileMenuOverlay}
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;
