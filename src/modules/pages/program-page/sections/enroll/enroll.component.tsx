import * as React from 'react';
import { EnrollProps } from './enroll.props';
import * as styles from './enroll.scss';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from '@core/components';
import { useEnrollData } from './enroll.hook';

/**
 * Renders Enroll
 */
const Enroll: React.FC<EnrollProps> = ({ programId }) => {
  const { whoShouldEnrollData, whoSouldEnrollLoading } = useEnrollData(
    programId
  );

  if (whoSouldEnrollLoading) return <Spinner />;

  return (
    <section id='content' className={styles.enroll}>
      <div className={styles.title}>
        <div>Who Should Enroll?</div>
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
