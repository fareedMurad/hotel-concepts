import * as React from 'react';
import { MeetKordieProps } from './meet-kordie.props';
import * as styles from './meet-kordie.scss';
import { Icon, H2, Paragraph, SectionTitle } from '@core/components';
import { useTranslation } from 'react-i18next';
import { useToggleAnimate } from '@pages/learning-approach/toggle-animation.hook';
import { animated } from 'react-spring';
import { useAnimation } from '@pages/learning-approach/animations/animations.hook';

/**
 * Renders MeetKordie
 */
const MeetKordie: React.FC<MeetKordieProps> = ({}) => {
  const ref = React.useRef(null);
  const { t } = useTranslation();
  React.useEffect(() => {}, [ref]);
  const { toggle } = useToggleAnimate(ref);

  const { textAnimation, titleAnimation } = useAnimation(toggle);

  return (
    <div className={styles.meetKordie} ref={ref}>
      <animated.div style={titleAnimation}>
        <Icon name='abstract-1' />
        <SectionTitle className={styles.meetKordieTitle}>
          {t('learning-approach.meet-kordie.title')}
        </SectionTitle>
      </animated.div>
      <animated.div style={textAnimation}>
        <Paragraph className={styles.meetKordieDescription}>
          {t('learning-approach.meet-kordie.description')}
        </Paragraph>
      </animated.div>
    </div>
  );
};

export { MeetKordie };
