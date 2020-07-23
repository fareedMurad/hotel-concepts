import * as React from 'react';
import { TalentMattersProps } from './talent-matters.props';
import * as styles from './talent-matters.scss';
import { Icon, H2, Paragraph, SectionTitle } from '@core/components';

/**
 * Renders TalentMatters
 */
const TalentMatters: React.FC<TalentMattersProps> = ({}) => {
  return (
    <div className={styles.talentMatters}>
      <Icon name='abstract-1' />
      <SectionTitle>Talent matters</SectionTitle>
      <Paragraph className={styles.talentMattersParagraph}>
        Investing in your people solves skills shortages, <br /> develops new
        and creative growth areas, open up new <br /> revenue possibilities and
        prepares your hospitality <br /> business for a dynamic future.
      </Paragraph>
    </div>
  );
};

export { TalentMatters };
