import * as React from 'react';
import { FeaturedArticlesProps } from './featured-articles.props';
import * as styles from './featured-articles.scss';
import {
  H2,
  ButtonFilter,
  Button,
  PreCaption,
  Spinner
} from '@core/components';

import { ArticleCard } from '@pages/insights/components';
import { useArticlesData } from './hooks/articles.hook';
import { useArticlesCategoriesData } from './hooks/articles-categories.hook';
import { useArticlesAmount } from './hooks/articles-amount.hook';

/**
 * Renders FeaturedArticles
 */
const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({}) => {
  const { categories, loadingArticlesCategories } = useArticlesCategoriesData();
  const { amountLoading, allArticlesAmount } = useArticlesAmount();

  const [categoryId, setCategoryId] = React.useState('All');
  const [articlesToDisplay, setArticlesToDisplay] = React.useState([]);
  const [articlesToSkip, setArticlesToSkip] = React.useState(0);

  const { articlesLoading, articles } = useArticlesData(
    categoryId,
    articlesToSkip
  );

  console.log(articles);

  return (
    <div className={styles.featuredArticles}>
      <div className={styles.caption}>
        <PreCaption>{`${allArticlesAmount} Articles`}</PreCaption>
        <H2>Featured Articles</H2>
      </div>
      <div className={styles.filters}>
        <ButtonFilter
          title='Filter'
          icon='filter'
          onClick={() => {}}
          active={false}
        />
        <ButtonFilter
          title='All'
          count={allArticlesAmount}
          onClick={() => {
            setCategoryId('All');
          }}
          active={categoryId === 'All'}
        />
        {loadingArticlesCategories ? (
          <Spinner />
        ) : (
          categories.map(el => {
            const {
              category,
              linkedFrom: {
                entryCollection: { total: count }
              },
              sys: { id }
            } = el;
            const activeFilter = categoryId === id;

            return (
              <ButtonFilter
                key={category}
                title={category}
                count={count}
                onClick={() => {
                  setCategoryId(id);
                }}
                active={activeFilter}
              />
            );
          })
        )}
      </div>
      <div className={styles.articles}>
        {articlesLoading ? (
          <Spinner />
        ) : (
          articles.map((article, idx) => (
            <ArticleCard articles={article} key={idx} />
          ))
        )}
        {/* <div
          style={{
            // backgroundImage: `url(${require('img/insights/article-main.png')})`
          }}
          className={styles.articleImg}
        >
          <div className={styles.articleContent}>
            <div>Jan 10, 2019</div>
            <div>Chatbots in Hospitality and Travel Industries</div>
            <Button
              className={styles.articleButton}
              children='Read article'
              arrow='&#8594;'
              width={204}
            />
          </div>
        </div> */}
      </div>
      <Button
        className={styles.showMore}
        children='Show more'
        arrow='&#8595;'
        onClick={() => setArticlesToSkip(articlesToSkip + 8)}
      />
    </div>
  );
};

export { FeaturedArticles };
