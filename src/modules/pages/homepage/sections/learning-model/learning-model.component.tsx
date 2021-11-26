import { SectionTitle } from '@core/components';
import { url } from 'inspector';
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
      <img
        src={require('img/patterns/right-pattern-1.svg')}
        alt={''}
        className={styles.rightPattern}
      />
      <img
        className={styles.leftPattern}
        src={require('img/patterns/left-pattern-1.svg')}
        alt=''
      />
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
      >
        <img
          className={styles.leftPattern}
          src={require('img/patterns/left-pattern-2.svg')}
          alt=''
        />
      </div>
    </div>
  );
};

export { LearningModel };
