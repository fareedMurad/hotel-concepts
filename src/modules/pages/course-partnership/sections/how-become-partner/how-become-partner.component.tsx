import * as React from 'react';
import { HowBecomePartnerProps } from './how-become-partner.props';
import * as styles from './how-become-partner.scss';
import { H2, Icon, SectionTitle } from '@core/components';
import { Card } from './card';
import { useCoursePartnershipHook } from '@pages/course-partnership/course-partnership.hook';

/**
 * Renders HowBecomePartner
 */
const HowBecomePartner: React.FC<HowBecomePartnerProps> = ({}) => {
  const { cardsData } = useCoursePartnershipHook();
  return (
    <div className={styles.howBecomePartner}>
      <div className={styles.howBecomePartnerTitle}>
        <Icon name='abstract-1' />
        <SectionTitle>
          Who can become a <br /> Partner?
        </SectionTitle>
      </div>
      <div className={styles.cardsRow}>
        {cardsData.map(card => {
          const { id, title, description } = card;

          return (
            <Card key={id} id={id} title={title} description={description} />
          );
        })}
      </div>
    </div>
  );
};

export { HowBecomePartner };
