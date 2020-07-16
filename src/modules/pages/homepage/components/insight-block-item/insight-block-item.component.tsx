import * as React from 'react';
import { InsightBlockItemProps } from './insight-block-item.props';
import * as styles from './insight-block-item.scss';
import { Button } from '@core/components';

/**
 * Renders InsightBlockItem
 */
const InsightBlockItem: React.FC<InsightBlockItemProps> = ({
  title,
  text,
  category,
  slug,
  date,
  articleImage
}) => {
  const { url } = articleImage;
  const { month, year, day } = date;

  return (
    <div className={styles.insightBlockItem}>
      <div className={styles.imgContainer}>
        <img src={url} alt='insight' className={styles.img} />
        <div className={styles.activity}>{category}</div>
      </div>
      <div className={styles.date}>{`${month} ${day}, ${year}`}</div>
      <div className={styles.description}>{title}</div>
      <Button className={styles.button} theme='secondary'>
        <div>Read more</div> <div>&#8594;</div>
      </Button>
    </div>
  );
};

export { InsightBlockItem };
