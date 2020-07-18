import * as React from 'react';
import { ProgramQuoteProps } from './program-quote.props';
import * as styles from './program-quote.scss';
import { Button } from '@core/components';
<<<<<<< HEAD
import { scrollTo } from '@core/helpers/scroll-to.helper';
=======
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
>>>>>>> COR-20

/**
 * Renders ProgramQuote
 */

const ProgramQuote: React.FC<ProgramQuoteProps> = ({}) => {
<<<<<<< HEAD
  const scrollToEnroll = () => {
    scrollTo("enroll");
  }
  return (
    <section className={styles.programQuote}>
      <div className={styles.text}>
       " Every company is navigating its <br/>
        own unique digital <br/>
        transformation and skills gap. "
      </div>
      <Button onClick={scrollToEnroll} className={styles.button}>
=======
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
>>>>>>> COR-20
        <div>Enroll now</div> <div>→</div>
      </Button>
    </section>
  );
};

export { ProgramQuote };
