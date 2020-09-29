import * as React from 'react';
import {
  OurMissionVisionProps,
  ExploreProgramsContainerProps
} from './our-mission-vision.props';
import * as styles from './our-mission-vision.scss';
import { HeroCaption } from '@pages/story-mission/components';
import { Paragraph, H2, Button, SectionTitle } from '@core/components';
import { Link } from 'react-router-dom';
import { useOurMissionVisionData } from './our-mission-vision.hook';
import { useTranslation } from 'react-i18next';

const ExploreProgramContainer: React.FC<ExploreProgramsContainerProps> = ({
  program
}) => {
  const { rate, caption, id, description } = program;
  const { t } = useTranslation();
  return (
    <div className={styles.program}>
      <div className={styles.programBlock}>
        <div className={styles.programBlockRate}>{rate}</div>
        <div className={styles.programBlockCaption}>{caption}</div>
      </div>
      <Paragraph className={styles.programBlockDescription}>
        {description}
      </Paragraph>
      <Link to={`/in-progress/${id}`} className={styles.programBlockBtn}>
        <Button
          theme='secondary'
          width={224}
          children={t('story-mission.our-mission.button-text')}
          arrow
        />
      </Link>
    </div>
  );
};
/**
 * Renders OurMissionVision
 */
const OurMissionVision: React.FC<OurMissionVisionProps> = ({}) => {
  const { programs, ourMissionImage } = useOurMissionVisionData();
  const { t } = useTranslation();
  return (
    <div className={styles.ourMissionVision} id='mission'>
      <section
        className={styles.heroBlock}
        style={{
          backgroundImage: `url(${ourMissionImage})`
        }}
      >
        <HeroCaption
          title={t('story-mission.our-mission.title')}
          className={styles.heroCaption}
        />
        <Paragraph className={styles.heroDescription}>
          {t('story-mission.our-mission.text')}
        </Paragraph>
      </section>
      <section className={styles.kordie}>
        <div className={styles.kordieWrapper} id='our-work'>
          <SectionTitle>{t('story-mission.kordie-impact.title')}</SectionTitle>
          <Paragraph className={styles.kordieParagraph}>
            {t('story-mission.kordie-impact.text')}
          </Paragraph>
        </div>
        <div className={styles.programsList}>
          {programs.map(program => (
            <ExploreProgramContainer program={program} key={program.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export { OurMissionVision };
