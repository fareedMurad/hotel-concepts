import * as React from 'react';
import { HeroProps } from './hero-learning-approach.props';
import * as styles from './hero-learning-approach.scss';
import { HeroTitle, HeroSubtitle } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';
import { useHeroLearningApproachData } from './hero-learning-approach.hook';
import { useTranslation } from 'react-i18next';
import { LazyBackground } from './hero-image';

/**
 * Renders Hero
 */
const HeroLearningApproach: React.FC<HeroProps> = ({}) => {
  // const {
  //   heroLearningApproachData,
  //   reducedImage
  // } = useHeroLearningApproachData();
  const { t } = useTranslation();

  // <div
  //       style={{ backgroundImage: `url(${heroLearningApproachData})` }}
  //       className={styles.image}
  //     >

  return (
    <div className={styles.hero}>
      <div className={styles.image}>
        <LazyBackground />
      </div>
      {/* <main className={styles.heroContent}>
          <HeroTitle className={styles.heroCaption}>
            {t('learning-approach.hero.title')}
          </HeroTitle>
          <HeroSubtitle className={styles.heroDescription}>
            {t('learning-approach.hero.description')}
          </HeroSubtitle>
        </main>
        <ScrollButton
          text={t('learning-approach.hero.scroll')}
          className={styles.arrow}
        /> */}
      {/* </div> */}
    </div>
  );
};

export { HeroLearningApproach };
