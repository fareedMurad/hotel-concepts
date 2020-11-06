import * as React from 'react';
import { EnrollProps } from './enroll.props';
import * as styles from './enroll.scss';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from '@core/components';
import { useEnrollData } from './enroll.hook';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

/**
 * Renders Enroll
 */

//used also in product page

const Enroll: React.FC<EnrollProps> = ({ data }) => {
  const { language } = useSelector((state: State) => state.localization);
  const { t } = useTranslation();

  return (
    <section id='content' className={styles.enroll}>
      <div className={styles.title}>
        <div>{t('program-page.enroll.title')}</div>
        <div>{data?.whoShouldEnrol?.description}</div>
      </div>
      <div className={styles.roles}>
        {data?.whoShouldEnrol?.positions.map(role => (
          <div key={role} className={styles.role}>
            {role}
          </div>
        ))}
      </div>
    </section>
  );
};

export { Enroll };
