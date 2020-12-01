import * as React from 'react';
import * as styles from './course-partnership-hero.scss';
import { Button, HeroTitle, HeroSubtitle } from '@core/components';
import { HeroProps } from './course-partnership-hero.props';
import { ScrollButton } from '@core/components/scroll-button';
import { useCoursePartnershipHeroData } from './course-partnership-hero.hook';
import { useTranslation } from 'react-i18next';
import { LazyBackground } from '@pages/components/lazy-background/lazy-background.component';
import { useMediaPoints } from '@core/shared';

/**
 * Renders Hero
 */
const CoursePartnershipHero: React.FC<HeroProps> = ({}) => {
  const {
    reducedImageId,
    fullImageId,
    mobileImageId
  } = useCoursePartnershipHeroData();
  const { t } = useTranslation();

  const { mobile } = useMediaPoints();

  return (
    <LazyBackground
      className={styles.hero}
      reducedImageId={reducedImageId}
      fullImageId={mobile ? mobileImageId : fullImageId}
    >
      <main className={styles.heroContent}>
        <HeroTitle className={styles.heroCaption}>
          {t('course-partnership.hero.title')}
        </HeroTitle>
        <HeroSubtitle className={styles.heroDescription}>
          {t('course-partnership.hero.description')}
        </HeroSubtitle>
        <a href='#get-involved'>
          <Button
            className={styles.button}
            children={t('course-partnership.hero.button-text')}
            arrow
            width={230}
          />
        </a>
      </main>
      <ScrollButton
        text={t('course-partnership.hero.scroll')}
        className={styles.arrow}
      />
    </LazyBackground>
  );
};

export { CoursePartnershipHero };
