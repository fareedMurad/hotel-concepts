import * as React from 'react';
import { StoryMissionProps } from './story-mission.props';
import * as styles from './story-mission.scss';
import { Header } from '@core/components/header';
import {
  Button,
  H2,
  Paragraph,
  Footer,
  HeroTitle,
  HeroSubtitle,
  SectionTitle
} from '@core/components';
import { useStoryMissionData } from './story-mission.hook';
import { HeroCaption } from './components';
import { ManagingHospitality, OurMissionVision } from './sections';
import { OurFoundingValues } from './sections/our-founding-values';
import { PartnerApply } from '@pages/components';
import { scrollTo } from '@core/helpers/scroll-to.helper';

const Hr = () => {
  return <div className={styles.hr} />;
};
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
const StoryMission: React.FC<StoryMissionProps> = ({}) => {
  const { anchors, storyMissionHeroImage } = useStoryMissionData();

  return (
    <div className={styles.storyMission}>
      <header className={styles.header}>
        <Header />
        <div
          style={{
            backgroundImage: `url(${storyMissionHeroImage})`
          }}
          className={styles.headerImg}
        >
          <div className={styles.headerContent}>
            <HeroTitle>About Kordie</HeroTitle>
            <HeroSubtitle className={styles.headerContentDescription}>
              New Knowledge for the New <br />
              Hospitality Economy
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
                children='Contact us'
                arrow='&#8594;'
                width='inherit'
              />
            </div>
          </div>
        </div>
      </header>
      <HeroCaption
        id='overview'
        className={styles.captionContainer}
        title='Hospitality education designed for impact'
        description='Kordie - is online university for hospitality. We deliver practical programs and courses developed in team with key industry leaders, most relevant approach to education, case based assignments and mentorship from leading experts.'
      />
      <Hr />
      <ManagingHospitality />
      <Hr />
      <section className={styles.whyKordieSection}>
        <SectionTitle className={styles.whyKordieTitle}>
          Why 'Kordie' ?
        </SectionTitle>
        <main className={styles.whyKordieContainer}>
          <SectionTitle className={styles.animation}>
            Animation here
          </SectionTitle>
          <div className={styles.whyKordieParagraph}>
            <Paragraph>
              Hospitality and Cordiality are inseparable. Principle of
              cordiality, more than a mere politeness, is at the very heart of
              any business or relations within hospitality industry.
            </Paragraph>
            <Paragraph>
              The aspects of cordiality - welcome, warmth, kindness,
              friendliness, sociability - are the core of our company, just as
              for any hospitality business.
            </Paragraph>
          </div>
        </main>
      </section>
      <OurMissionVision />
      <OurFoundingValues />
      <PartnerApply
        title='Want to get involved?'
        subtitle='We’re always happy to talk if you are interested in becoming a Partner'
      />
      <Footer />
    </div>
  );
};

export { StoryMission };
