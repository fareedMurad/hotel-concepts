import * as React from 'react';
import { SummaryProps } from './summary.props';
import * as styles from './summary.scss';
import { Button } from '@core/components';
import classNames from 'classnames';

/**
 * Renders Summary
 */
const Summary: React.FC<SummaryProps> = ({ className, summaryData }) => {
  const { total, estimatedShipping, estimatedTax } = summaryData || {};

  return (
    <div className={classNames(styles.summary, className)}>
      <div className={styles.summaryTitle}>Order summary</div>
      <div className={styles.summaryInfo}>
        <div className={styles.summaryInfoField}>
          <div>Total</div>
          <div>{total}</div>
        </div>
        {estimatedShipping && (
          <div className={styles.summaryInfoField}>
            <div>Estimate shipping</div>
            <div>{estimatedShipping}</div>
          </div>
        )}
        {estimatedTax && (
          <div className={styles.summaryInfoField}>
            <div>Estimate tax</div>
            <div>{estimatedTax}</div>
          </div>
        )}
        <div className={styles.hr} />
        <div className={styles.total}>
          <div>Order Total</div>
          <div>{total}</div>
        </div>
        <Button
          arrow
          className={styles.submit}
          // onClick={onClick}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export { Summary };
