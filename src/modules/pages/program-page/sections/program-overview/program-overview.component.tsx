import * as React from 'react';
import { ProgramOverviewProps } from './program-overview.props';
import * as styles from './program-overview.scss';
import { number } from 'yup';

const OverviewItem: React.FC<{
  duration: { months: string | number; sprints: string | number };
  enrollBy: { day: string | number; month: string; year: string | number };
  languages: string[];
}> = ({ languages, enrollBy, duration }) => {
  const { day, month, year } = enrollBy;
  const {months, sprints} = duration
  return (
    <section className={styles.item}>
      <div className={styles.block}>
        <div className={styles.name}>Duration</div>
<<<<<<< HEAD
        <div className={styles.info}>{month} Month / {sprints} Sprints</div>
=======
        <div className={styles.info}>{months} Month/{sprints} Sprints</div>
>>>>>>> COR-20
      </div>
      <div className={styles.hr}></div>
      <div className={styles.block}>
        <div className={styles.name}>Enroll by</div>
        <div className={styles.info}>{`
  ${month} ${day}, ${year}`}</div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.block}>
        <div className={styles.name}>Languages</div>
        <div className={styles.info}>{languages.join(', ')}</div>
      </div>
    </section>
  );
};
/**
 * Renders ProgramOverview
 */
const ProgramOverview: React.FC<ProgramOverviewProps> = ({ overview }) => {
  const { duration, enrollBy, languages } = overview;
  return (
    <section className={styles.programOverview}>
      <div className={styles.title}>Overview</div>
      <OverviewItem
        duration={duration}
        enrollBy={enrollBy}
        languages={languages}
      />
    </section>
  );
};

export { ProgramOverview };
