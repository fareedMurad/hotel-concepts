import * as React from 'react';
import { ProgramOverviewProps } from './program-overview.props';
import * as styles from './program-overview.scss';
import { number } from 'yup';
import { useProgramOverviewData } from './program-overview.hook';
import { Spinner } from '@core/components';

const OverviewItem: React.FC<{
  weeks: number;
  sprints: number;
  enrollBy: { day: string | number; months: string; year: string | number };
  languages: string[];
}> = ({ languages, enrollBy, weeks, sprints }) => {
  const { day, months, year } = enrollBy;

  return (
    <section className={styles.item}>
      <div className={styles.block}>
        <div className={styles.name}>Duration</div>
        <div className={styles.info}>
          {weeks} Weeks / {sprints} Sprints
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.block}>
        <div className={styles.name}>Enroll by</div>
        <div className={styles.info}>{`
  ${months} ${day}, ${year}`}</div>
      </div>
      <div className={styles.hr} />
      <div className={styles.block}>
        <div className={styles.name}>Languages</div>
        <div className={styles.info}>{languages}</div>
      </div>
    </section>
  );
};
/**
 * Renders ProgramOverview
 */
const ProgramOverview: React.FC<ProgramOverviewProps> = ({ programId }) => {
  const { data, loading } = useProgramOverviewData(programId);

  if (loading) return <Spinner />;

  const { weeks, sprints, enroll, languages } = data.onlineCourse;

  return (
    <section className={styles.programOverview}>
      <div className={styles.title}>Overview</div>
      <OverviewItem
        weeks={weeks}
        sprints={sprints}
        enrollBy={enroll}
        languages={languages}
      />
    </section>
  );
};

export { ProgramOverview };
