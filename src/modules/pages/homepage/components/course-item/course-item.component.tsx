import * as React from 'react';
import { CourseItemProps } from './course-item.props';
import * as styles from './course-item.scss';
import { Button } from '@core/components';
import { useHistory } from 'react-router-dom';

/**
 * Renders CourseItem
 */
const CourseItem: React.FC<CourseItemProps> = props => {
  const {
    id,
    slug,
    name,
    description,
    weeks,
    sprints,
    img,
    price,
    catalogueId
  } = props;
  const history = useHistory();
  const handleClick = (id, slug) => () =>
    history.push(`/program/${slug}?programId=${id}`);

  return (
    <div className={styles.courseItem}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img src={img} alt='' />
          <div className={styles.name}>{name}</div>
        </div>
        <div className={styles.descriptionBlock}>
          <div className={styles.description}>{description}</div>
          <div className={styles.bottom}>
            <div className={styles.info}>
              <div>{price}$</div>
              <div>
                {weeks} weeks / {sprints} sprints
              </div>
            </div>
            <Button
              onClick={handleClick(id, slug)}
              className={styles.button}
              children='Explore Program'
              width='100%'
              arrow='→'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseItem };
