import * as React from 'react';
import { VacancyProps } from './vacancy.props';
import * as styles from './vacancy.scss';
import { Button, Icon } from '@core/components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Renders Vacancy
 */
const Vacancy: React.FC<VacancyProps> = ({ id, title, description }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.vacancy}>
      <div>
        <div className={styles.vacancyTitle}>{title}</div>
        <div className={styles.vacancyDescription}>{description}</div>
      </div>
      <NavLink to={`/jobs/job-details/${id}`} className={styles.details}>
        <div>{t('jobs-list.vacancy.button-text')}</div>
        <Icon name='arrows/arrow-right-b' className={styles.arrow}/>
      </NavLink>
    </div>
  );
};

export { Vacancy };
