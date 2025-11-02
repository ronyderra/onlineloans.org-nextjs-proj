'use client';

import { type FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AppLink } from '@/components/ui/AppLink/AppLink';
import { classNames } from '@/shared';

import cls from './Header.module.scss';

const headerConfig = [
  {
    title: 'Home',
    path: '/',
    pathMatch: ['/business', '/personal', '/'],
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Partner with us',
    path: '/partner-with-us',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={cls.header}>
      <nav className={classNames(cls.nav)}>
        <Link href="/" className={cls.logo} onClick={() => setIsOpen(false)}>
          <Image
            src="/images/logo/onlineloans-logo.png"
            alt="OnlineLoans.org - Fast & Secure Online Loans"
            width={101}
            height={48}
            className={cls.logoImage}
            priority
          />
        </Link>
        <button
          className={classNames(cls.burger, { [cls.open]: isOpen })}
          onClick={toggleMenu}
          aria-label="Menu toggle"
        >
          <span className={cls.burgerItem} />
          <span className={cls.burgerItem} />
          <span className={cls.burgerItem} />
        </button>
        <ul className={classNames(cls.navList, { [cls.open]: isOpen })}>
          {headerConfig.map((item) => {
            const isActive = item.pathMatch
              ? item.pathMatch.includes(path)
              : path === item.path;

            return (
              <li key={item.path} className={cls.navItem} onClick={toggleMenu}>
                <AppLink
                  isWithHover
                  href={item.path}
                  className={cls.navLink}
                  isActive={isActive}
                >
                  {item.title}
                </AppLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
