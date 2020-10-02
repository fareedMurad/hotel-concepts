import * as React from 'react';
import { SummaryProps } from './summary.props';
import * as styles from './summary.scss';
import { Button } from '@core/components';

/**
 * Renders Summary
 */
const Summary: React.FC<SummaryProps> = ({
  total,
  estimatedShipping,
  estimatedTax
}) => (
  <div className={styles.summary}>
    <div className={styles.summaryTitle}>Order summary</div>
    <div className={styles.summaryInfo}>
      <div className={styles.summaryInfoField}>
        <div>Total</div>
        <div>{total}</div>
      </div>
      <div className={styles.summaryInfoField}>
        <div>Estimate shipping</div>
        <div>{estimatedShipping}</div>
      </div>
      <div className={styles.summaryInfoField}>
        <div>Estimate tax</div>
        <div>{estimatedTax}</div>
      </div>
      <div className={styles.hr} />
      <div className={styles.total}>
        <div>Order Total</div>
        <div>{total}</div>
      </div>
      <Button arrow className={styles.button} width='100%'>
        Ckeckout{' '}
      </Button>
    </div>
  </div>
);

export { Summary };
