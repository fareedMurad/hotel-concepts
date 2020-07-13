import * as React from 'react';
import { ArticleFirstSectionProps } from './article-first-section.props';
import * as styles from './article-first-section.scss';
import { H1, Icon, Paragraph } from '@core/components';
import { useArticlePageData } from '@pages/article-page/article-page.hook';
import { useMediaPoints } from '@core/shared';

/**
 * Renders Tags
 */
const Tag = ({ caption }) => <div className={styles.tagsItem}>{caption}</div>;
/**
 * Renders ArticleFirstSection
 */
const ArticleFirstSection: React.FC<ArticleFirstSectionProps> = ({}) => {
  const {
    tags,
    readingTime,
    heroTitle,
    heroDescription
  } = useArticlePageData();
  const { desktop } = useMediaPoints();

  return (
    <div className={styles.articleFirstSection}>
      <div className={styles.heading}>
        <H1>{heroTitle}</H1>
        <div className={styles.tags}>
          {tags.map(({ caption, id }) => (
            <Tag caption={caption} key={id} />
          ))}
        </div>
        <div className={styles.headingOptions}>
          <div className={styles.readingTime}>
            <div>Reading time:</div> <div>{readingTime}</div>
          </div>
          <div className={styles.share}>
            <div>Share</div> <Icon name='share' />
          </div>
        </div>
        <Paragraph className={styles.heroDescription}>
          {heroDescription}
        </Paragraph>
      </div>
      {desktop && (
        <img
          src={require('img/article-page/article-page-1.png')}
          className={styles.image}
        />
      )}
    </div>
  );
};

export { ArticleFirstSection };
