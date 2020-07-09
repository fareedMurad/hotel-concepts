import * as React from 'react';
import { HowBecomePartnerProps } from './how-become-partner.props';
import * as styles from './how-become-partner.scss';
import { H2, Icon } from '@core/components';
import { Card } from './card';
import { useCourseHook } from '@pages/course/course.hook';

/**
 * Renders HowBecomePartner
 */
const HowBecomePartner: React.FC<HowBecomePartnerProps> = ({}) => {
  const { cardsData } = useCourseHook();
  return (
    <div className={styles.howBecomePartner}>
      <div className={styles.howBecomePartnerTitle}>
        <Icon name='abstract-1' />
        <H2>
          Who can become a <br /> Partner?
        </H2>
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
