import * as React from 'react';
import { ProgramLearningApproachProps } from './program-learning-approach.props';
import * as styles from './program-learning-approach.scss';
import { Button } from '@core/components';

/**
 * Renders ProgramLearningApproach
 */
const ProgramLearningApproach: React.FC<ProgramLearningApproachProps> = ({ learningApproach }) => {
  return (
    <section className={styles.programLearningApproach}>
      <div className={styles.title}>Learning approach</div>
      <div className={styles.content}>
        {learningApproach.map((item, index) => (
          <div className={styles.item} key={index}>
            <div>{item.name}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
      <Button className={styles.button}>
        <div>Learn more</div> <div>→</div>
      </Button>
    </section>
  );
};

export { ProgramLearningApproach };
