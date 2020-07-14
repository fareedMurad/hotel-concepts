import * as React from 'react';
import { HeroProps } from './hero.props';
import * as styles from './hero.scss';
import { Button, H1, PreCaption } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';

/**
 * Renders Hero
 */
const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className={styles.hero}>
      <main className={styles.heroContent}>
        <H1 className={styles.heroCaption}>Program Partnership with Kordie</H1>
        <PreCaption className={styles.heroDescription}>
          Combining Kordie’ expertise with the insights of industry leaders
        </PreCaption>
        <a href='#get-involved'>
          <Button className={styles.button}>
            <div>Contact Us</div>
            <div>&rarr;</div>
          </Button>
        </a>
      </main>
      <ScrollButton text='Scroll' className={styles.arrow} />
    </div>
  );
};

export { Hero };
