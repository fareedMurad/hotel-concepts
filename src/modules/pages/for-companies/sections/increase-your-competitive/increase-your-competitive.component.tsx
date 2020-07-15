import * as React from 'react';
import { IncreaseYourCompetitiveProps } from './increase-your-competitive.props';
import * as styles from './increase-your-competitive.scss';
import { Icon, H3, Paragraph } from '@core/components';

/**
 * Renders IncreaseYourCompetitive
 */
const IncreaseYourCompetitive: React.FC<IncreaseYourCompetitiveProps> = ({}) => {
  return (
    <div className={styles.increaseYourCompetitive}>
      <Icon name='abstract-1' />
      <H3>
        Increase your competitive <br /> advantage with new <br /> knowledge.{' '}
      </H3>
      <Paragraph className={styles.increaseYourCompetitiveText}>
        Kordie innovates the way hospitality professionals learn and travel
        organisations <br /> develop talent. Powerful knowledge is brought
        directly to you in a convenient, <br /> flexible way. Connect with
        Kordie’s renowned faculty and mentors from all over <br /> the world to
        deepen your expertise. Scale the learning across your hospitality <br />
        business to drive powerful results.
      </Paragraph>
    </div>
  );
};

export { IncreaseYourCompetitive };