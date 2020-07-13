import * as React from 'react';
import { ProgramEnrollNowProps } from './program-enroll-now.props';
import * as styles from './program-enroll-now.scss';

/**
 * Renders ProgramEnrollNow
 */
const ProgramEnrollNow: React.FC<ProgramEnrollNowProps> = ({}) => {
  return (
    <section className={styles.programEnrollNow}>
      <div className={styles.title}>Enroll Now</div>

    </section>
  );
};

export { ProgramEnrollNow };
