import * as React from 'react';
import { ProgramAboutProps } from './program-about.props';
import * as styles from './program-about.scss';
import { useProgramAboutData } from './program-about.hook';
import { Spinner } from '@core/components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

/**
 * Renders ProgramAbout
 */
const ProgramAbout: React.FC<ProgramAboutProps> = ({ programId }) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const { programAboutData, programAboutLoading } = useProgramAboutData(
    programId,
    language
  );

  if (programAboutLoading) return <Spinner />;
  const { aboutText, skills } = programAboutData;

  return (
    <section id='about' className={styles.programAbout}>
      <div className={styles.title}>
        <div>{t('program-page.about.title')}</div>
        <div>{aboutText}</div>
      </div>
      <div className={styles.skillsWrapper}>
        <div className={styles.skills}>
          <div>{t('program-page.about.sub-title')}</div>
          {skills.map((item, index) => (
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
