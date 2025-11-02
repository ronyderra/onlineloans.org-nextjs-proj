import Image from 'next/image';

import AmountInputCard from '@/components/ui/AmountInput/AmountInput';
import { Input } from '@/components/ui/Input/Input';
import { classNames } from '@/shared';

import cls from './HomePage.module.scss';

interface IHomePageProps {
  type: 'business' | 'personal';
}

export default function HomePage({ type }: IHomePageProps) {
  const isBusiness = type === 'business';

  return (
    <div className={cls.page}>
      <main className={cls.main}>
        <h1 className={cls.title}>
          Money when you need it. <br />
          Fast, easy, secure.
        </h1>
        <div className={cls.tabs}>
          <AmountInputCard
            maxAmountLabel={isBusiness ? 'Up to $1M' : 'Up to $50K'}
          />
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
        <div className={cls.ratings}>
          <div className={classNames(cls.ratingBlock, {}, [cls.product])}>
            <Image
              src="/images/icons/features/onlineloans-feature-icons-group.svg"
              alt="OnlineLoans.org - Rating medal"
              width={21}
              height={28}
            />
            <div>
              <p className={cls.productSubtitle}>Top Product</p>
              <p className={cls.productTitle}>Ranked Best in Personal Loans</p>
            </div>
          </div>
          <div className={classNames(cls.ratingBlock, {}, [cls.rating])}>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <Image
                  key={index}
                  src="/images/icons/ratings/onlineloans-star-rating-icon.svg"
                  alt={`OnlineLoans.org - Rating star ${index + 1}`}
                  width={24.5}
                  height={24.5}
                  className={cls.ratingImg}
                />
              );
            })}

            <p className={cls.ratingTitle}>4.8/5.0 Rating</p>
          </div>
        </div>
      </main>
      {/* <Input placeholder="text" /> */}
    </div>
  );
}
