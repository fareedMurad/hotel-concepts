import * as React from 'react';
import { MeetKordieProps } from './meet-kordie.props';
import * as styles from './meet-kordie.scss';
import { Icon, H2, Paragraph, SectionTitle } from '@core/components';
import { useTranslation } from 'react-i18next';

/**
 * Renders MeetKordie
 */
const MeetKordie: React.FC<MeetKordieProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.meetKordie}>
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
