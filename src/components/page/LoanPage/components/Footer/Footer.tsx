'use client';

import { useState } from 'react';

import { classNames } from '@/shared';

import cls from './Footer.module.scss';

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={classNames(cls.footer)}>
      <div className={cls.container}>
        <button onClick={handleClick} className={cls.btn}>
          Want to explore before deciding?
        </button>
      </div>
    </div>
  );
};
