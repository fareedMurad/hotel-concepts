import * as React from 'react';
import { PaymentMethodProps } from './payment-method.props';
import * as styles from './payment-method.scss';

/**
 * Renders PaymentMethod
 */
const PaymentMethod: React.FC<PaymentMethodProps> = ({}) => {
  return (
    <React.Fragment>
      <div className={styles.title}>Prefer payment method</div>
    </React.Fragment>
  );
};

export { PaymentMethod };
