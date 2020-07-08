import * as React from 'react';
import { FeaturedArticlesProps } from './featured-articles.props';
import * as styles from './featured-articles.scss';
import { H2, ButtonFilter, Button } from '@core/components';
import { useJobsListData } from '@pages/jobs-list/jobs-list.hook';
import { useFeaturedArticlesData } from './featured-articles.hook';
import { ArticleCard } from '@pages/insights/components';

/**
 * Renders FeaturedArticles
 */
const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({}) => {
  const { filters } = useJobsListData();
  const { data } = useFeaturedArticlesData();
  const [isActive, setIsActive] = React.useState(null);

  return (
    <div className={styles.featuredArticles}>
      <div className={styles.caption}>
        <div>32 Articles</div>
        <H2>Featured Articles</H2>
      </div>
      <div className={styles.filters}>
        <ButtonFilter
          title='Filter'
          icon='filter'
          onClick={() => {}}
          active={false}
        />
        {filters.map(filter => {
          const { id, title, count } = filter;
          const activeFilter = isActive === filter.id;

          return (
            <ButtonFilter
              key={id}
              title={title}
              count={count}
              onClick={() => {
                setIsActive(id);
              }}
              active={activeFilter}
            />
          );
        })}
      </div>
      <div className={styles.articles}>
        {data.map(article => (
          <ArticleCard articles={article} key={article.id} />
        ))}
        <div
          style={{
            backgroundImage: `url(${require('img/insights/article-main.png')})`
          }}
          className={styles.articleImg}
        >
          <div className={styles.articleContent}>
            <div>Jan 10, 2019</div>
            <div>
              Chatbots in <br />
              Hospitality and <br />
              Travel Industries
            </div>
            <Button className={styles.articleButton}>
              <div>Read article</div> <div> &#8594; </div>
            </Button>
          </div>
        </div>
      </div>
      <Button className={styles.showMore}>
        <div>Show more</div> <div>&#8595;</div>
      </Button>
    </div>
  );
};

export { FeaturedArticles };
