import * as React from 'react';
import { PurchasedProps } from './purchased.props';
import * as styles from './purchased.scss';

/**
 * Renders Purchased
 */
const Purchased: React.FC<PurchasedProps> = ({}) => {
  return <div className={styles.purchased}></div>;
};

export { Purchased };
