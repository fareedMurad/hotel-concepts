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

const ExploreProgramContainer: React.FC<ExploreProgramsContainerProps> = ({
  program
}) => {
  const { rate, caption, id, description } = program;
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
          children='Explore programs'
          arrow='&#8594;'
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

  return (
    <div className={styles.ourMissionVision} id='mission'>
      <section
        className={styles.heroBlock}
        style={{
          backgroundImage: `url(${ourMissionImage})`
        }}
      >
        <HeroCaption
          title='Our mission & Vision'
          className={styles.heroCaption}
        />
        <Paragraph className={styles.heroDescription}>
          To be your best-in-class online education partner for transformational
          learning that prepares today’s hospitality business leaders and
          organisations for long-term success.
        </Paragraph>
      </section>
      <section className={styles.kordie}>
        <div className={styles.kordieWrapper} id='our-work'>
          <SectionTitle>The Kordie Impact</SectionTitle>
          <Paragraph className={styles.kordieParagraph}>
            Kordie provides world-class online education for hospitality that is
            innovative, practical, and results-focused to prepare individuals
            and organisations for greater success.
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
