import * as React from 'react';
import { VacancyProps } from './vacancy.props';
import * as styles from './vacancy.scss';
import { Button } from '@core/components';
import { NavLink } from 'react-router-dom';

/**
 * Renders Vacancy
 */
const Vacancy: React.FC<VacancyProps> = ({ id, title, description }) => {
  return (
    <div className={styles.vacancy}>
      <div>
        <div className={styles.vacancyTitle}>{title}</div>
        <div className={styles.vacancyDescription}>{description}</div>
      </div>
      <NavLink to={`/jobs/job-details/${id}`} className={styles.details}>
        <div>Details</div>
        <div>&#8594;</div>
      </NavLink>
    </div>
  );
};

export { Vacancy };
