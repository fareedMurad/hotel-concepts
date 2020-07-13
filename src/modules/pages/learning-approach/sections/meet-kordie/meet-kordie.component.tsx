import * as React from 'react';
import { MeetKordieProps } from './meet-kordie.props';
import * as styles from './meet-kordie.scss';
import { Icon, H2, Paragraph } from '@core/components';

/**
 * Renders MeetKordie
 */
const MeetKordie: React.FC<MeetKordieProps> = ({}) => {
  return (
    <div className={styles.meetKordie}>
      <Icon name='abstract-1' />
      <H2 className={styles.meetKordieTitle}>Meet Kordie</H2>
      <Paragraph className={styles.meetKordieDescription}>
        Kordie - is online university for hospitality. We deliver practical
        programs and courses developed in team with key industry leaders, most
        relevant approach to education, case based assignments and mentorship
        from leading experts.
      </Paragraph>
    </div>
  );
};

export { MeetKordie };
