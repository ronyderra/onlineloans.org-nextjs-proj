import Image from 'next/image';

import AmountInputCard from '@/components/ui/AmountInput/AmountInput';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { classNames, URL_CONFIG } from '@/shared';
import { LoanTypes } from '@/shared/types';

import cls from './CreditTabs.module.scss';

const tabs = [
  {
    title: 'Personal Loan',
    type: LoanTypes.personal,
    href: URL_CONFIG.personal,
  },
  {
    title: 'Business Loan',
    type: LoanTypes.business,
    href: URL_CONFIG.business,
  },
];

interface ICreditTabsProps {
  type: LoanTypes;
}

export const CreditTabs = ({ type }: ICreditTabsProps) => {
  return (
    <div className={cls.tabsWrapper}>
      <ul className={cls.tabs}>
        {tabs.map((tab) => {
          return (
            <li
              key={tab.title}
              className={classNames(cls.tabItem, {
                [cls.active]: type === tab.type,
              })}
            >
              <AppLink href={tab.href} className={cls.link}>
                {tab.title}
              </AppLink>
            </li>
          );
        })}
      </ul>
      <AmountInputCard type={type} />
      <div className={cls.creditNotes}>
        <div className={cls.amountInfo}>
          <p className={cls.note}>
            <Image
              src="/images/icons/features/onlineloans-fast-approval-lightning-icon.svg"
              alt="OnlineLoans.org - Rate in 1 minute"
              width={24}
              height={24}
            />
            Rate in 1 minute
          </p>
          <p className={cls.note}>
            <Image
              src="/images/icons/features/onlineloans-verified-badge-icon.svg"
              alt="OnlineLoans.org - No impact to your credit"
              width={24}
              height={24}
            />
            No impact to your credit
          </p>
        </div>
        <p className={cls.protection}>
          <Image
            src="/images/icons/security/onlineloans-secure-encryption-icon.svg"
            alt="OnlineLoans.org - security"
            width={24}
            height={24}
          />
          We protect your information with advanced data encryption, keeping
          your details safe so you can request a loan with peace of mind and
          comfort from home.
        </p>
      </div>
    </div>
  );
};
