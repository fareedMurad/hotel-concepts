import * as React from 'react';
import * as styles from './syllabus.scss';
// import { Button, Preloader } from '@core/components';
// import { FaqItem } from '@pages/homepage/components/faq-item';
import { Accordin } from '@pages/hotel-concepts/components/syllabus';
import { useTranslation } from 'react-i18next';
import { SyllabusData } from './syllabus.hook';

/**
 * Renders Syllabus
 */
const Syllabus = () => {
  const { t } = useTranslation();
  const { data, carddata } = SyllabusData();
  return (
    <section className={styles.syllabus}>
      <div className={styles.title}>
        <div className={styles.innerboxes}>
          <h1 className={styles.sectiontitle}>
            {t('hotel-concepts.syllabus.title')}
          </h1>
        </div>
        <div className={styles.innerbox}>
          <h1 className={styles.subtitle}>
            {t('hotel-concepts.syllabus.sub-title')}
          </h1>
        </div>
        <div className={styles.discrptionbox}>
          <h1 className={styles.subdiscription}>
            {t('hotel-concepts.syllabus.discription')}
          </h1>
        </div>
      </div>

      <div className={styles.accordinWrapper}>
        {data.map((item, index) => {
          return (
            <Accordin
              name={item.title}
              description={item.content}
              imgSrc={item.src}
              key={item.id}
            />
          );
        })}
      </div>
      <div className={styles.title}>
        <div className={styles.innerbox}>
          <h1 className={styles.subtitle}>
            {t('hotel-concepts.syllabus.sub-title2')}
          </h1>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        {carddata.map((item, id) => (
          <div className={styles.card} key={id}>
            {/* <img src={require(`img/peek.png`)} alt='as' /> */}
            <div className={styles.iconBox}>
              <img className={styles.imgCard} src={item.kordie} alt='mvp' />
              <img className={styles.imgCard} src={item.mvcc} alt='mvp' />
            </div>
            <div className={styles.imgBox}>
              <img className={styles.img} src={item.imgSrc} alt='mvp' />
            </div>
            <div className={styles.cardTextBox}>
              <h4 className={styles.cardSpecialTitle}>{item.title}</h4>
              <p className={styles.cardSpecialText}>{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export { Syllabus };
