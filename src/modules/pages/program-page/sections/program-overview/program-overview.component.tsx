import * as React from 'react';
import { ProgramOverviewProps } from './program-overview.props';
import * as styles from './program-overview.scss';
import { number } from 'yup';
import { useProgramOverviewData } from './program-overview.hook';
import { Spinner } from '@core/components';
import { useQuery, gql } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';

const OverviewItem = ({ weeks, sprints, enrollBy, languages }) => {
  const { t } = useTranslation();
  const { months, day, year } = enrollBy;
  return (
    <section className={styles.item}>
      <div className={styles.block}>
        <div className={styles.name}>{t('program-page.overview.duration')}</div>
        <div className={styles.info}>
          {weeks} {t('program-page.overview.weeks')} / {sprints}{' '}
          {t('program-page.overview.sprints')}
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.block}>
        <div className={styles.name}>{t('program-page.overview.enroll')}</div>
        <div className={styles.info}>{`
  ${months} ${day}, ${year}`}</div>
      </div>
      <div className={styles.hr} />
      <div className={styles.block}>
        <div className={styles.name}>
          {t('program-page.overview.languages')}
        </div>
        <div className={styles.info}>{languages}</div>
      </div>
    </section>
  );
};
/**
 * Renders ProgramOverview
 */
const GET_PROGRAM_OVERVIEW_DATA = gql`
  query($id: String!, $locale: String!) {
    onlineCourse(id: $id, locale: $locale) {
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
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  // const { GET_PROGRAM_OVERVIEW_DATA } = useProgramOverviewData(programId);
  const { data, loading, error } = useQuery(GET_PROGRAM_OVERVIEW_DATA, {
    variables: { id: programId, locale: language }
  });

  if (loading) return <Spinner />;
  const { weeks, sprints, enroll, languages } = data?.onlineCourse;

  return (
    <section className={styles.programOverview}>
      <div className={styles.title}>{t('program-page.overview.title')}</div>
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
