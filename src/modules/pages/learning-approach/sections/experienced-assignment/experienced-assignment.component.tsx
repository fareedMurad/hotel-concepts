import * as React from 'react';
import { ExperiencedAssignmentProps } from './experienced-assignment.props';
import * as styles from './experienced-assignment.scss';
import { useExperiencesAssignmentData } from './experiences-assignment.hook';
import { Icon } from '@core/components';

/**
 * Renders ExperiencedAssignment
 */
const ExperiencedAssignment: React.FC<ExperiencedAssignmentProps> = ({
  title,
  description
}) => {
  const { data } = useExperiencesAssignmentData();

  return (
    <div className={styles.experiencedAssignment}>
      <main className={styles.container}>
        <div className={styles.slider}>
          <div className={styles.sliderTitle}>{data.title}</div>
          <div className={styles.sliderList}>
            {data.list.map(data => {
              const { id, caption } = data;
              return (
                <div key={id} className={styles.sliderListItem}>
                  {caption}
                </div>
              );
            })}
          </div>
          <div className={styles.sliderButtons}>
            <Icon name='home/ellipse-active' />
            <Icon name='home/ellipse-default' />
            <Icon name='home/ellipse-default' />
          </div>
        </div>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${require('img/home/ear-1.png')})` }}
        />
      </main>
    </div>
  );
};

export { ExperiencedAssignment };