import { Button } from '@core/components';
import * as React from 'react';
import { CardType } from '../../unlimited-access.hook';
import { UnlimitedCardProps } from './unlimited-card-props';
import * as styles from './unlimited-card.scss';

/**
 * Renders UnlimitedCard
 */
const UnlimitedCard: React.FC<UnlimitedCardProps> = ({
  card: { type, title, description, highlighted, buttonText }
}) => {
  if (type === 'button')
    return (
      <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        <Button className={styles.button} arrow>
          {buttonText}
        </Button>
      </div>
    );

  if (type === 'text')
    return (
      <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.highlighted}>{highlighted}</div>
      </div>
    );
};

export { UnlimitedCard };
