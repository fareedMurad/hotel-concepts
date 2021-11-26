import { SectionTitle } from '@core/components';
import * as React from 'react';
import { useLearningModelData } from './learning-model.hook';
import { LearningModelProps } from './learning-model.props';
import * as styles from './learning-model.scss';

/**
 * Renders LearningMode
 */
const LearningModel: React.FC<LearningModelProps> = ({}) => {
  const { cardData, imageUrl } = useLearningModelData();

  return (
    <div className={styles.learningModel}>
      <SectionTitle className={styles.title}>
        The perfected learning model
      </SectionTitle>
      <div className={styles.cards}>
        {cardData.map(el => (
          <div key={el.id} className={styles.card}>
            <div className={styles.cardTitle}>{el.title}</div>
            <div className={styles.description}>{el.description}</div>
          </div>
        ))}
      </div>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
};

export { LearningModel };
