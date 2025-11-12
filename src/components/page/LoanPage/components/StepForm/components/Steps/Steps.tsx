import Image from 'next/image';

import { classNames } from '@/shared';

import { STEP_CONFIG } from '../../config';
import { FormSteps } from '../../types';

import cls from './Steps.module.scss';

interface IStepsProps {
  activeStep: FormSteps;
}

export const Steps = ({ activeStep }: IStepsProps) => {
  return (
    <div className={classNames(cls.steps)}>
      <ul className={cls.list}>
        {STEP_CONFIG.map((data) => {
          const isActiveItem = data.step <= activeStep;
          const isSuccess = data.step < activeStep;

          return (
            <li
              key={data.title}
              className={classNames(cls.listItem, {
                [cls.active]: isActiveItem,
                [cls.success]: isSuccess,
              })}
            >
              <p className={classNames(cls.step)}>
                {isSuccess ? (
                  <Image
                    src={'images/icons/features/onlineloans-check.svg'}
                    width={16}
                    height={12}
                    alt={'Check mark'}
                  />
                ) : (
                  data.step
                )}
              </p>
              <p className={cls.title}>{data.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
