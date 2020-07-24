import * as React from 'react';
import { ProgramLearningApproachProps } from './program-learning-approach.props';
import * as styles from './program-learning-approach.scss';
import { Button } from '@core/components';
import { Link } from 'react-router-dom';

/**
 * Renders ProgramLearningApproach
 */
const ProgramLearningApproach: React.FC<ProgramLearningApproachProps> = ({
  learningApproach
}) => {
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
      <Link to='/learning-approach'>
        <Button className={styles.button} children='Learn more' arrow='→' />
      </Link>
    </section>
  );
};

export { ProgramLearningApproach };
