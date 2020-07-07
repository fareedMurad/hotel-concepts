import * as React from 'react';
import { BenefitsCardProps } from './benefits-card.props';
import * as styles from './benefits-card.scss';
import { Icon, Paragraph } from '@core/components';

/**
 * Renders BenefitsCard
 */
const BenefitsCard: React.FC<BenefitsCardProps> = ({ text }) => {
  return (
    <div className={styles.benefitsCard}>
      <Icon className={styles.dot} name='dot' />
      <Paragraph className={styles.description}>{text}</Paragraph>
    </div>
  );
};

export { BenefitsCard };
