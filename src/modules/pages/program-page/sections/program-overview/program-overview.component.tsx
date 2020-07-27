import * as React from 'react';
import { ProgramOverviewProps } from './program-overview.props';
import * as styles from './program-overview.scss';
import { number } from 'yup';
import { useProgramOverviewData } from './program-overview.hook';
import { Spinner } from '@core/components';
import { useQuery, gql } from '@apollo/client';

const OverviewItem = ({ weeks, sprints, enrollBy, languages }) => {
  const { months, day, year } = enrollBy;
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
const GET_PROGRAM_OVERVIEW_DATA = gql`
  query($id: String!) {
    onlineCourse(id: $id) {
      weeks
      sprints
      enroll {
        day
        year
        months
      }
      languages
    }
  }
`;

const ProgramOverview: React.FC<ProgramOverviewProps> = ({ programId }) => {
  // const { GET_PROGRAM_OVERVIEW_DATA } = useProgramOverviewData(programId);
  const { data, loading, error } = useQuery(GET_PROGRAM_OVERVIEW_DATA, {
    variables: { id: programId }
  });

  if (loading) return <Spinner />;
  const { weeks, sprints, enroll, languages } = data?.onlineCourse;

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
