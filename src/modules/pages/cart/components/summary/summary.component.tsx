import * as React from 'react';
import { SummaryProps } from './summary.props';
import * as styles from './summary.scss';
import { Button } from '@core/components';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

/**
 * Renders Summary
 */
const Summary: React.FC<SummaryProps> = ({ className, summaryData }) => {
  const { total, estimatedShipping, estimatedTax, onClick } = summaryData || {};
  const { user } = useSelector((state: State) => state.auth);

  const isAccountVerified = user ? user.verified : false;

  return (
    <div className={classNames(styles.summary, className)}>
      <div className={styles.title}>Order summary</div>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Total</div>
          <div className={styles.sectionValue}>$ {total}</div>
        </div>
        {estimatedShipping && (
          <div className={styles.section}>
            <div className={styles.sectionLabel}>Estimated shipping</div>
            <div
              className={classNames(
                styles.sectionValue,
                styles.sectionValueShipping
              )}
            >
              {estimatedShipping}
            </div>
          </div>
        )}
        {estimatedTax && (
          <div className={styles.section}>
            <div className={styles.sectionLabel}>Estimated tax</div>
            <div className={styles.sectionValue}>$ {estimatedTax}</div>
          </div>
        )}
        <div className={styles.hr} />
        <div className={styles.total}>
          <div>Order Total</div>
          <div>$ {total}</div>
        </div>
        <Button
          arrow
          className={styles.submit}
          onClick={onClick}
          disabled={!isAccountVerified}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export { Summary };
