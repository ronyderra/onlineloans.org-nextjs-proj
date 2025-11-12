'use client';

import { FocusEvent, useMemo, useState } from 'react';

import { classNames, URL_CONFIG } from '@/shared';
import { LoanTypes } from '@/shared/types';

import { AppLink } from '../AppLink/AppLink';

import cls from './AmountInput.module.scss';

interface AmountInputCardProps {
  // buttonText?: string;
  // placeholder?: string;
  // maxAmountLabel?: string;
  type: LoanTypes;
}

const AmountCard = ({ type }: AmountInputCardProps) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const { buttonText, placeholder, maxAmountLabel, href } = useMemo(() => {
    if (type === LoanTypes.personal) {
      return {
        buttonText: 'See My Offer',
        placeholder: '$ Amount',
        maxAmountLabel: 'Up to $50k',
        href: URL_CONFIG.businessLoan,
      };
    }

    return {
      buttonText: 'See My Offer',
      placeholder: '$ Amount',
      maxAmountLabel: 'Up to $1M',
      href: URL_CONFIG.businessLoan,
    };
  }, [type]);

  const labelValue = useMemo(() => {
    if (!focused)
      return (
        <>
          <span className={cls.amount}>{placeholder}</span> • {maxAmountLabel}
        </>
      );

    return <span className={cls.amount}>{placeholder}</span>;
  }, [focused, maxAmountLabel, placeholder]);

  const handleFocus = () => setFocused(true);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) setFocused(false);
  };

  return (
    <div
      className={classNames(cls.card, {
        [cls.focused]: focused,
        [cls.filled]: value,
      })}
    >
      <div className={cls.inputContainer}>
        <label
          className={classNames(cls.label, {
            [cls.labelActive]: focused || value,
          })}
        >
          {labelValue}
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cls.input}
          placeholder={focused && !value ? maxAmountLabel : undefined}
        />
      </div>
      {/* <button
        className={cls.button}
        onClick={() => onSubmit?.(value)}
        type="button"
      >
        {buttonText}
      </button> */}
      <AppLink className={cls.button} href={href}>
        {buttonText}
      </AppLink>
    </div>
  );
};

export default AmountCard;
