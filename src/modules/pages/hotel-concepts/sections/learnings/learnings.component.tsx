import * as React from 'react';
import * as styles from './learnings.scss';
import { Button, Preloader } from '@core/components';
import { useTranslation } from 'react-i18next';

/**
 * Renders Learnings
 */
const KeyLearnings = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.keylearnings}>
      <div className={styles.title}>
        <h1 className={styles.sectiontitle}>
          {t('hotel-concepts.keylearnings.title')}
        </h1>
        <div className={styles.subtitle}>
          {t('hotel-concepts.keylearnings.sub-title')}
        </div>
      </div>
      <div className={styles.boxwrapper}>
        <div className={styles.leftboxcontent}>
          <ul className={styles.ulist}>
            <li className={styles.list}>
              <span className={styles.boldpara}>
                {t('hotel-concepts.keylearnings.firstlist.list1.list-title')}
              </span>
              &nbsp;
              {t(
                'hotel-concepts.keylearnings.firstlist.list1.list-discription'
              )}
            </li>
            <li className={styles.list}>
              <span className={styles.boldpara}>
                {t('hotel-concepts.keylearnings.firstlist.list2.list-title')}
              </span>
              &nbsp;
              {t(
                'hotel-concepts.keylearnings.firstlist.list2.list-discription'
              )}
            </li>
            <li className={styles.list}>
              <span className={styles.boldpara}>
                {t('hotel-concepts.keylearnings.firstlist.list3.list-title')}
              </span>
              &nbsp;
              {t(
                'hotel-concepts.keylearnings.firstlist.list3.list-discription'
              )}
            </li>
            <li className={styles.list}>
              <span className={styles.boldpara}>
                {t('hotel-concepts.keylearnings.firstlist.list4.list-title')}
              </span>
              &nbsp;
              {t(
                'hotel-concepts.keylearnings.firstlist.list4.list-discription'
              )}
            </li>
          </ul>
        </div>
        <div className={styles.rightboxcontent}>
          <ul className={styles.ulist}>
            <li className={styles.list}>
              <span className={styles.boldpara}>
                {t('hotel-concepts.keylearnings.secondlist.list1.list-title')}
              </span>
              &nbsp;
              {t(
                'hotel-concepts.keylearnings.secondlist.list1.list-discription'
              )}
            </li>
            <li className={styles.list}>
              <span className={styles.boldpara}>
                {t('hotel-concepts.keylearnings.secondlist.list2.list-title')}
              </span>
              &nbsp;
              {t(
                'hotel-concepts.keylearnings.secondlist.list2.list-discription'
              )}
            </li>
            <li className={styles.list}>
              <span className={styles.boldpara}>
                {t('hotel-concepts.keylearnings.secondlist.list3.list-title')}
              </span>
              &nbsp;
              {t(
                'hotel-concepts.keylearnings.secondlist.list3.list-discription'
              )}
            </li>
            <li className={styles.list}>
              <span className={styles.boldpara}>
                {t('hotel-concepts.keylearnings.secondlist.list4.list-title')}
              </span>
              &nbsp;
              {t(
                'hotel-concepts.keylearnings.secondlist.list4.list-discription'
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.list}>
          <span className={styles.boldpara}>
            {t('hotel-concepts.keylearnings.footer.list1.list-title')}
          </span>
          &nbsp;-&nbsp;
          {t('hotel-concepts.keylearnings.footer.list1.list-discription')}
        </div>
        <div className={styles.list}>
          <span className={styles.boldpara}>
            {t('hotel-concepts.keylearnings.footer.list2.list-title')}
          </span>
          &nbsp;-&nbsp;
          {t('hotel-concepts.keylearnings.footer.list2.list-discription')}
        </div>
      </div>
    </section>
  );
};
export { KeyLearnings };
