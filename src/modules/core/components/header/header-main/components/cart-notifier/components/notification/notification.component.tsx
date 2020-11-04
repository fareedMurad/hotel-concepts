import { Button } from '@core/components/button';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { CartNotifierItem } from '../cart-notifier-item';
import { NotificationProps } from './notification.props';
import * as styles from './notification.scss';

/**
 * Renders Notification
 */
const Notification: React.FC<NotificationProps> = ({}) => {
  const dispatch = useDispatch();
  const navigateToCartPage = () => dispatch(navigate('/cart'));
  return (
    <div className={styles.notification}>
      <div className={styles.title}>Just added to your cart</div>
      <CartNotifierItem />
      <div className={styles.wrap}>
        <Button className={styles.submit} arrow onClick={navigateToCartPage}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export { Notification };
