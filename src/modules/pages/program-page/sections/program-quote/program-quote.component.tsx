import * as React from 'react';
import { ProgramQuoteProps } from './program-quote.props';
import * as styles from './program-quote.scss';
import { Button, Spinner } from '@core/components';
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
  if (loading) return <Spinner />;

  const quote = data.programPageBgAndQuoteTextCollection.items[0];

  const scrollToEnroll = () => {
    scrollTo('enroll');
  };
  return (
    <section
      className={styles.programQuote}
      style={{ backgroundImage: `url("${quote.backgroundImg.url}")` }}
    >
      <div className={styles.text}>{`"${quote.quoteText}"`}</div>
      <Button
        onClick={scrollToEnroll}
        className={styles.button}
        children='Enroll now'
        arrow='→'
      />
    </section>
  );
};

export { ProgramQuote };
