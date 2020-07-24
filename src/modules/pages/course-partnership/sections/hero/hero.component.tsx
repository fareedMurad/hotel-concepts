import * as React from 'react';
import { HeroProps } from './hero.props';
import * as styles from './hero.scss';
import { Button, HeroTitle, HeroSubtitle } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';

/**
 * Renders Hero
 */
const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className={styles.hero}>
      <main className={styles.heroContent}>
        <HeroTitle className={styles.heroCaption}>
          Program Partnership <br /> with Kordie
        </HeroTitle>
        <HeroSubtitle className={styles.heroDescription}>
          Combining Kordie’ expertise with the <br />
          insights of industry leaders
        </HeroSubtitle>
        <a href='#get-involved'>
          <Button
            className={styles.button}
            children='Contact us'
            arrow='&rarr;'
          />
        </a>
      </main>
      <ScrollButton text='Scroll' className={styles.arrow} />
    </div>
  );
};

export { Hero };
