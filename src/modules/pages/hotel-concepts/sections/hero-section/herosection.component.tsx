import * as React from 'react';
import * as styles from './hero-section.scss';
import {
  Button,
  PreCaption,
  SectionTitle,
  HeroSubtitle,
  HeroTitle
} from '@core/components';
import { navigate } from '@router/store';
import { useHeroSectionData } from './herosection.hook';
import { LazyBackground } from '@pages/components/lazy-background/lazy-background.component';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

/**
 * Renders HeroSection
 */
const HeroSection: React.FC = () => {
  const { data } = useHeroSectionData();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <section className={styles.herosection}>
      {/* <LazyBackground
        className={styles.background}
        reducedImageId={'img/herosection.png'}
        fullImageId={'img/herosection.png'}
      /> */}
      <div className={styles.heroWrapper}>
        <div>
          <PreCaption className={styles.precaption}>
            {t('hotel-concepts.hero.pre-caption')}
          </PreCaption>
          <HeroSubtitle className={styles.subtitle}>
            {t('hotel-concepts.hero.sub-title')}
          </HeroSubtitle>
          <HeroTitle className={styles.title}>
            {t('hotel-concepts.hero.title')}
          </HeroTitle>
          {/* <div>{t('hotel-concepts.hero.sub-title')}</div>
        <SectionTitle>{t('hotel-concepts.hero.title')}</SectionTitle> */}
          <div className={styles.discription}>
            <p>{t('hotel-concepts.hero.description')}</p>
          </div>
          <div className={styles.content}>
            <img
              className={styles.img}
              src={require(`img/mvc1.png`)}
              alt='mvp'
            />
            <div className={styles.collaboration}>
              <div className={styles.collaborationTitle}>
                {t('hotel-concepts.hero.collaboration.title')}
              </div>
              <div className={styles.sm}>
                {t('hotel-concepts.hero.collaboration.discription')}
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <img
            className={styles.hero}
            src={require(`img/hero.png`)}
            alt='mvp'
          /> */}
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
