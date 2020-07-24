import * as React from 'react';
import { HeroProps } from './hero.props';
import * as styles from './hero.scss';
import { HeroTitle, HeroSubtitle } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';

/**
 * Renders Hero
 */
const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className={styles.hero}>
      <div
        style={{
          backgroundImage: `url(${require('img/learning-approach/home.png')})`
        }}
        className={styles.image}
      >
        <main className={styles.heroContent}>
          <HeroTitle className={styles.heroCaption}>
            Our Learning <br /> Approach
          </HeroTitle>
          <HeroSubtitle className={styles.heroDescription}>
            Experience transformational hospitality e-learning bringing together
            <br />
            the best in industry and academia, dedicated mentorship, new <br />
            technologies and intensive support
          </HeroSubtitle>
        </main>
        <ScrollButton text='Scroll' className={styles.arrow} />
      </div>
    </div>
  );
};

export { Hero };
