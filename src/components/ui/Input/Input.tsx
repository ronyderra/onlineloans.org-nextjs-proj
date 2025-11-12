import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import { classNames } from '@/shared';

import cls from './Input.module.scss';

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  name: string;
  value: string | number;
  className?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const Input: FC<IInputProps> = ({
  placeholder,
  className = '',
  onChange,
  name,
  value,
  ...others
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      name={name}
      value={value}
      className={classNames(cls.input, {}, [className])}
      placeholder={placeholder}
      onChange={(e) => handleInputChange(e)}
      {...others}
    />
  );
};
