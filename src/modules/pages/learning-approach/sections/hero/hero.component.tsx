import * as React from 'react';
import { HeroProps } from './hero.props';
import * as styles from './hero.scss';
import { H1, Icon, H2, Paragraph } from '@core/components';
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
          <H1 className={styles.heroCaption}>Our Learning Approach</H1>
          <div className={styles.heroDescription}>
            Experience transformational hospitality e-learning bringing together
            the best in industry and academia, dedicated mentorship, new
            technologies and intensive support
          </div>
        </main>
        <ScrollButton text='Scroll' className={styles.arrow} />
      </div>
    </div>
  );
};

export { Hero };
