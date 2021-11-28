import * as React from 'react';
import * as styles from './askquestions.scss';
import { Button, Preloader } from '@core/components';
// import { FaqItem } from '@pages/homepage/components/faq-item';
import { Accordin } from '@pages/hotel-concepts/components/benifits';
import { useTranslation } from 'react-i18next';
import { AskQuestionsData } from './askquestions.hook';

/**
 * Renders WhoEnroll
 */
const AskQuestions = () => {
  const { t } = useTranslation();
  const { data } = AskQuestionsData();

  return (
    <section className={styles.askQuestions}>
      <div className={styles.title}>
        <div className={styles.innerbox}>
          <h1 className={styles.sectiontitle}>
            {t('hotel-concepts.ask-questions.title')}
          </h1>
        </div>
      </div>

      <div className={styles.accordinWrapper}>
        {data.map((item, id) => (
          <Accordin
            name={item.title}
            description={item.content}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
};
export { AskQuestions };
