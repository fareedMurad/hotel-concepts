import * as React from 'react';
import { ProgramQuoteProps } from './program-quote.props';
import * as styles from './program-quote.scss';
import { Button } from '@core/components';

/**
 * Renders ProgramQuote
 */
const ProgramQuote: React.FC<ProgramQuoteProps> = ({}) => {
  return (
    <section className={styles.programQuote}>
      <div className={styles.text}>
       " Every company is navigating its <br/>
        own unique digital <br/>
        transformation and skills gap. "
      </div>
      <Button className={styles.button}>
        <div>Enroll now</div> <div>→</div>
      </Button>
    </section>
  );
};

export { ProgramQuote };
