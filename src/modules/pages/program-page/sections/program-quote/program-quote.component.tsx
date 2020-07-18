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
  const scrollToEnroll = () => {
    scrollTo('enroll');
  };
  return (
    <section className={styles.programQuote}>
      <div className={styles.text}>
        " Every company is navigating its <br />
        own unique digital <br />
        transformation and skills gap. "
      </div>
      <Button onClick={scrollToEnroll} className={styles.button}>
        <div>Enroll now</div> <div>→</div>
      </Button>
    </section>
  );
};

export { ProgramQuote };
