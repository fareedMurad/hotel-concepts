import * as React from 'react';
import { ProgramLearningApproachProps } from './program-learning-approach.props';
import * as styles from './program-learning-approach.scss';
import { Button } from '@core/components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Renders ProgramLearningApproach
 */
const ProgramLearningApproach: React.FC<ProgramLearningApproachProps> = ({
  data
}) => {
  const { t } = useTranslation();

  return (
    <section className={styles.programLearningApproach}>
      <div className={styles.title}>
        {t('program-page.learning-approach.title')}
      </div>
      <div className={styles.content}>
        {data?.learningApproach.map((item, index) => (
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
