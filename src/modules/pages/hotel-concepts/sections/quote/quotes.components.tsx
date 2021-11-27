import * as React from 'react';
import * as styles from './quotes.scss';
import { useTranslation } from 'react-i18next';

/**
 * Renders Quotes
 */
const QuotesHotels = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.quotes}>
      <div className={styles.quotesbox}>
        <h1 className={styles.quotestitle}>
          {t('hotel-concepts.quoteshotels.title')}
        </h1>
      </div>
    </section>
  );
};
export { QuotesHotels };
