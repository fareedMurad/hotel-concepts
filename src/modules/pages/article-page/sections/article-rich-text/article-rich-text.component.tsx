import * as React from 'react';
import { ArticleRichTextProps } from './article-rich-text.props';
import * as styles from './article-rich-text.scss';
import { RichTextDefault, Spinner } from '@core/components';
import { useArticleRichTextData } from '@pages/article-page/hooks/article-rich-text';
import { useParams } from 'react-router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { InsightsForm } from '@pages/article-page/components';
import { useMediaPoints } from '@core/shared';
import { ArticleBgQuote } from '../article-bg-quote/article-bg-quote.component';
import { ArticleImageSlider } from '../article-image-slider';
/**
 * Hr
 */
const Hr = () => <div className={styles.hr} />;
/**
 * Renders ArticleRichText
 */
const ArticleRichText: React.FC<ArticleRichTextProps> = ({}) => {
  const { articleId } = useParams();
  const {
    firstRichTextData,
    articleRichTextLoading,
    secondRichTextData,
    thirdRichTextData,
    fourthRichTextData,
    imagesForSliderData
  } = useArticleRichTextData(articleId);
  const { desktop } = useMediaPoints();

  if (articleRichTextLoading) return <Spinner />;
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.UNDERLINE]: text => (
        <div style={{ textDecoration: 'underline' }}>{text}</div>
      )
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={styles.list}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol style={{ listStyleType: 'decimal' }}>{children}</ol>
      ),
      [BLOCKS.QUOTE]: (node, children) => <blockquote>"{children}"</blockquote>
      // [BLOCKS.EMBEDDED_ASSET]: node => {
      //   console.log(firstRichTextData?.links?.assets);
      //   return (
      //     <img
      //       src={secondRichTextData?.links?.assets?.block[0]?.url}
      //       alt={node.data?.target?.fields?.title}
      //       className={styles.embeddedImage}
      //     />
      //   );
      // }
    }
  };
  const parsedFirstRichText = documentToReactComponents(
    firstRichTextData?.json,
    options
  );
  const parsedSecondRichText = documentToReactComponents(
    secondRichTextData?.json,
    options
  );
  const parsedThirdRichText = documentToReactComponents(
    thirdRichTextData?.json,
    options
  );
  const parsedFourthRichText = documentToReactComponents(
    fourthRichTextData?.json,
    options
  );
  return (
    <div className={styles.articleRichText}>
      <RichTextDefault>{parsedFirstRichText}</RichTextDefault>
      {desktop && <InsightsForm />}
      <Hr />
      <RichTextDefault>{parsedSecondRichText}</RichTextDefault>
      {secondRichTextData != null && <Hr />}
      <ArticleBgQuote />
      {thirdRichTextData != null && <Hr />}
      <RichTextDefault>{parsedThirdRichText}</RichTextDefault>
      {fourthRichTextData != null && <Hr />}
      <ArticleImageSlider imagesForSliderData={imagesForSliderData} />
      {imagesForSliderData.length > 0 && <Hr />}
      <RichTextDefault>{parsedFourthRichText}</RichTextDefault>
    </div>
  );
};

export { ArticleRichText };
