import * as React from 'react';
import { CardProps } from './card.props';
import * as styles from './card.scss';
import { H4, Paragraph, Hr } from '@core/components';

/**
 * Renders Card
 */
const Card: React.FC<CardProps> = ({ title, description, id }) => {
  return (
    <div className={styles.card}>
      <H4 className={styles.cardTitle}>{title}</H4>
      <Hr className={styles.hr} />
      <Paragraph className={styles.cardDescription}>{description}</Paragraph>
    </div>
  );
};

export { Card };
