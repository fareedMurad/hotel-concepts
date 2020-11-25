import * as React from 'react';
import { HowWeTeachProps } from './how-we-teach.props';
import * as styles from './how-we-teach.scss';
import { useHowWeTeachData } from './how-we-teach.hook';
import { AnimatedCaption } from '@pages/components';
import { H1, SectionTitle } from '@core/components';
import { useTranslation } from 'react-i18next';
import { useAnimation } from '@pages/learning-approach/animations/animations.hook';
import { useToggleAnimate } from '@pages/learning-approach/toggle-animation.hook';
import { animated } from 'react-spring';
import { Cards } from './components/cards';

/**
 * Instrument and Tools Card
 */
const ToolsCard = ({ title, description }) => {
  const ref = React.useRef();
  const { toggle } = useToggleAnimate(ref);
  const { cardAnimation } = useAnimation(toggle);
  return (
    <animated.div className={styles.toolsCard} style={cardAnimation} ref={ref}>
      <div className={styles.toolsCardTitle}>{title}</div>
      <div className={styles.toolsCardDescription}>{description}</div>
    </animated.div>
  );
};

/**
 * Renders HowWeTeach
 */
const HowWeTeach: React.FC<HowWeTeachProps> = ({}) => {
  const { t } = useTranslation();
  const ref = React.useRef();
  const { data } = useHowWeTeachData();
  const { toggle } = useToggleAnimate(ref);
  const { titleAnimation } = useAnimation(toggle);
  return (
    <div className={styles.howWeTeach} ref={ref}>
      <animated.div style={titleAnimation}>
        <SectionTitle className={styles.title}>
          {t('learning-approach.how-we-teach.title')}
        </SectionTitle>
      </animated.div>
      <Cards />
      <AnimatedCaption
        className={styles.captionWrapper}
        rate='1.0'
        title={t('learning-approach.word-class-cards.wcc1.title')}
      />
      <AnimatedCaption
        rate='2.0'
        title={t('learning-approach.word-class-cards.wcc2.title')}
      >
        {t('learning-approach.word-class-cards.wcc2.description')}
      </AnimatedCaption>
      <AnimatedCaption
        rate='3.0'
        title={t('learning-approach.word-class-cards.wcc3.title')}
      >
        {t('learning-approach.word-class-cards.wcc3.description')}
      </AnimatedCaption>
      <div className={styles.toolsCards}>
        {data.map(({ title, description, id }) => (
          <ToolsCard key={id} title={title} description={description} />
        ))}
      </div>
      <AnimatedCaption
        rate='4.0'
        title={t('learning-approach.word-class-cards.wcc4.title')}
        className={styles.captionPersonalApproach}
      >
        {t('learning-approach.word-class-cards.wcc4.description')}
      </AnimatedCaption>
    </div>
  );
};

export { HowWeTeach };
