import { PreCaption, SectionTitle } from '@core/components';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { UnlimitedCard } from './components/unlimited-card';
import { useUnlimitedData } from './unlimited-access.hook';

import * as styles from './unlimited-access.scss';

/**
 * Renders UnlimitedAccess
 */
const UnlimitedAccess: React.FC = () => {
  const { t } = useTranslation();
  const { cards } = useUnlimitedData();
  return (
    <section className={styles.unlimitedAccess}>
      <div className={styles.titleBlock}>
        <div className={styles.wrapper}>
          <PreCaption>{t('home.unlimited-access.caprion')}</PreCaption>
          <SectionTitle>{t('home.unlimited-access.title')}</SectionTitle>
          <div className={styles.titleBlockDescription}>
            {t('home.unlimited-access.description')}
          </div>
          <div className={styles.titleBlockSubtitle}>
            {t('home.unlimited-access.subtitle')}
          </div>
        </div>
        <img className={styles.image} src={require('img/unlim-img.png')} />
      </div>
      <div className={styles.descriptionBlock}>
        {cards.map(card => (
          <UnlimitedCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
};

export { UnlimitedAccess };
