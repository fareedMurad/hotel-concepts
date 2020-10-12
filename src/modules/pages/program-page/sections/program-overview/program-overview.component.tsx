import * as React from 'react';
import { ProgramOverviewProps } from './program-overview.props';
import * as styles from './program-overview.scss';
import { number } from 'yup';
import { useProgramOverviewData } from './program-overview.hook';
import { Icon, Spinner } from '@core/components';
import { useQuery, gql } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { Preloaders } from '@ui/models';
import {
  addProgramToWishlist,
  removeProgramFromWishlist
} from '@app/redux/account';

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
 * Renders meta
 */
const Meta = ({ title, children }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.meta}>
      <div className={styles.metaTitle}>{t(title)}</div>
      <div className={styles.metaValue}>{children}</div>
    </div>
  );
};

/**
 * Renders ProgramOverview
 */
const ProgramOverview: React.FC<ProgramOverviewProps> = ({ data }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    auth: { authorized },
    localization: { language }
  } = useSelector((state: State) => state);
  const { id, inWishlist, weeks, sprints, enroll, languages } = data || {};

  return (
    <section className={styles.programOverview}>
      <div className={styles.title}>{t('program-page.overview.title')}</div>
      {/* {authorized && (
        <Icon
          className={styles.like}
          name={inWishlist ? 'heart' : 'like'}
          onClick={() => {
            const data = { id, preloader: Preloaders.programs };

            dispatch(
              inWishlist
                ? removeProgramFromWishlist(data)
                : addProgramToWishlist(data)
            );
          }}
        />
      )} */}
      <div className={styles.container}>
        <Meta title='program-page.overview.duration'>
          {weeks} {t('program-page.overview.weeks')} / {sprints}{' '}
          {t('program-page.overview.sprints')}
        </Meta>
        <Meta title='program-page.overview.enroll'>
          {`${enroll?.months} ${enroll?.day}, ${enroll?.year}`}
        </Meta>
        <Meta title='program-page.overview.languages'>{languages}</Meta>
      </div>
    </section>
  );
};

export { ProgramOverview };
