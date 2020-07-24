import * as React from 'react';
import { HowWeTeachProps } from './how-we-teach.props';
import * as styles from './how-we-teach.scss';
import { useHowWeTeachData } from './how-we-teach.hook';
import { Caption } from '@pages/components';
import { H1, SectionTitle } from '@core/components';

/**
 * Instrument and Tools Card
 */
const ToolsCard = ({ title, description }) => (
  <div className={styles.toolsCard}>
    <div className={styles.toolsCardTitle}>{title}</div>
    <div className={styles.toolsCardDescription}>{description}</div>
  </div>
);
/**
 * World Class Card
 */
const WorldClassCard = ({ img, title, description }) => (
  <div className={styles.wccCard}>
    <img src={require(`img/${img}`)} className={styles.wccImage} />
    <div className={styles.wccText}>
      <div className={styles.wccTextTitle}>{title}</div>
      <div className={styles.wccTextDescription}>{description}</div>
    </div>
  </div>
);
/**
 * Renders HowWeTeach
 */
const HowWeTeach: React.FC<HowWeTeachProps> = ({}) => {
  const { data } = useHowWeTeachData();

  return (
    <div className={styles.howWeTeach}>
      <SectionTitle className={styles.title}>How we teach</SectionTitle>
      <Caption rate='1.0' title='World class content' />
      <section className={styles.wrapper}>
        <div className={styles.wccCards}>
          <WorldClassCard
            img={'learning-approach/wcc-1'}
            title='Cutting Edge Curriculum '
            description='Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact practical skills needed in hospitality of today and tomorrow. '
          />
          <WorldClassCard
            img={'learning-approach/wcc-2'}
            title='Relevant approach to education'
            description='Programs developed with a combination of best practices in best traditional hospitality education and most innovative e-learning approaches and technology.'
          />
        </div>
      </section>
      <Caption rate='2.0' title='Flexibility'>
        Each program is spread over weekly sprints which are comprehensive on
        their own. You can enrol for a whole program or for a particular sprints
        to get a custom learning plan tailored to fit your busy life. Along with
        easy monthly payments you can learn at your own pace and reach your
        personal goals.
      </Caption>
      <Caption rate='3.0' title='Instruments and tools'>
        We implement innovative and complex learning system to measure and build
        skills. We combine these with mentorship for maximum impact.
      </Caption>
      <div className={styles.toolsCards}>
        {data.map(({ title, description, id }) => (
          <ToolsCard key={id} title={title} description={description} />
        ))}
      </div>
      <Caption rate='4.0' title='Personal approach'>
        Personalised coaching at each step, live open sessions with your mentors
        and frequent interaction ensures an immersive and interactive learning
        experience.
      </Caption>
    </div>
  );
};

export { HowWeTeach };
