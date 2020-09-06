import * as React from 'react';
import { QuoteProps } from './quote.props';
import * as styles from './quote.scss';
import { Spinner } from '@core/components/spinner';
import { useQuoteData } from './quote.hook';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';

/**
 * Renders Quote
 */

const Quote: React.FC<QuoteProps> = ({}) => {
  const { language } = useSelector((state: State) => state.localization);
  const { quoteData, quoteLoading, quoteImage } = useQuoteData(language);

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
