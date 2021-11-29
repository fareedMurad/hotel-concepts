import * as React from 'react';
import * as styles from './learningmodal.scss';
import { Button, Preloader } from '@core/components';
// import { FaqItem } from '@pages/homepage/components/faq-item';
import { Accordin } from '@pages/hotel-concepts/components/benifits';
import { useTranslation } from 'react-i18next';
import { LearningModalData } from './learningmodal.hook';

/**
 * Renders WhoEnroll
 */
const LearningModal = () => {
  const { t } = useTranslation();
  const { data } = LearningModalData();

  return (
    <section className={styles.learningmodal}>
      <div className={styles.title}>
        <div className={styles.innerbox}>
          <h1 className={styles.sectiontitle}>
            {t('hotel-concepts.learning-modal.title')}
          </h1>
        </div>
      </div>

      <div className={styles.accordinWrapper}>
        {data.map((item, id) => (
          <Accordin
            classes={'learningModal'}
            name={item.title}
            description={item.content}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
};
export { LearningModal };
