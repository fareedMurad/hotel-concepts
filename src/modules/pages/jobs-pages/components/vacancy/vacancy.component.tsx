import * as React from 'react';
import { VacancyProps } from './vacancy.props';
import * as styles from './vacancy.scss';
import { Button } from '@core/components';
import { Details } from '../details';

/**
 * Renders Vacancy
 */
const Vacancy: React.FC<VacancyProps> = ({ title, description }) => {
  return (
    <div className={styles.vacancy}>
      <div>
        <div className={styles.vacancyTitle}>{title}</div>
        <div className={styles.vacancyDescription}>{description}</div>
      </div>
      <Details onClick={() => {}} />
    </div>
  );
};

export { Vacancy };
