import * as React from 'react';
import { ArticlePageProps } from './article-page.props';
import * as styles from './article-page.scss';
import { useHistory } from 'react-router';
import { Header } from '@core/components/header';
import {
  ArticleFirstSection,
  ArticleLastSection,
  ArticleSecondSection
} from './sections';

/**
 * Renders ArticlePage
 */
const ArticlePage: React.FC<ArticlePageProps> = ({}) => {
  const history = useHistory();
  return (
    <div className={styles.articlePage}>
      <Header whiteBackground />
      <main className={styles.content}>
        <div onClick={() => history.goBack()} className={styles.back}>
          <div>&#8592;</div>
          <div>Back</div>
        </div>
        <ArticleFirstSection />
        <ArticleSecondSection />
        <ArticleLastSection />
      </main>
    </div>
  );
};

export { ArticlePage };
