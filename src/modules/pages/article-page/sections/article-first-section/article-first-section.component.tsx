import * as React from 'react';
import { ArticleFirstSectionProps } from './article-first-section.props';
import * as styles from './article-first-section.scss';
import { H1, Icon, Paragraph } from '@core/components';
import { useArticlePageData } from '@pages/article-page/article-page.hook';

/**
 * Renders Tags
 */
const Tag = ({ caption }) => {
  return <div className={styles.tagsItem}>{caption}</div>;
};
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
          <div>Reading time: {readingTime}</div>
          <div className={styles.share}>
            Share <Icon name='share' />
          </div>
        </div>
        <Paragraph>{heroDescription}</Paragraph>
      </div>
      <img src={require('img/article-page/article-page-1.png')} />
    </div>
  );
};

export { ArticleFirstSection };
