import * as React from 'react';
import { TipCardProps } from './tip-card.props';
import * as styles from './tip-card.scss';
import { Paragraph, H4, H5 } from '@core/components';

/**
 * Renders TipCard
 */
const TipCard: React.FC<TipCardProps> = ({ item }) => {
  const { id, title, description, subtitle } = item;
  return (
    <div className={styles.tipCard}>
      <H4 className={styles.cardTitle}>{title}</H4>
      <H5 className={styles.cardSubtitle}>{subtitle}</H5>
      <div className={styles.hr} />
      <Paragraph className={styles.cardDescription}>{description}</Paragraph>
    </div>
  );
};

export { TipCard };
