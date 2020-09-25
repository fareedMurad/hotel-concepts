import * as React from 'react';
import * as styles from './article-bg-quote.scss';
import { Spinner } from '@core/components';
import { useArticleRichTextData } from '@pages/article-page/hooks/article-rich-text';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

/**
 * Renders ArticleBgQuote
 */
const ArticleBgQuote: React.FC = ({}) => {
  const { articleId } = useParams();
  const { language } = useSelector((state: State) => state.localization);
  const {
    backgroundImageQuoteData,
    articleRichTextLoading
  } = useArticleRichTextData(articleId, language);

  if (articleRichTextLoading) return <Spinner />;
  const { quoteText, backgroundImg, author } = backgroundImageQuoteData;
  return (
    <div className={styles.postImage}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${backgroundImg?.url})` }}
      >
        <div className={styles.postImageText}>{quoteText}</div>
        <div className={styles.postImageAuthor}>&#8220; {author} &#8222;</div>
      </div>
    </div>
  );
};

export { ArticleBgQuote };
