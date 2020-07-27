import * as React from 'react';
import { MeetKordieProps } from './meet-kordie.props';
import * as styles from './meet-kordie.scss';
import { Icon, H2, Paragraph, SectionTitle } from '@core/components';

/**
 * Renders MeetKordie
 */
const MeetKordie: React.FC<MeetKordieProps> = ({}) => {
  return (
    <div className={styles.meetKordie}>
      <Icon name='abstract-1' />
      <SectionTitle className={styles.meetKordieTitle}>
        Meet Kordie
      </SectionTitle>
      <Paragraph className={styles.meetKordieDescription}>
        Kordie - is online university for hospitality. We deliver <br />
        practical programs and courses developed in team with <br />
        key industry leaders, most relevant approach to <br /> education, case
        based assignments and mentorship <br /> from leading experts.
      </Paragraph>
    </div>
  );
};

export { MeetKordie };
