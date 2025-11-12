import Image from 'next/image';

import { classNames } from '@/shared';

import cls from './OfferBanner.module.scss';

const OFFER_BANNER_CONFIG = [
  'It’s completely free to check your options!',
  'Checking eligibility won’t affect your credit score!',
  'Information is shared only with verified partners!',
];

export const OfferBanner = () => {
  return (
    <div className={classNames(cls.offerBanner)}>
      <ul className={cls.list}>
        {OFFER_BANNER_CONFIG.map((txt) => {
          return (
            <li key={txt} className={cls.listItem}>
              <Image
                src={
                  'images/icons/features/onlineloans-verified-badge-icon.svg'
                }
                width={32}
                height={32}
                alt={'verified-badge-icon'}
              />
              <p>{txt}</p>
            </li>
          );
        })}
      </ul>
      <Image
        src={'images/form/onlineloans-form-image.svg'}
        width={406}
        height={216}
        alt={'happy loan banner'}
        className={cls.bannerImg}
      />
    </div>
  );
};
