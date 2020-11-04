import { ContentType } from '@account/pages/library/models';
import { State } from '@app/redux/state';
import { Button } from '@core/components';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated } from 'react-spring';
import { useCartNotifierData } from './cart-notifier.hook';
import * as styles from './cart-notifier.scss';
import { CartNotifierItem } from './components/cart-notifier-item';
import { Dropdown } from './components/dropdown';
import { Notification } from './components/notification';

/**
 * Renders CartNotifier
 */
const CartNotifier: React.FC<any> = ({ transition }) => {
  const { showDropdown } = useSelector((state: State) => state.cart);
  return (
    <animated.div style={transition} className={styles.cartNotifier}>
      {showDropdown && <Dropdown />}
      <Notification />
    </animated.div>
  );
};

export { CartNotifier };
