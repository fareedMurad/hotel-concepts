import * as React from 'react';
import { PartneringForSuccessProps } from './partnering-for-success.props';
import * as styles from './partnering-for-success.scss';
import { Icon, H2, Paragraph, SectionTitle } from '@core/components';
import { useTranslation } from 'react-i18next';

/**
 * Renders PartneringForSuccess
 */
const PartneringForSuccess: React.FC<PartneringForSuccessProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.partneringForSuccess}>
      <div className={styles.partnering}>
        <Icon name='abstract-1' />
        <SectionTitle>
          {t('course-partnership.partnering-for-success.title')}
        </SectionTitle>
        <Paragraph>
          {t('course-partnership.partnering-for-success.description')}
        </Paragraph>
      </div>
      <div className={styles.hr} />
      <div className={styles.howProgram}>
        <H2 className={styles.howProgramTitle}>
          {t('course-partnership.how-program.title')}
        </H2>
        <div className={styles.howProgramDescription}>
          <Paragraph className={styles.howProgramDescriptionBlock}>
            {t('course-partnership.how-program.description1')}
          </Paragraph>
          <Paragraph className={styles.howProgramDescriptionBlock}>
            {t('course-partnership.how-program.description2')}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export { PartneringForSuccess };
