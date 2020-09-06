import * as React from 'react';
import { EnrollProps } from './enroll.props';
import * as styles from './enroll.scss';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from '@core/components';
import { useEnrollData } from './enroll.hook';
import { State } from '@app/store/state';
import { useSelector } from 'react-redux';

/**
 * Renders Enroll
 */
const Enroll: React.FC<EnrollProps> = ({ programId, title }) => {
  const { language } = useSelector((state: State) => state.localization);
  const { whoShouldEnrollData, whoSouldEnrollLoading } = useEnrollData(
    programId,
    language
  );

  if (whoSouldEnrollLoading) return <Spinner />;

  return (
    <section id='content' className={styles.enroll}>
      <div className={styles.title}>
        <div>{title}</div>
        <div>{whoShouldEnrollData.description}</div>
      </div>
      <div className={styles.roles}>
        {whoShouldEnrollData.positions.map(role => (
          <div key={role} className={styles.role}>
            {role}
          </div>
        ))}
      </div>
    </section>
  );
};

export { Enroll };
