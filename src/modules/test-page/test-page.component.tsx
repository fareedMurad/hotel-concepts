import * as React from 'react';
import { TestPageProps } from './test-page.props';
import * as styles from './test-page.scss';
import { gql, useQuery } from '@apollo/client';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { HeroTitle, PreCaption, RichTextDefault } from '@core/components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';
/**
 * Renders TestPage
 */
const GET_RICH_TEXT = gql`
 query($locale: String!) {
    testRichText(id: "4L09BPBmfp4lZUwWQh6HIs", locale: $locale {
      richtext {
        json
      }
    }
  }
`;
const Bold = ({ children }) => <span className='bold'>{children}</span>;

const TestPage: React.FC<TestPageProps> = ({}) => {
  const { language } = useSelector((state: State) => state.localization);
  const { data, loading, error } = useQuery(GET_RICH_TEXT, {
    variables: { locale: language }
  });
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
    }
  };

  const parsed = documentToReactComponents(
    data?.testRichText?.richtext?.json,
    options
  );

  return <RichTextDefault>{parsed}</RichTextDefault>;
};

export { TestPage };
