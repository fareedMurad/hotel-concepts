import * as React from 'react';
import { ArticleCardProps } from './article-card.props';
import * as styles from './article-card.scss';
import { Button } from '@core/components';
import Moment from 'react-moment';

/**
 * Renders ArticleCard
 */
const ArticleCard: React.FC<ArticleCardProps> = ({ articles }) => {
  console.log(articles);
  const {
    articleImage: { url },
    categoriesCollection: { items: categories },
    date,
    title
  } = articles;
  return (
    <div className={styles.articleCard}>
      <div
        className={styles.imageWrapper}
        style={{ backgroundImage: `url(${url})` }}
      >
        {categories.map((el, idx) => {
          return (
            <div key={idx} className={styles.activity}>
              {el.category}
            </div>
          );
        })}
      </div>

      <div className={styles.content}>
        <div className={styles.contentDate}>
          <Moment format='MMM, DD YYYY'>{date}</Moment>
        </div>
        <div className={styles.contentDescription}>{title}</div>
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
