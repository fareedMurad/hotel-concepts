import * as React from 'react';
import { EnrollProps } from './enroll.props';
import * as styles from './enroll.scss';

/**
 * Renders Enroll
 */
const Enroll: React.FC<EnrollProps> = ({ shouldEnroll }) => {
  const { text, roles } = shouldEnroll;
  return (
    <section id="content" className={styles.enroll}>
      <div className={styles.title}>
        <div>Who Should Enroll?</div>
        <div>{text}</div>
      </div>
      <div className={styles.roles}>
        {roles.map(role => (
          <div key={role} className={styles.role}>{role}</div>
        ))}
      </div>
    </section>
  );
};

export { Enroll };
