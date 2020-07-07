import * as React from 'react';
import { OurProgramsCardProps } from './our-programs-card.props';
import * as styles from './our-programs-card.scss';
import { H3, Paragraph } from '@core/components';

/**
 * Renders OurProgramsCard
 */
const OurProgramsCard: React.FC<OurProgramsCardProps> = ({
  count,
  title,
  text
}) => {
  return (
    <div className={styles.ourProgramsCard}>
      <H3 className={styles.orange}>{count}</H3>
      <Paragraph className={styles.subtitle}>{title}</Paragraph>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

export { OurProgramsCard };
