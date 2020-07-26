import * as React from 'react';
import { HeroProps } from './hero-learning-approach.props';
import * as styles from './hero-learning-approach.scss';
import { HeroTitle, HeroSubtitle } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';
import { useHeroLearningApproachData } from './hero-learning-approach.hook';

/**
 * Renders Hero
 */
const HeroLearningApproach: React.FC<HeroProps> = ({}) => {
  const { heroLearningApproachData } = useHeroLearningApproachData();

  return (
    <div className={styles.hero}>
      <div
        style={{ backgroundImage: `url(${heroLearningApproachData})` }}
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

export { HeroLearningApproach };
