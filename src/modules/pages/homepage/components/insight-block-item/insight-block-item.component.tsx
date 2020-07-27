import * as React from 'react';
import { InsightBlockItemProps } from './insight-block-item.props';
import * as styles from './insight-block-item.scss';
import { Button } from '@core/components';
import { useHistory } from 'react-router';

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
  const { month, year, day } = date;
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
      <div className={styles.date}>{`${month} ${day}, ${year}`}</div>
      <div className={styles.description}>{title}</div>
      <Button
        className={styles.button}
        theme='secondary'
        onClick={() => {
          history.push(`/insights/article/${id}`);
        }}
        children='Read more'
        arrow='&#8594;'
        width='100%'
      />
    </div>
  );
};

export { InsightBlockItem };
