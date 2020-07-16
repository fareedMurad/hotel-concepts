import * as React from 'react';
import { QuoteProps } from './quote.props';
import * as styles from './quote.scss';

/**
 * Renders Quote
 */
const Quote: React.FC<QuoteProps> = ({}) => {
  return (
    <section className={styles.quote}>
      <div className={styles.text}>
       " Experience unique and intimate
        online learning designed and led by
        world-class mentors who share their
        own ground-breaking practice. "
      </div>
    </section>
  );
};

export { Quote };
