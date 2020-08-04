import * as React from 'react';
import { ArticleIntroProps } from './article-intro.props';
import * as styles from './article-intro.scss';
import { H1, Paragraph } from '@core/components';
import { useMediaPoints } from '@core/shared';
import { ShareSocial } from '@core/components/share';
import { SEO } from '@core/components/seo/seo.component';
import { useLocation } from 'react-router';

/**
 * Renders Tags
 */
const Tag = ({ caption }) => <div className={styles.tagsItem}>{caption}</div>;
/**
 * Renders ArticleFirstSection
 */
const ArticleIntro: React.FC<ArticleIntroProps> = ({ articleData }) => {
  const { desktop } = useMediaPoints();
  const { pathname } = useLocation();
  const {
    title,
    introText,
    readingTime,
    articleImage: { url },
    categoriesCollection: { items: categories }
  } = articleData.article;

  return (
    <div className={styles.articleIntro}>
      <SEO
        title={title}
        thumbnail={url}
        url={`https://dev.d3fbrpbky13ysk.amplifyapp.com/${pathname}`}
      />
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
            <ShareSocial
              link={`https://dev.d3fbrpbky13ysk.amplifyapp.com/${pathname}`}
            />
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
