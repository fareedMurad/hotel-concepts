import * as React from 'react';
import { HowWeWorkCardProps } from './how-we-work-card.props';
import * as styles from './how-we-work-card.scss';
import { H4, Paragraph } from '@core/components';

/**
 * Renders HowWeWorkCard
 */
const HowWeWorkCard: React.FC<HowWeWorkCardProps> = ({ title, text }) => {
  return (
    <div className={styles.howWeWorkCard}>
      <H4 className={styles.orange}>{title}</H4>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

export { HowWeWorkCard };
