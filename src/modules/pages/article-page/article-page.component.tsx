import * as React from 'react';
import { ArticlePageProps } from './article-page.props';
import * as styles from './article-page.scss';
import { useHistory, useParams } from 'react-router';
import { Header } from '@core/components/header';
import { H2, Paragraph, Button, Footer, Spinner } from '@core/components';
import { ScrollToTop } from '@app';
import { useArticleFirstScreenData } from './hooks/article-first-screen.hook';
import Moment from 'react-moment';
import { ArticleIntro } from './sections/article-intro';
import { ArticleRichText } from './sections/article-rich-text';
/**
 * HR
 */
const Hr = () => <div className={styles.hr} />;
/**
 * Renders ArticlePage
 */
const ArticlePage: React.FC<ArticlePageProps> = ({}) => {
  const history = useHistory();
  const { articleId } = useParams();
  const { articleData, articleLoading } = useArticleFirstScreenData(articleId);

  if (articleLoading) return <Spinner />;

  const {
    readNext: {
      title: readNextTitle,
      date: readNextDate,
      sys: { id }
    }
  } = articleData?.article;

  return (
    <div className={styles.articlePage}>
      <ScrollToTop />
      <Header whiteBackground />
      <main className={styles.content}>
        <div onClick={() => history.goBack()} className={styles.back}>
          <div>&#8592;</div>
          <div>Back</div>
        </div>
        <ArticleIntro articleData={articleData} />
        <Hr />
        <ArticleRichText />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <H2>Read Next</H2>
          <div className={styles.footerContentDate}>
            <Moment format='MMM DD, YYYY'>{readNextDate}</Moment>
          </div>
          <Paragraph className={styles.footerContentCaption}>
            {readNextTitle}
          </Paragraph>
          <Button
            theme='secondary'
            className={styles.button}
            children='Read'
            arrow='&#8594;'
            width={204}
            onClick={() => {
              history.push(`/insights/article/${id}`);
            }}
          />
        </div>
      </footer>
      {/* <Footer /> */}
    </div>
  );
};

export { ArticlePage, Hr };
