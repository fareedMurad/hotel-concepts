import * as React from 'react';
import { SummaryProps } from './summary.props';
import * as styles from './summary.scss';
import { Button } from '@core/components';

/**
 * Renders Summary
 */
const Summary: React.FC<SummaryProps> = ({}) => {
  return (
    <div className={styles.summary}>
      <div className={styles.summaryTitle}>Order summary</div>
      <div className={styles.summaryInfo}>
        <div className={styles.summaryInfoField}>
          <div>Total</div>
          <div>100$</div>
        </div>
        <div className={styles.summaryInfoField}>
          <div>Estimate shipping</div>
          <div>{}</div>
        </div>
        <div className={styles.summaryInfoField}>
          <div>Estimate tax</div>
          <div>{}</div>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.total}>
          <div>Order Total</div>
          <div>100$</div>
        </div>
        <Button arrow className={styles.button} width='100%'>
          Ckeckout{' '}
        </Button>
      </div>
    </div>
  );
};

export { Summary };
