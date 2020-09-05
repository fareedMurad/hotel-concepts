import * as React from 'react';
import { ProgramLearningApproachProps } from './program-learning-approach.props';
import * as styles from './program-learning-approach.scss';
import { Button, Spinner } from '@core/components';
import { Link } from 'react-router-dom';
import { useProgramLearningApproachData } from './program-learning-approach.hook';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';

/**
 * Renders ProgramLearningApproach
 */
const ProgramLearningApproach: React.FC<ProgramLearningApproachProps> = ({
  programId
}) => {
  const { language } = useSelector((state: State) => state.localization);
  const {
    learningApproachData,
    learningApproachLoading
  } = useProgramLearningApproachData(programId, language);
  const { t } = useTranslation();

  if (learningApproachLoading) return <Spinner />;

  return (
    <section className={styles.programLearningApproach}>
      <div className={styles.title}>
        {t('program-page.learning-approach.title')}
      </div>
      <div className={styles.content}>
        {learningApproachData.map((item, index) => (
          <div className={styles.item} key={index}>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
      <Link to='/learning-approach'>
        <Button
          className={styles.button}
          children={t('program-page.learning-approach.button-text')}
          arrow='→'
        />
      </Link>
    </section>
  );
};

export { ProgramLearningApproach };
