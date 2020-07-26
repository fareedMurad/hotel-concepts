import * as React from 'react';
import { QuoteProps } from './quote.props';
import * as styles from './quote.scss';
import { Spinner } from '@core/components/spinner';
import { useQuoteData } from './quote.hook';

/**
 * Renders Quote
 */

const Quote: React.FC<QuoteProps> = ({}) => {
  const { quoteData, quoteLoading, quoteImage } = useQuoteData();

  if (quoteLoading) return <Spinner />;

  return (
    <section
      className={styles.quote}
      style={{ backgroundImage: `url(${quoteImage})` }}
    >
      <div className={styles.text}>{`"${quoteData.text}"`}</div>
    </section>
  );
};

export { Quote };
