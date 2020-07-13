import * as React from 'react';
import { ProgramResultsProps } from './program-results.props';
import * as styles from './program-results.scss';

/**
 * Renders ProgramResults
 */
const ProgramResults: React.FC<ProgramResultsProps> = ({ results }) => {
  return (
    <section id="results" className={styles.programResults}>
      <div className={styles.title}>Results</div>
      <div className={styles.hr}></div>
      {results.map(item => (
        <div key={item}>
          <div className={styles.container}>
            <div className={styles.icon}></div>
            <div className={styles.result}>{item}</div>
          </div>
          <div className={styles.hr}></div>
        </div>
      ))}
    </section>
  );
};

export { ProgramResults };
