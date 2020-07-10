import * as React from 'react';
import { CardProps } from './card.props';
import * as styles from './card.scss';
import { H4, Paragraph } from '@core/components';

/**
 * Renders Card
 */
const Card: React.FC<CardProps> = ({ title, description, id }) => {
  return (
    <div className={styles.card}>
      <H4 className={styles.cardTitleOrange}>{title}</H4>
      <div className={styles.hr} />
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export { Card };
