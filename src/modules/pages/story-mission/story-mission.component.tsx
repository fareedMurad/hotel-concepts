import * as React from 'react';
import * as styles from './story-mission.scss';
import {
  Button,
  HeroSubtitle,
  HeroTitle,
  Paragraph,
  SectionTitle
} from '@core/components';
import { ManagingHospitality, OurMissionVision } from './sections';
import { HeroCaption } from './components';
import { OurFoundingValues } from './sections/our-founding-values';
import { PartnerApply } from '@pages/components';
import { ScrollToTop } from '@app';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useStoryMissionData } from './story-mission.hook';
import { useTranslation } from 'react-i18next';
import { LazyBackground } from '@pages/components/lazy-background/lazy-background.component';
import { useMediaPoints } from '@core/shared';

const Hr = () => <div className={styles.hr} />;
/**
 * Renders anchors
 */
const Anchor: React.FC<{ anchor: string; rate: string; caption: string }> = ({
  anchor,
  rate,
  caption
}) => {
  const ScrollToEnroll = to => {
    scrollTo(to);
  };
  return (
    <div onClick={() => ScrollToEnroll(anchor)} className={styles.anchor}>
      <div className={styles.anchorRate}>{rate}</div>
      <div className={styles.anchorCaption}>{caption}</div>
    </div>
  );
};
/**
 * Renders StoryMission
 */
const StoryMission: React.FC = () => {
  const {
    anchors,
    fullImageId,
    reducedImageId,
    mobileImageId
  } = useStoryMissionData();
  const { t } = useTranslation();

  const { mobile } = useMediaPoints();

  return (
    <div className={styles.storyMission}>
      <ScrollToTop />
      <header className={styles.header}>
        <LazyBackground
          fullImageId={mobile ? mobileImageId : fullImageId}
          reducedImageId={reducedImageId}
          className={styles.headerImg}
        >
          <div className={styles.headerContent}>
            <HeroTitle className={styles.headerContentTitle}>
              {t('story-mission.title')}
            </HeroTitle>
            <HeroSubtitle className={styles.headerContentDescription}>
              {t('story-mission.description')}
            </HeroSubtitle>
            <div className={styles.headerBar}>
              {anchors.map(item => {
                const { anchor, rate, caption } = item;
                return (
                  <Anchor
                    anchor={anchor}
                    rate={rate}
                    caption={caption}
                    key={item.id}
                  />
                );
              })}

              <Button
                className={styles.headerBtn}
                onClick={() => scrollTo('get-involved')}
                children={t('story-mission.button-text')}
                arrow
                width='inherit'
              />
            </div>
          </div>
        </LazyBackground>
      </header>
      <HeroCaption
        id='overview'
        className={styles.captionContainer}
        title={t('story-mission.caption.title')}
        description={t('story-mission.caption.description')}
      />
      <Hr />
      <ManagingHospitality />
      <Hr />
      <section className={styles.whyKordieSection}>
        <SectionTitle className={styles.whyKordieTitle}>
          {t('story-mission.why-cordie.title')}
        </SectionTitle>
        <main className={styles.whyKordieContainer}>
          <SectionTitle className={styles.animation}>
            Animation here
          </SectionTitle>
          <div className={styles.whyKordieParagraph}>
            <Paragraph>{t('story-mission.why-cordie.paragraph1')}</Paragraph>
            <Paragraph>{t('story-mission.why-cordie.paragraph2')}</Paragraph>
          </div>
        </main>
      </section>
      <OurMissionVision />
      <OurFoundingValues />
      <PartnerApply
        title={t('story-mission.form.title')}
        subtitle={t('story-mission.form.subtitle')}
      />
    </div>
  );
};

export { StoryMission };
