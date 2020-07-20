import * as React from 'react';
import { WhatWeTeachProps } from './what-we-teach.props';
import * as styles from './what-we-teach.scss';
import { useWhatWeTeachData } from './what-we-teach.hook';
import { Button, H2, Spinner } from '@core/components';
import { Link } from 'react-router-dom';

const Card = ({ card, rate }) => {
  const {
    sys: { id },
    category,
    description
  } = card;

  return (
    <div className={styles.card}>
      <div className={styles.cardRate}>{rate + 1}.0</div>
      <div className={styles.cardCaption}>{category}</div>
      <div className={styles.cardDescription}>{description}</div>
      <Link to={`/programs-catalogue/${id}`}>
        <Button className={styles.cardButton}>
          <div>Explore programs</div>
          <div>&rarr;</div>
        </Button>
      </Link>
    </div>
  );
};
/**
 * Renders WhatWeTeach
 */
const WhatWeTeach: React.FC<WhatWeTeachProps> = ({}) => {
  const { data, loading } = useWhatWeTeachData();

  if (loading) return <Spinner />;

  return (
    <div className={styles.whatWeTeach}>
      <H2 className={styles.caption}>What do we teach</H2>
      <main className={styles.cardContainer}>
        {data.map((card, index) => (
          <Card card={card} key={index} rate={index} />
        ))}
      </main>
    </div>
  );
};

export { WhatWeTeach };
