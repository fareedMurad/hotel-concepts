import * as React from 'react';
import { ProgramResultsProps } from './program-results.props';
import * as styles from './program-results.scss';

/**
 * Renders ProgramResults
 */
const ProgramResults: React.FC<ProgramResultsProps> = ({}) => {
  const data = [
    "Categorize consumer expectations and behavior across digital platforms.",
    "Apply market segmentation techniques.",
    "Interpret digital marketing analytics to distinguishcustomers.",
    "Develop strategies for customer relationship management.",
    "Explain the key issues and challenges of digital marketing."
  ];

  return (
    <section className={styles.programResults}>
      <div className={styles.title}>Results</div>
      <div className={styles.hr}></div>
      {data.map(item => (
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
