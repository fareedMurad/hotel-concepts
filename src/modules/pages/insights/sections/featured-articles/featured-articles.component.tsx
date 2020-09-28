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
import { usePopularArticlesData } from './hooks/popular.articles.hook';
import Moment from 'react-moment';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

/**
 * Renders FeaturedArticles
 */
const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({}) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const { categories, loadingArticlesCategories } = useArticlesCategoriesData(
    language
  );
  const { amountLoading, allArticlesAmount } = useArticlesAmount();
  const history = useHistory();
  const [categoryId, setCategoryId] = React.useState('All');
  const [articlesToDisplay, setArticlesToDisplay] = React.useState([]);
  const [articlesToSkip, setArticlesToSkip] = React.useState(0);
  const { articlesLoading, articles } = useArticlesData(
    categoryId,
    articlesToSkip,
    language
  );
  const { popularArticle, popularArticleLoading } = usePopularArticlesData(
    language
  );

  React.useEffect(() => {
    if (!articlesLoading) {
      setArticlesToDisplay([...articlesToDisplay, ...articles]);
    }
  }, [articles, articlesLoading]);

  const handleClick = categoryId => {
    setCategoryId(categoryId);
    setArticlesToSkip(0);
    setArticlesToDisplay([]);
  };

  return (
    <div className={styles.featuredArticles}>
      <div className={styles.caption}>
        <PreCaption>{`${allArticlesAmount} ${t(
          'insights.featured-articles.pre-caption'
        )}`}</PreCaption>
        <H2>{t('insights.featured-articles.title')}</H2>
      </div>
      <div className={styles.filters}>
        <ButtonFilter
          title={t('insights.featured-articles.all')}
          count={allArticlesAmount}
          onClick={() => handleClick('All')}
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
                onClick={() => handleClick(id)}
                active={activeFilter}
              />
            );
          })
        )}
      </div>
      {articlesLoading && <Spinner />}
      <div className={styles.articles}>
        {articlesToDisplay.map((article, idx) => (
          <ArticleCard articles={article} key={idx} />
        ))}

        {popularArticleLoading ? (
          <Spinner />
        ) : (
          categoryId === 'All' && (
            <div
              style={{
                backgroundImage: `url(${popularArticle.articleImage.url})`
              }}
              className={styles.articleImg}
            >
              <div className={styles.articleContent}>
                <div>
                  <Moment format='MMMM, DD YYYY'>{popularArticle.date}</Moment>
                  <div className={styles.articleContentTitle}>
                    {popularArticle.title}
                  </div>
                </div>
                <Button
                  className={styles.articleButton}
                  children='Read article'
                  arrow
                  width={204}
                  theme='primary'
                  onClick={() =>
                    history.push(`/insights/article/${popularArticle.sys.id}`)
                  }
                />
              </div>
            </div>
          )
        )}
      </div>
      <Button
        className={styles.showMore}
        children={t('insights.featured-articles.button-text')}
        arrow
        onClick={() => setArticlesToSkip(categoryId === 'All' ? 7 : 9)}
        width={204}
      />
    </div>
  );
};

export { FeaturedArticles };
