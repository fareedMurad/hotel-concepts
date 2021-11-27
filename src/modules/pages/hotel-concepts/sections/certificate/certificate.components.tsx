import * as React from 'react';
import * as styles from './certificate.scss';
import { useTranslation } from 'react-i18next';

/**
 * Renders Learnings
 */
const Certificate = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.certificate}>
      <div className={styles.title}>
        <h1 className={styles.sectiontitle}>
          {t('hotel-concepts.certificate.title')}
        </h1>
      </div>
      <div className={styles.certificateWrapper}>
        <div className={styles.certificateImg}>
          <img
            className={styles.instructionImgSrc}
            src={`img/Certificate.png`}
            alt='syllabus'
          />
        </div>
        <div className={styles.aboutCertificate}>
          <div>
            <p>{t('hotel-concepts.certificate.paragraph.para1')}</p>
          </div>
          <div>
            <p>{t('hotel-concepts.certificate.paragraph.para2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Certificate };
