import * as React from 'react';
import { ProgramQuoteProps } from './program-quote.props';
import * as styles from './program-quote.scss';
import { Button } from '@core/components';
import { gql, useQuery } from '@apollo/client';

/**
 * query data
 */
const Data = gql`
  {
    programPageBgAndQuoteTextCollection {
      items {
        backgroundImg {
          url
        }
        quoteText
      }
    }
  }
`;

/**
 * Renders ProgramQuote
 */

const ProgramQuote: React.FC<ProgramQuoteProps> = ({}) => {
  const { data, error, loading } = useQuery(Data);

  if (loading) return <div>loading...</div>;
  const { items } = data.programPageBgAndQuoteTextCollection;
  const {
    backgroundImg: { url },
    quoteText
  } = items[0];
  return (
    <section
      className={styles.programQuote}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className={styles.text}>{`"${quoteText}"`}</div>
      <a href='#enroll' className={styles.button}>
        <div>Enroll now</div> <div>→</div>
      </a>
    </section>
  );
};

export { ProgramQuote };
