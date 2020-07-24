import * as React from 'react';
import { PartneringForSuccessProps } from './partnering-for-success.props';
import * as styles from './partnering-for-success.scss';
import { Icon, H2, Paragraph, SectionTitle } from '@core/components';

/**
 * Renders PartneringForSuccess
 */
const PartneringForSuccess: React.FC<PartneringForSuccessProps> = ({}) => {
  return (
    <div className={styles.partneringForSuccess}>
      <div className={styles.partnering}>
        <Icon name='abstract-1' />
        <SectionTitle>
          Partnering for <br /> Success
        </SectionTitle>
        <Paragraph>
          Kordie is proud to partner with a select number of <br />{' '}
          organisations, partnerships which allow us to provide <br /> access to
          exclusive knowledge and practice for <br /> specific sectors.
        </Paragraph>
      </div>
      <div className={styles.hr} />
      <div className={styles.howProgram}>
        <H2 className={styles.howProgramTitle}>
          How Program <br /> Partnership works?
        </H2>
        <div className={styles.howProgramDescription}>
          <Paragraph className={styles.howProgramDescriptionBlock}>
            A Kordie partner is an organisation that creates courses together
            with us by sharing knowledge and expertise.
          </Paragraph>
          <Paragraph className={styles.howProgramDescriptionBlock}>
            A partner engages in creating the program content, with guidance
            from us on learning design, and we then work together to put the
            course onto the platform.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export { PartneringForSuccess };
