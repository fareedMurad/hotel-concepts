import * as React from 'react';
import { ProgramAboutProps } from './program-about.props';
import * as styles from './program-about.scss';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

/**
 * Renders ProgramAbout
 */
const ProgramAbout: React.FC<ProgramAboutProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section id='about' className={styles.programAbout}>
      <div className={styles.title}>
        <div>{t('program-page.about.title')}</div>
        <div>{data?.about?.aboutText}</div>
      </div>
      <div className={styles.skillsWrapper}>
        <div className={styles.skills}>
          <div>{t('program-page.about.sub-title')}</div>
          {data?.about?.skills.map((item, index) => (
            <div className={styles.item} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProgramAbout };
