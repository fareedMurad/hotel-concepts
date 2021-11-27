import * as React from 'react';
import * as styles from './winning.scss';
import { useTranslation } from 'react-i18next';
import { WinningConceptsData } from './winning.hook';
import { Button } from '@core/components';

/**
 * Renders WhoEnroll
 */
const WinningConcepts = () => {
  const { t } = useTranslation();
  const { data } = WinningConceptsData();

  return (
    <section className={styles.winning}>
      <div className={styles.title}>
        <div className={styles.innerbox}>
          <h1 className={styles.sectiontitle}>
            {t('hotel-concepts.winning.title')}
          </h1>
        </div>
      </div>
      <div className={styles.minicard}>
        <div className={styles.descriptionBlock}>
          {data.map(items => (
            <>
              <div className={styles.carddetails}>
                <div className={styles.label}>{items.label}</div>
                <div className={styles.value}>{items.value}</div>
              </div>
              <hr className={styles.hr} />
            </>
          ))}
        </div>
        <div className={styles.earlyBooking}>
          <span className={styles.percent}>
            {t('hotel-concepts.winning.sub-title.percent')}
          </span>{' '}
          <span className={styles.text}>
            {t('hotel-concepts.winning.sub-title.text')}
          </span>{' '}
          <span className={styles.date}>
            {t('hotel-concepts.winning.sub-title.date')}
          </span>
        </div>
        <div className={styles.descriptionBlock}>
          <div className={styles.bottom}>
            <Button
              // #non-clickable
              // onClick={handleClick(id, slug)}
              className={styles.button}
              children='SIGN UP'
              width='100%'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export { WinningConcepts };
