import * as React from 'react';
import { EnrollProps } from './enroll.props';
import * as styles from './enroll.scss';

/**
 * Renders Enroll
 */
const Enroll: React.FC<EnrollProps> = ({}) => {
  const data = [
    "Operations Admin",
    "Industry Analyst",
    "Customer Manager",
    "Product Manager"
  ]
  return (
    <section className={styles.enroll}>
      <div className={styles.title}>
        <div>Who Should Enroll?</div>
        <div>
          Digital marketing has emerged as the pillar of many businesses’
          promotion and branding strategy. In this program, you will
          gain general knowledge about the
        </div>
      </div>
      <div className={styles.roles}>
        {data.map(role => (
          <div key={role} className={styles.role}>{role}</div>
        ))}
      </div>
    </section>
  );
};

export { Enroll };
