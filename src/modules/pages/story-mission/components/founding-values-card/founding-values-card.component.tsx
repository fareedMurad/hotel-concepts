import * as React from 'react';
import { FoundingValuesCardProps } from './founding-values-card.props';
import * as styles from './founding-values-card.scss';

/**
 * Renders FoundingValuesCard
 */
const FoundingValuesCard: React.FC<FoundingValuesCardProps> = ({ data }) => {
  const { picture, title, description } = data;

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img
          src={require(`img/story-mission/${picture}.png`)}
          className={styles.cardImg}
        />
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.overlay} />
      </div>

      <div className={styles.cardDescription}>{description}</div>
    </div>
  );
};

export { FoundingValuesCard };
