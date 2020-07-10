import * as React from 'react';
import { CourseItemProps } from './course-item.props';
import * as styles from './course-item.scss';
import { Button } from '@core/components';

/**
 * Renders CourseItem
 */
const CourseItem: React.FC<CourseItemProps> = (props) => {
  const { name, description, weeks, sprints, img, price } = props;
  return (
    <div className={styles.courseItem}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img src={require(`img/insights/${img}.png`)} alt=""/>
          <div className={styles.name}>{name}</div>
        </div>
        <div className={styles.descriptionBlock}>
          <div className={styles.description}>
            {description}
          </div>
          <div className={styles.bottom}>
            <div className={styles.info}>
              <div>{price}$</div>
              <div>{weeks} weeks/{sprints} sprints</div>
            </div>
            <Button className={styles.button}>
              <div>Explore Program</div> <div>&#8594;</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseItem };
