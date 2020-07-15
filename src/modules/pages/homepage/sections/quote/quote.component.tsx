import * as React from 'react';
import { QuoteProps } from './quote.props';
import * as styles from './quote.scss';
import { gql, useQuery } from '@apollo/client';

/**
 * get quote test
 */

const GET_QUOTE_TEXT = gql`
  {
    quoteText(id: "6Y3JuMmTALjcu8pPdKvk04") {
      text
    }
  }
`;

/**
 * Renders Quote
 */

const Quote: React.FC<QuoteProps> = ({}) => {
  const { data, loading, error } = useQuery(GET_QUOTE_TEXT);
  if (loading) return <div>loading...</div>;
  const { text } = data.quoteText;

  return (
    <section className={styles.quote}>
      <div className={styles.text}>{`"${text}"`}</div>
    </section>
  );
};

export { Quote };
