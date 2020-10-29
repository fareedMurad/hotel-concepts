import { Button, PreCaption, SectionTitle } from '@core/components';
import * as React from 'react';
import { UnlimitedCard } from './components/unlimited-card';
import { CardType, useUnlimitedData } from './unlimited-access.hook';

import * as styles from './unlimited-access.scss';

/**
 * Renders UnlimitedAccess
 */
const UnlimitedAccess: React.FC = () => {
  const { cards } = useUnlimitedData();
  return (
    <section className={styles.unlimitedAccess}>
      <div className={styles.titleBlock}>
        <div className={styles.wrapper}>
          <PreCaption>E-books for you</PreCaption>
          <SectionTitle>Get unlimited access ebooks</SectionTitle>
          <div className={styles.titleBlockDescription}>
            Our Open Access research subscription puts the world’s most
            comprehensive library of hospitality research and data visualisation
            at your fingertips.
          </div>
          <div className={styles.titleBlockSubtitle}>
            Subscription benefits:
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
