import * as React from 'react';
import { TrainingInfoProps } from './training-info.props';
import * as styles from './training-info.scss';
import { useTrainingInfoData } from './training-info.hook';
import { Button, PreCaption, SectionTitle } from '@core/components';

/**
 * Renders TrainingInfo
 */
const TrainingInfo: React.FC<TrainingInfoProps> = ({}) => {
  const { data } = useTrainingInfoData();

  return (
    <section className={styles.trainingInfo}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <PreCaption>Systematic Approach</PreCaption>
            <SectionTitle>Online Executive Training</SectionTitle>
            <div>
              Cordie online courses are nothing like a typical
              sit-back-and-listen lecture.
              <br /> You’ll engage in a new activity every three to five
              minutes. Each element is designed to keep you interested &
              involved.
            </div>
          </div>
          <Button
            className={styles.button}
            children='Learn more'
            arrow='&#8594;'
            width={224}
          />
        </div>
        <div className={styles.info}>
          {data.map((info, index) => (
            <div className={styles.infoItem} key={index}>
              {info}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.img} />
    </section>
  );
};

export { TrainingInfo };
