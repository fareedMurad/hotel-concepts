import * as React from 'react';
import { InsightBlockItemProps } from './insight-block-item.props';
import * as styles from './insight-block-item.scss';
import { Button } from '@core/components';

/**
 * Renders InsightBlockItem
 */
const InsightBlockItem: React.FC<InsightBlockItemProps> = ({ articles }) => {
  const { img, activity, date, description } = articles;
  return (
    <div className={styles.insightBlockItem}>
      <div className={styles.imgContainer}>
        <img src={require(`img/insights/${img}.png`)} alt="insight" className={styles.img} />
        <div className={styles.activity}>{activity}</div>
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.description}>{description}</div>
      <Button className={styles.button} theme='secondary'>
        <div>Read more</div> <div>&#8594;</div>
      </Button>
    </div>
  );
};

export { InsightBlockItem };
