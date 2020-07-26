import * as React from 'react';
import { ArticleLastSectionProps } from './article-last-section.props';
import * as styles from './article-last-section.scss';
import { useArticlePageData } from '@pages/article-page/article-page.hook';
import { H2, Paragraph } from '@core/components';

/**
 * Renders ArticleLastSection
 */
const ArticleLastSection: React.FC<ArticleLastSectionProps> = ({}) => {
  const { bodyContent, bodyTitle, bodyPostImage } = useArticlePageData();

  return (
    <div className={styles.articleLastSection}>
      <div className={styles.hr} />
      <section className={styles.postImage}>
        <div
          style={
            {
              // backgroundImage: `url(${require(`img/article-page/${bodyPostImage.image}.png`)})`
            }
          }
          className={styles.image}
        >
          <div className={styles.postImageText}>{bodyPostImage.text}</div>
          <div className={styles.postImageAuthor}>
            &ldquo; {bodyPostImage.author} &rdquo;
          </div>
        </div>
      </section>
      <section>
        <H2>{bodyTitle[1]}</H2>
        <Paragraph className={styles.paragraph}>{bodyContent[4]}</Paragraph>
        <Paragraph>{bodyContent[5]}</Paragraph>
      </section>
    </div>
  );
};

export { ArticleLastSection };
