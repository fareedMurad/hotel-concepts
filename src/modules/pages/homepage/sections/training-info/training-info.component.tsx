import * as React from 'react';
import { TrainingInfoProps } from './training-info.props';
import * as styles from './training-info.scss';
import { useTrainingInfoData } from './training-info.hook';
import { Button, PreCaption, SectionTitle } from '@core/components';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { useTranslation } from 'react-i18next';

/**
 * Renders TrainingInfo
 */
const TrainingInfo: React.FC<TrainingInfoProps> = ({}) => {
  const { trainingData, trainingInfoImage } = useTrainingInfoData();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <section className={styles.trainingInfo}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <PreCaption>{t('home.training-info.pre-caption')}</PreCaption>
            <SectionTitle>{t('home.training-info.title')}</SectionTitle>
            <div>{t('home.training-info.description')}</div>
          </div>
          <Button
            className={styles.button}
            children={t('home.training-info.button-text')}
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
