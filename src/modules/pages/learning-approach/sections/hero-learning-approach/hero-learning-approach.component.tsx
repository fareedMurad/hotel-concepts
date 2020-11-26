import * as React from 'react';
import { HeroProps } from './hero-learning-approach.props';
import * as styles from './hero-learning-approach.scss';
import { HeroTitle, HeroSubtitle, Icon, Button } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';
import { useHeroLearningApproachData } from './hero-learning-approach.hook';
import { useTranslation } from 'react-i18next';
import { LazyBackground } from '@pages/components/lazy-background/lazy-background.component';

/**
 * Renders Hero
 */
const HeroLearningApproach: React.FC<HeroProps> = ({}) => {
  const {
    heroLearningApproachData,
    reducedImage
  } = useHeroLearningApproachData();
  const { t } = useTranslation();

  const [toggleImage, set] = React.useState(false);

  return (
    <div className={styles.hero}>
      <Button className={styles.temp} onClick={() => set(!toggleImage)}>
        {toggleImage
          ? 'Change image current:[grouped]'
          : 'Change image current:[with SVG]'}
      </Button>
      {toggleImage ? (
        <LazyBackground
          className={styles.image}
          fullImageId={'wsal0kfBcI5dB1icnLUQu'}
          reducedImageId={'33zlz89QUmqCUxfAEvgSFu'}
        >
          <main className={styles.heroContent}>
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
          />
        </LazyBackground>
      ) : (
        <LazyBackground
          className={styles.image}
          fullImageId={'1Xh52D8yAy5jSkjVnrW8S1'}
          reducedImageId={'7dcwD5Us9xoMyX6I9yZWt4'}
        >
          <div className={styles.geometry}>
            <Icon name={'geometry/learning-approach'} />
          </div>

          <main className={styles.heroContent}>
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
          />
        </LazyBackground>
      )}
    </div>
  );
};

export { HeroLearningApproach };
