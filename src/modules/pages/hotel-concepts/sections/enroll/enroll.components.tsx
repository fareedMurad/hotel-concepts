import * as React from 'react';
import * as styles from './enroll.scss';
import { Button, Preloader } from '@core/components';
import { useTranslation } from 'react-i18next';

/**
 * Renders WhoEnroll
 */
const WhoEnroll = () => {
  const { t } = useTranslation();
  const cardData = [
    {
      id: 1,
      title: t('hotel-concepts.enroll.card1.title'),
      para: t('hotel-concepts.enroll.card1.para'),
      imgSrc: `img/botque.png`
    },
    {
      id: 2,
      title: t('hotel-concepts.enroll.card2.title'),
      para: t('hotel-concepts.enroll.card2.para'),
      imgSrc: `img/aspirig.png`
    },
    {
      id: 3,
      title: t('hotel-concepts.enroll.card3.title'),
      para: t('hotel-concepts.enroll.card3.para'),
      imgSrc: `img/peek.png`
    },
    {
      id: 4,
      title: t('hotel-concepts.enroll.card4.title'),
      para: t('hotel-concepts.enroll.card4.para'),
      imgSrc: `img/company.png`
    }
  ];
  return (
    <section className={styles.whoenroll}>
      <div className={styles.title}>
        <div className={styles.innerbox}>
          <h1 className={styles.sectiontitle}>
            {t('hotel-concepts.enroll.title')}
          </h1>
        </div>
        <div className={styles.bottombox}>
          <div className={styles.subtitle}>
            {t('hotel-concepts.enroll.sub-title')}
          </div>
          <div className={styles.boxtitle}>
            {t('hotel-concepts.enroll.box-title')}
          </div>
        </div>
      </div>

      {/* cards */}
      <div className={styles.cardWrapper}>
        {cardData.map((item, id) => (
          <div className={styles.card} key={id}>
            {/* <img src={require(`img/peek.png`)} alt='as' /> */}
            <img className={styles.img} src={item.imgSrc} alt='mvp' />

            <h4>{item.title}</h4>

            <p className={styles.paraText}>{item.para}</p>
          </div>
        ))}
      </div>

      <div className={styles.title}>
        <div className={styles.innerbox}>
          <h3 className={styles.bottomTextHeader}>
            {t('hotel-concepts.enroll.bottom-text-title')}
          </h3>
        </div>
        <div className={styles.footerbox}>
          <div className={styles.footerText}>
            {t('hotel-concepts.enroll.bottom-text')}
          </div>
        </div>
      </div>
    </section>
  );
};
export { WhoEnroll };
