'use client';

import { useState } from 'react';

import { LoanTypes } from '@/shared/types';

import { Footer, StepForm } from './components';

import cls from './LoanPage.module.scss';

interface IHomePageProps {
  type: LoanTypes;
}

export default function LoanPage({ type }: IHomePageProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <main className={cls.main}>
          <StepForm />
        </main>
      </div>
      <Footer />
    </div>
  );
}
