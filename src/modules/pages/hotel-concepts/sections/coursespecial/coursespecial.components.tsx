import * as React from 'react';
import * as styles from './coursespecial.scss';
import { useTranslation } from 'react-i18next';
import { CourseSpecialData } from './coursespecial.hook';

/**
 * Renders WhoEnroll
 */
const CourseSpecial = () => {
  const { t } = useTranslation();
  const { data } = CourseSpecialData();

  return (
    <section className={styles.courseSpecial}>
      <div className={styles.title}>
        <div className={styles.innerbox}>
          <h1 className={styles.sectiontitle}>
            {t('hotel-concepts.course-special.title')}
          </h1>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        {data.map((item, id) => (
          <div className={styles.card} key={id}>
            {/* <img src={require(`img/peek.png`)} alt='as' /> */}
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
export { CourseSpecial };
