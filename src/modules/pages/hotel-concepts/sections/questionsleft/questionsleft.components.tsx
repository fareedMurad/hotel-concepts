import * as React from 'react';
import * as styles from './questionsleft.scss';
import { useTranslation } from 'react-i18next';

/**
 * Renders QuestionsLeft
 */
const QuestionsLeft = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.questionsLeft}>
      <div className={styles.title}>
        <h1 className={styles.sectiontitle}>
          {t('hotel-concepts.questions-left.title')}
        </h1>
      </div>
      <div className={styles.qleftbox}>
        <div className={styles.qemailbox}>
          <p>
            {t('hotel-concepts.questions-left.email-us.text')}{' '}
            <span className={styles.boldTitle}>
              {t('hotel-concepts.questions-left.email-us.bold-text')}
            </span>
          </p>
          <img
            className={styles.instructionImgSrc}
            src={`img/email.png`}
            alt='syllabus'
          />
        </div>
        <div className={styles.qemailbox}>
          <p>{t('hotel-concepts.questions-left.chat.text')}</p>
          <img
            className={styles.instructionImgSrc}
            src={`img/arrowRight.png`}
            alt='syllabus'
          />
        </div>
        <h2 className={styles.backSoonText}>
          {t('hotel-concepts.questions-left.back-soon')}
        </h2>
      </div>
    </section>
  );
};
export { QuestionsLeft };
