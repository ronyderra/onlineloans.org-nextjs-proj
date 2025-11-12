'use client';

import {
  KeyboardEvent,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';

import { classNames } from '@/shared';

import cls from './Select.module.scss';

export type Option = {
  value: string | number;
  label: string | number;
  disabled?: boolean;
};

type Props = {
  id?: string;
  name: string;
  value: string | undefined;
  onChange: (value: string | number, option: Option) => void;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  className?: string; // root
  buttonClassName?: string; // trigger
  listClassName?: string; // popup
  optionClassName?: string; // each row
};

export function Select({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = 'Month',
  disabled,
  className = '',
  buttonClassName = '',
  listClassName = '',
  optionClassName = '',
}: Props) {
  const uid = useId();
  const selectId = id ?? `select-${uid}`;
  const listId = `${selectId}-listbox`;

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  const selectedIndex = useMemo(
    () => options.findIndex((o) => o.value === value),
    [options, value]
  );

  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  useEffect(() => {
    function onDocDown(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener('mousedown', onDocDown);
    return () => document.removeEventListener('mousedown', onDocDown);
  }, []);

  function commit(idx: number) {
    const opt = options[idx];
    if (!opt || !opt.value || opt.disabled) return;

    console.log(opt);

    onChange(opt.value, opt);
    setIsOpen(false);
    queueMicrotask(() => buttonRef.current?.focus());
  }

  function nextEnabled(from: number, dir: 1 | -1) {
    if (!options.length) return from;
    let i = from;
    for (let step = 0; step < options.length; step++) {
      i = (i + dir + options.length) % options.length;
      if (!options[i].disabled) return i;
    }
    return from;
  }

  function onButtonKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        e.preventDefault();
        setIsOpen(true);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        setIsOpen((o) => !o);
        break;
    }
  }

  function onListKeyDown(e: KeyboardEvent<HTMLUListElement>) {
    if (disabled) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      queueMicrotask(() => buttonRef.current?.focus());
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (activeIndex != null) commit(activeIndex);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const start = activeIndex == null ? -1 : activeIndex;
      setActiveIndex(nextEnabled(start, 1));
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const start = activeIndex == null ? 0 : activeIndex;
      setActiveIndex(nextEnabled(start, -1));
      return;
    }
    if (e.key === 'Home') {
      e.preventDefault();
      setActiveIndex(nextEnabled(-1, 1));
      return;
    }
    if (e.key === 'End') {
      e.preventDefault();
      setActiveIndex(nextEnabled(0, -1));
      return;
    }
  }

  const handleOpen = () => {
    if (disabled) return;

    setIsOpen((prev) => !prev);
  };

  return (
    <div
      ref={rootRef}
      data-open={isOpen}
      data-disabled={disabled}
      className={classNames(cls.select, {}, [className])}
    >
      {name && <input type="hidden" name={name} value={value ?? ''} />}

      <button
        ref={buttonRef}
        id={selectId}
        type="button"
        className={classNames(
          cls.selectBtn,
          { [cls.open]: isOpen, [cls.active]: value !== undefined },
          [buttonClassName]
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-disabled={disabled}
        disabled={disabled}
        onClick={handleOpen}
        onKeyDown={onButtonKeyDown}
      >
        {selected?.label ?? placeholder}
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={selectId}
          className={classNames(cls.selectList, {}, [listClassName])}
          onKeyDown={onListKeyDown}
        >
          {options.map((opt, i) => {
            const isSelected = opt.value === value;
            const isActive = i === activeIndex;

            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                aria-disabled={opt.disabled || undefined}
                className={classNames(
                  cls.selectListItem,
                  {
                    [cls.isSelectred]: isSelected,
                    [cls.isActive]: isActive,
                    [cls.isDisabled]: Boolean(opt.disabled),
                  },
                  [optionClassName]
                )}
                onMouseEnter={() => !opt.disabled && setActiveIndex(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => !opt.disabled && commit(i)}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
