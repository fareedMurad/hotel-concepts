import * as React from 'react';
import { QuoteProps } from './quote.props';
import * as styles from './quote.scss';
import { gql, useQuery } from '@apollo/client';

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

  if (loading) return <div>loading...</div>;
  const { items } = data.quoteTextCollection;
  const { text } = items[0];

  return (
    <section className={styles.quote}>
<<<<<<< HEAD
      <div className={styles.text}>
       " Experience unique and intimate
        online learning designed and led by
        world-class mentors who share their
        own ground-breaking practice. "
      </div>
=======
      <div className={styles.text}>{`"${text}"`}</div>
>>>>>>> COR-20
    </section>
  );
};

export { Quote };
