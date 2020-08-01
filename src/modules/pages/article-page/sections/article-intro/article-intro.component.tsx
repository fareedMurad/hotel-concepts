import * as React from 'react';
import { ArticleIntroProps } from './article-intro.props';
import * as styles from './article-intro.scss';
import { H1, Paragraph } from '@core/components';
import { useMediaPoints } from '@core/shared';
import { Share } from '@core/components/share';

/**
 * Renders Tags
 */
const Tag = ({ caption }) => <div className={styles.tagsItem}>{caption}</div>;
/**
 * Renders ArticleFirstSection
 */
const ArticleIntro: React.FC<ArticleIntroProps> = ({ articleData }) => {
  const { desktop } = useMediaPoints();

  const {
    title,
    introText,
    readingTime,
    articleImage: { url },
    categoriesCollection: { items: categories }
  } = articleData.article;

  return (
    <div className={styles.articleIntro}>
      <div className={styles.heading}>
        <H1>{title}</H1>
        <div className={styles.tags}>
          {categories.map(el => (
            <Tag caption={el.category} key={el.sys.id} />
          ))}
        </div>
        <div className={styles.headingOptions}>
          <div className={styles.readingTime}>
            <div>Reading time:</div> <div>{readingTime}</div>
          </div>
          <div className={styles.share}>
            <Share />
          </div>
        </div>
        <Paragraph className={styles.heroDescription}>{introText}</Paragraph>
      </div>
      {desktop && (
        <div className={styles.imageWrapper}>
          <img src={url} className={styles.image} />
        </div>
      )}
    </div>
  );
};

export { ArticleIntro };
