import * as React from 'react';
import { ProgramLearningApproachProps } from './program-learning-approach.props';
import * as styles from './program-learning-approach.scss';
import { Button } from '@core/components';

/**
 * Renders ProgramLearningApproach
 */
const ProgramLearningApproach: React.FC<ProgramLearningApproachProps> = ({}) => {
  const data = [
    {
      name: "Sprints",
      description: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn  the high impact skills that are needed in today’s hospitality ecosystem."
    },
    {
      name: "Tests & Quizzes",
      description: "Our quality curriculum is designed with top-tier ndustry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem."
    },
    {
      name: "Videos",
      description: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem."
    },
    {
      name: "Case Studies",
      description: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem."
    },
    {
      name: "Practical Assignments",
      description: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem."
    },
    {
      name: "Q&A sessions",
      description: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem."
    }
  ];
  return (
    <section className={styles.programLearningApproach}>
      <div className={styles.title}>Learning approach</div>
      <div className={styles.content}>
        {data.map((item, index) => (
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
