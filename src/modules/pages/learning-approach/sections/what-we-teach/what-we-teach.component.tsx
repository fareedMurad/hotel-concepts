import * as React from 'react';
import { WhatWeTeachProps } from './what-we-teach.props';
import * as styles from './what-we-teach.scss';
import { useWhatWeTeachData } from './what-we-teach.hook';
import { Button, H2 } from '@core/components';

const Card = ({ card }) => {
  const { id, rate, caption, description } = card;
  return (
    <div className={styles.card}>
      <div className={styles.cardRate}>{rate}</div>
      <div className={styles.cardCaption}>{caption}</div>
      <div className={styles.cardDescription}>{description}</div>
      <Button className={styles.cardButton}>
        <div>Explore programs</div>
        <div>&rarr;</div>
      </Button>
    </div>
  );
};
/**
 * Renders WhatWeTeach
 */
const WhatWeTeach: React.FC<WhatWeTeachProps> = ({}) => {
  const { data } = useWhatWeTeachData();
    
  return (
    <div className={styles.whatWeTeach}>
      <H2 className={styles.caption}>What do we teach</H2>
      <main className={styles.cardContainer}>
        {data.map(card => (
          <Card card={card} key={card.id} />
        ))}
      </main>
    </div>
  );
};

export { WhatWeTeach };
