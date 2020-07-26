import * as React from 'react';
import { HeroProps } from './course-partnership-hero.props';
import * as styles from './course-partnership-hero.scss';
import { Button, HeroTitle, HeroSubtitle } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';
import { useCoursePartnershipHeroData } from './course-partnership-hero.hook';

/**
 * Renders Hero
 */
const CoursePartnershipHero: React.FC<HeroProps> = ({}) => {
  const { coursePartnershipHeroData } = useCoursePartnershipHeroData();

  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${coursePartnershipHeroData})` }}
    >
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

export { CoursePartnershipHero };
