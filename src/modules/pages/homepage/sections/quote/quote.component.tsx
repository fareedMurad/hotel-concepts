import * as React from 'react';
import { QuoteProps } from './quote.props';
import * as styles from './quote.scss';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from '@core/components/spinner';

/**
 * get quote test
 */

const GET_QUOTE_TEXT = gql`
  {
    quoteTextCollection {
      items {
        text
      }
    }
  }
`;

/**
 * Renders Quote
 */

const Quote: React.FC<QuoteProps> = ({}) => {
  const { data, loading, error } = useQuery(GET_QUOTE_TEXT);

  if (loading) return <Spinner />;
  const { items } = data.quoteTextCollection;
  const { text } = items[0];

  return (
    <section className={styles.quote}>
      <div className={styles.text}>{`"${text}"`}</div>
    </section>
  );
};

export { Quote };
