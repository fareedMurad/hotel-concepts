import * as React from 'react';
import { ProgramQuoteProps } from './program-quote.props';
import * as styles from './program-quote.scss';
import { Button, Spinner } from '@core/components';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useProgramQuoteData } from './program-quote.hook';

/**
 * Renders ProgramQuote
 */
const ProgramQuote: React.FC<ProgramQuoteProps> = ({ programId }) => {
  const { programQuoteData, programQuoteDataLoading } = useProgramQuoteData(
    programId
  );

  if (programQuoteDataLoading) return <Spinner />;

  if (!programQuoteData) return <div></div>;
  const scrollToEnroll = () => {
    scrollTo('enroll');
  };

  return (
    <section
      className={styles.programQuote}
      style={{
        backgroundImage: `url("${programQuoteData?.backgroundImg?.url}")`
      }}
    >
      <div className={styles.text}>{`"${programQuoteData?.quoteText}"`}</div>
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
