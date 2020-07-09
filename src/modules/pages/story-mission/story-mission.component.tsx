import * as React from 'react';
import { StoryMissionProps } from './story-mission.props';
import * as styles from './story-mission.scss';
import { Header } from '@core/components/header';
import { Button, H2, Paragraph } from '@core/components';
import { useStoryMissionData } from './story-mission.hook';
import { HeroCaption } from './components';
import { ManagingHospitality, OurMissionVision } from './sections';

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
  return (
    <a href={anchor} className={styles.anchor}>
      <div className={styles.anchorRate}>{rate}</div>
      <div className={styles.anchorCaption}>{caption}</div>
    </a>
  );
};
/**
 * Renders StoryMission
 */
const StoryMission: React.FC<StoryMissionProps> = ({}) => {
  const { anchors } = useStoryMissionData();

  return (
    <div className={styles.storyMission}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Header />
        </nav>
        <div
          style={{
            backgroundImage: `url(${require('img/story-mission/story-mission-1.png')})`
          }}
          className={styles.headerImg}
        />
        <div className={styles.headerContent}>
          <div>About Kordie</div>
          <div>New Knowledge for the New Hospitality Economy</div>
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
            <Button className={styles.headerBtn}>
              <div>Contact us</div> <div>&#8594;</div>
            </Button>
          </div>
        </div>
      </header>
      <HeroCaption
        className={styles.captionContainer}
        title='Hospitality education designed for impact'
        description='Kordie - is online university for hospitality. We deliver practical programs and courses developed in team with key industry leaders, most relevant approach to education, case based assignments and mentorship from leading experts.'
      />
      <Hr />
      <ManagingHospitality />
      <Hr />
      <section>
        <H2 className={styles.whyKordieTitle}>Why 'Kordie' ?</H2>
        <main className={styles.whyKordieContainer}>
          <H2 className={styles.animation}>Animation here</H2>
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
    </div>
  );
};

export { StoryMission };
