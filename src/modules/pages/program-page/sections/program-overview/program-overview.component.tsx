import * as React from 'react';
import { ProgramOverviewProps } from './program-overview.props';
import * as styles from './program-overview.scss';
import { number } from 'yup';
import { useProgramOverviewData } from './program-overview.hook';
import { Spinner } from '@core/components';
import { useQuery, gql } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

const OverviewItem = ({ weeks, sprints, enrollBy, languages }) => {
  const { t } = useTranslation();

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
  ${enrollBy?.months} ${enrollBy?.day}, ${enrollBy?.year}`}</div>
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

const ProgramOverview: React.FC<ProgramOverviewProps> = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);

  return (
    <section className={styles.programOverview}>
      <div className={styles.title}>{t('program-page.overview.title')}</div>
      <OverviewItem
        weeks={data?.weeks}
        sprints={data?.sprints}
        enrollBy={data?.enroll}
        languages={data?.languages}
      />
    </section>
  );
};

export { ProgramOverview };
