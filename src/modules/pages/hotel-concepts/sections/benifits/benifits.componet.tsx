import * as React from 'react';
import * as styles from './benifits.scss';
import { Button, Preloader } from '@core/components';
// import { FaqItem } from '@pages/homepage/components/faq-item';
import { Accordin } from '@pages/hotel-concepts/components/benifits';
import { useTranslation } from 'react-i18next';

/**
 * Renders WhoEnroll
 */
const Benifits = () => {
  const { t } = useTranslation();
  const cardData = [
    {
      id: 1,
      title: t('hotel-concepts.benifits.benifit1.title'),
      content: t('hotel-concepts.benifits.benifit1.content')
    },
    {
      id: 2,
      title: t('hotel-concepts.benifits.benifit2.title'),
      content: t('hotel-concepts.benifits.benifit2.content')
    },
    {
      id: 3,
      title: t('hotel-concepts.benifits.benifit3.title'),
      content: t('hotel-concepts.benifits.benifit3.content')
    },

    {
      id: 4,
      title: t('hotel-concepts.benifits.benifit4.title'),
      content: t('hotel-concepts.benifits.benifit4.content')
    },

    {
      id: 5,
      title: t('hotel-concepts.benifits.benifit5.title'),
      content: t('hotel-concepts.benifits.benifit5.content')
    },

    {
      id: 6,
      title: t('hotel-concepts.benifits.benifit6.title'),
      content: t('hotel-concepts.benifits.benifit6.content')
    },

    {
      id: 7,
      title: t('hotel-concepts.benifits.benifit7.title'),
      content: t('hotel-concepts.benifits.benifit7.content')
    },
    {
      id: 8,
      title: t('hotel-concepts.benifits.benifit8.title'),
      content: t('hotel-concepts.benifits.benifit8.content')
    }
  ];
  return (
    <section className={styles.benifits}>
      <div className={styles.title}>
        <div className={styles.innerbox}>
          <h1 className={styles.sectiontitle}>
            {t('hotel-concepts.benifits.title')}
          </h1>
        </div>
      </div>

      <div className={styles.accordinWrapper}>
        {cardData.map((item, index) => (
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
export { Benifits };
