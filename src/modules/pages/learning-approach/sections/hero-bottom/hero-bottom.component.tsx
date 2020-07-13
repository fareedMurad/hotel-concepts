import * as React from 'react';
import { HeroBottomProps } from './hero-bottom.props';
import * as styles from './hero-bottom.scss';
import { H4, H3, Button } from '@core/components';

/**
 * Renders HeroBottom
 */
const HeroBottom: React.FC<HeroBottomProps> = ({}) => {
  return (
    <div
      className={styles.heroBottom}
      style={{
        backgroundImage: `url(${require(`img/learning-approach/home-footer-1.png`)})`
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <H3 className={styles.heroContentTitle}>
            Make the most of your online learning experience
          </H3>
          <H4 className={styles.heroContentDescription}>
            Explore the latest business insights and thought leadership from
            Kordie
          </H4>
          <Button className={styles.heroContentButton}>
            <div>Explore our insights</div> <div>&#8594;</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export { HeroBottom };
