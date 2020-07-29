import * as React from 'react';
import { ArticleFirstSectionProps } from './article-first-section.props';
import * as styles from './article-first-section.scss';
import { H1, Icon, Paragraph, Spinner } from '@core/components';
import { useArticlePageData } from '@pages/article-page/article-page.hook';
import { useMediaPoints } from '@core/shared';
import { useArticleFirstScreenData } from '../../hooks/article-first-screen.hook';
import { useParams } from 'react-router';
import Moment from 'react-moment';
import { Share } from '@core/components/share';

/**
 * Renders Tags
 */
const Tag = ({ caption }) => <div className={styles.tagsItem}>{caption}</div>;
/**
 * Renders ArticleFirstSection
 */
const ArticleFirstSection: React.FC<ArticleFirstSectionProps> = ({
  articleData
}) => {
  const { desktop } = useMediaPoints();

  const {
    title,
    preText,
    readingTime,
    articleImage: { url },
    categoriesCollection: { items: categories }
  } = articleData.article;

  /**
   * format number to minutes
   */
  const minutes = Math.floor(readingTime / 60);
  const seconds = readingTime - minutes * 60;

  const str_pad_left = (string, pad, length) =>
    (new Array(length + 1).join(pad) + string).slice(-length);

  const finalTime =
    str_pad_left(minutes, '', 2) + ':' + str_pad_left(seconds, '0', 2);

  return (
    <div className={styles.articleFirstSection}>
      <div className={styles.heading}>
        <H1>{title}</H1>
        <div className={styles.tags}>
          {categories.map(el => (
            <Tag caption={el.category} key={el.sys.id} />
          ))}
        </div>
        <div className={styles.headingOptions}>
          <div className={styles.readingTime}>
            <div>Reading time:</div> <div>{finalTime}</div>
          </div>
          <div className={styles.share}>
            <Share />
          </div>
        </div>
        <Paragraph className={styles.heroDescription}>{preText}</Paragraph>
      </div>
      {desktop && (
        <div className={styles.imageWrapper}>
          <img src={url} className={styles.image} />
        </div>
      )}
    </div>
  );
};

export { ArticleFirstSection };
