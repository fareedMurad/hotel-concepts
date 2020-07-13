import * as React from 'react';
import { HowWeWorkProps } from './how-we-work.props';
import * as styles from './how-we-work.scss';
import { H2 } from '@core/components';
import { useHowWeWork } from './how-we-work.hook';
import { HowWeWorkCard } from './components';

/**
 * Renders HowWeWork
 */
const HowWeWork: React.FC<HowWeWorkProps> = ({}) => {
  const cards = useHowWeWork();
  return (
    <div className={styles.howWeWork}>
      <div className={styles.howWeWorkContainer}>
        <H2 className={styles.howWeWorkTitle}>How we work</H2>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map(card => (
          <HowWeWorkCard key={card.id} title={card.title} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export { HowWeWork };
