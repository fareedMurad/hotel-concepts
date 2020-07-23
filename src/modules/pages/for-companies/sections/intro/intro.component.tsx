import * as React from 'react';
import { IntroProps } from './intro.props';
import * as styles from './intro.scss';
import { Button, HeroTitle, HeroSubtitle } from '@core/components';
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
        <HeroTitle className={styles.introCaption}>
          Hospitality education <br /> designed for impact
        </HeroTitle>
        <HeroSubtitle className={styles.introDescription}>
          Enforce your people and power your future
        </HeroSubtitle>
        <Button
          className={styles.button}
          onClick={ScrollToEnroll}
          children='Contact us'
          arrow='&rarr;'
        />
      </main>
      <ScrollButton text='Scroll' className={styles.arrow} />
    </div>
  );
};

export { Intro };
