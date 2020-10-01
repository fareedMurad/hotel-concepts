import * as React from 'react';
import { HeroProps } from './course-partnership-hero.props';
import * as styles from './course-partnership-hero.scss';
import { Button, HeroTitle, HeroSubtitle } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';
import { useCoursePartnershipHeroData } from './course-partnership-hero.hook';
import { useTranslation } from 'react-i18next';

/**
 * Renders Hero
 */
const CoursePartnershipHero: React.FC<HeroProps> = ({}) => {
  const { coursePartnershipHeroData } = useCoursePartnershipHeroData();
  const { t } = useTranslation();

  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${coursePartnershipHeroData})` }}
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
    </div>
  );
};

export { CoursePartnershipHero };
