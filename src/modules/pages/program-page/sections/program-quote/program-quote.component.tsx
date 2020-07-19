import * as React from 'react';
import { ProgramQuoteProps } from './program-quote.props';
import * as styles from './program-quote.scss';
import { Button } from '@core/components';
import { scrollTo } from '@core/helpers/scroll-to.helper';
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
  const { data, loading, error } = useQuery(Data);
  if (loading) return <div>loading...</div>;
  const quote = data.programPageBgAndQuoteTextCollection.items[0];
  console.log(quote);
  const scrollToEnroll = () => {
    scrollTo('enroll');
  };
  return (
    <section
      className={styles.programQuote}
      style={{ backgroundImage: `url("${quote.backgroundImg.url}")` }}
    >
      <div className={styles.text}>{`"${quote.quoteText}"`}</div>
      <Button onClick={scrollToEnroll} className={styles.button}>
        <div>Enroll now</div> <div>→</div>
      </Button>
    </section>
  );
};

export { ProgramQuote };
