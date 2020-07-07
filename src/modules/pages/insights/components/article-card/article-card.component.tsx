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
      <img className={styles.image} src={require(`img/insights/${img}.png`)} />
      <div className={styles.activity}>{activity}</div>
      <div className={styles.content}>
        <div className={styles.contentDate}>{date}</div>
        <div className={styles.contentDescription}>{description}</div>
      </div>
      <Button theme='secondary' className={styles.readMore}>
        <div>Read more</div> <div>&#8594;</div>
      </Button>
      <div className={styles.hr} />
    </div>
  );
};

export { ArticleCard };
