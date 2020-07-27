import * as React from 'react';
import { ArticleCardProps } from './article-card.props';
import * as styles from './article-card.scss';
import { Button } from '@core/components';

/**
 * Renders ArticleCard
 */
const ArticleCard: React.FC<ArticleCardProps> = ({ articles }) => {
  const { img, activity, date, description } = articles;
  return (
    <div className={styles.articleCard}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          // src={require(`img/insights/${img}.png`)}
        />
        <div className={styles.activity}>{activity}</div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentDate}>{date}</div>
        <div className={styles.contentDescription}>{description}</div>
      </div>
      <Button
        theme='secondary'
        className={styles.readMore}
        children='Read more'
        arrow='&#8594;'
      />
    </div>
  );
};

export { ArticleCard };
