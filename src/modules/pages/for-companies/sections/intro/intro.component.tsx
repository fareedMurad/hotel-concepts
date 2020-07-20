import * as React from 'react';
import { IntroProps } from './intro.props';
import * as styles from './intro.scss';
import { H1, Button } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';
import { scrollTo } from '@core/helpers/scroll-to.helper';

/**
 * Renders Intro
 */
const Intro: React.FC<IntroProps> = ({}) => {
  const ScrollToEnroll = () => {
    scrollTo('consult-request');
  };

  return (
    <div className={styles.intro}>
      <main className={styles.introContent}>
        <H1 className={styles.introCaption}>
          Hospitality education designed for impact
        </H1>
        <div className={styles.introDescription}>
          Enforce your people and power your future
        </div>
        <Button className={styles.button} onClick={ScrollToEnroll}>
          <div>Contact Us</div>
          <div>&rarr;</div>
        </Button>
      </main>
      <ScrollButton text='Scroll' className={styles.arrow} />
    </div>
  );
};

export { Intro };
