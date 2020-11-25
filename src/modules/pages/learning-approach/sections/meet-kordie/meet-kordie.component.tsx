import * as React from 'react';
import { MeetKordieProps } from './meet-kordie.props';
import * as styles from './meet-kordie.scss';
import { Icon, H2, Paragraph, SectionTitle } from '@core/components';
import { useTranslation } from 'react-i18next';
import { useToggleAnimate } from '@pages/learning-approach/animation-wrap';

/**
 * Renders MeetKordie
 */
const MeetKordie: React.FC<MeetKordieProps> = ({}) => {
  const ref = React.useRef(null);
  const { t } = useTranslation();
  React.useEffect(() => {}, [ref]);
  const { toggle } = useToggleAnimate(ref);

  return (
    <div className={styles.meetKordie} ref={ref}>
      <Icon name='abstract-1' />
      <SectionTitle className={styles.meetKordieTitle}>
        {t('learning-approach.meet-kordie.title')}
      </SectionTitle>
      <Paragraph className={styles.meetKordieDescription}>
        {t('learning-approach.meet-kordie.description')}
      </Paragraph>
    </div>
  );
};

export { MeetKordie };
