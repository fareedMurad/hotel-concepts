import * as React from 'react';
import { ProgramOverviewProps } from './program-overview.props';
import * as styles from './program-overview.scss';

const OverviewItem: React.FC<{ sprints: number, month: number, date: string, languages: string[] }> =
({ sprints, month, date, languages }) => {
  return (
    <section className={styles.item}>
      <div className={styles.block}>
        <div className={styles.name}>Duration</div>
        <div className={styles.info}>{month} Month/{sprints} Sprints</div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.block}>
        <div className={styles.name}>Enroll by</div>
        <div className={styles.info}>{date}</div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.block}>
        <div className={styles.name}>Languages</div>
        <div className={styles.info}>{languages.toString()}</div>
      </div>
    </section>
  );
};
/**
 * Renders ProgramOverview
 */
const ProgramOverview: React.FC<ProgramOverviewProps> = ({}) => {
  return (
    <section className={styles.programOverview}>
      <div className={styles.title}>Overview</div>
      <OverviewItem sprints={16} month={4} date="September 10, 2019" languages={["English", "Italian"]} />
    </section>
  );
};

export { ProgramOverview };
