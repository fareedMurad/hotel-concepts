import * as React from 'react';
import { TrainingInfoProps } from './training-info.props';
import * as styles from './training-info.scss';
import { useTrainingInfoData } from './training-info.hook';
import { Button, PreCaption, SectionTitle } from '@core/components';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';

/**
 * Renders TrainingInfo
 */
const TrainingInfo: React.FC<TrainingInfoProps> = ({}) => {
  const { trainingData, trainingInfoImage } = useTrainingInfoData();
  const dispatch = useDispatch();
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
            onClick={() => dispatch(navigate('/learning-approach'))}
          />
        </div>
        <div className={styles.info}>
          {trainingData.map((info, index) => (
            <div className={styles.infoItem} key={index}>
              {info}
            </div>
          ))}
        </div>
      </div>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${trainingInfoImage})` }}
      />
    </section>
  );
};

export { TrainingInfo };
