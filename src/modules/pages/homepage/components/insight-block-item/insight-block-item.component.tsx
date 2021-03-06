import * as React from 'react';
import { InsightBlockItemProps } from './insight-block-item.props';
import * as styles from './insight-block-item.scss';
import { Button } from '@core/components';
import { useHistory } from 'react-router';
import Moment from 'react-moment';

/**
 * Renders InsightBlockItem
 */
const InsightBlockItem: React.FC<InsightBlockItemProps> = ({
  title,
  text,
  categories,
  slug,
  date,
  articleImage,
  id
}) => {
  const { url } = articleImage;
  const history = useHistory();

  return (
    <div className={styles.insightBlockItem}>
      <div className={styles.imgContainer}>
        <img src={url} alt='insight' className={styles.img} />
        <div className={styles.tags}>
          {categories.map((el, index) => {
            return (
              <div key={index} className={styles.activity}>
                {el.category}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div>
          <div className={styles.date}>
            <Moment format='MMM DD, YYYY' className={styles.date}>
              {date}
            </Moment>
          </div>
          <div
            className={styles.description}
            onClick={() => {
              history.push(`/insights/article/${id}`);
            }}
          >
            {title}
          </div>
        </div>
        <Button
          className={styles.button}
          theme='secondary'
          onClick={() => {
            history.push(`/insights/article/${id}`);
          }}
          children='Read more'
          width='100%'
          arrow
        />
      </div>
    </div>
  );
};

export { InsightBlockItem };
