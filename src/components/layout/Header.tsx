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
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/Partner-with-us', label: 'Partner with us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <Image
            src="/images/logo/onlineloans-logo.svg"
            alt="OnlineLoans.org - Fast & Secure Online Loans"
            width={180}
            height={40}
            className={styles.logoImage}
            priority
          />
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
