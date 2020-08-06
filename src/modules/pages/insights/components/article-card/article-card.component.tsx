import * as React from 'react';
import { ArticleCardProps } from './article-card.props';
import * as styles from './article-card.scss';
import { Button } from '@core/components';
import Moment from 'react-moment';
import { useHistory } from 'react-router';

/**
 * Renders ArticleCard
 */
const ArticleCard: React.FC<ArticleCardProps> = ({ articles }) => {
  const history = useHistory();
  const {
    articleImage: { url },
    categoriesCollection: { items: categories },
    date,
    title,
    sys: { id }
  } = articles;

  return (
    <div className={styles.articleCard}>
      <div
        className={styles.imageWrapper}
        style={{ backgroundImage: `url(${url})` }}
      >
        <div className={styles.tags}>
          {categories.map((el, idx) => (
            <div key={idx} className={styles.activity}>
              {el.category}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.contentDate}>
            <Moment format='MMM DD, YYYY'>{date}</Moment>
          </div>
          <div
            className={styles.contentDescription}
            onClick={() => history.push(`/insights/article/${id}`)}
          >
            {title}
          </div>
        </div>
        <Button
          theme='secondary'
          className={styles.readMore}
          children='Read more'
          arrow='&#8594;'
          onClick={() => history.push(`/insights/article/${id}`)}
          width='100%'
        />
      </div>
    </div>
  );
};

export { ArticleCard };
