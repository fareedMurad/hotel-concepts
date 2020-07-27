import * as React from 'react';
import { TestPageProps } from './test-page.props';
import * as styles from './test-page.scss';
import { gql, useQuery } from '@apollo/client';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { HeroTitle, PreCaption } from '@core/components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
/**
 * Renders TestPage
 */
const GET_RICH_TEXT = gql`
  {
    testRichText(id: "4L09BPBmfp4lZUwWQh6HIs") {
      richtext {
        json
      }
    }
  }
`;
const Bold = ({ children }) => <span className='bold'>{children}</span>;

const TestPage: React.FC<TestPageProps> = ({}) => {
  const { data, loading, error } = useQuery(GET_RICH_TEXT);
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => `<custom-bold>${text}<custom-bold>`
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <PreCaption>{children}</PreCaption>
      )
    }
  };

  const parsed = documentToReactComponents(
    data?.testRichText?.richtext?.json,
    options
  );

  return <div className={styles.testPage}>{parsed}</div>;
};

export { TestPage };
