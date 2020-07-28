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
import { H2, Paragraph, Button, Footer } from '@core/components';
import { ScrollToTop } from '@app';

/**
 * Renders ArticlePage
 */
const ArticlePage: React.FC<ArticlePageProps> = ({}) => {
  const history = useHistory();

  return (
    <div className={styles.articlePage}>
      <ScrollToTop />
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
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <H2>Read Next</H2>
          <div className={styles.footerContentDate}>Jan 11, 2019</div>
          <Paragraph className={styles.footerContentCaption}>
            Financial Analysis of Hotel Investments course.
          </Paragraph>
          <Button
            theme='secondary'
            className={styles.button}
            children='Read'
            arrow='&#8594;'
            width={204}
          />
        </div>
      </footer>
      <Footer />
    </div>
  );
};

export { ArticlePage };
