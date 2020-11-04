import { ContentType } from '@account/pages/library/models';
import { State } from '@app/redux/state';
import { Button } from '@core/components';
import { useClickOutside } from '@core/shared';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated } from 'react-spring';
import { useCartNotifierData } from './cart-notifier.hook';
import * as styles from './cart-notifier.scss';
import { CartNotifierItem } from './components/cart-notifier-item';
import { Dropdown } from './components/dropdown';
import { Notification } from './components/notification';
import { useRef } from 'react';
import { cart } from '@app/redux/cart';

/**
 * Renders CartNotifier
 */
const CartNotifier: React.FC<any> = ({ transition }) => {
  const {
    showDropdown,
    addedProduct: { isVisible }
  } = useSelector((state: State) => state.cart);

  return (
    <animated.div style={transition} className={styles.cartNotifier}>
      {showDropdown && <Dropdown />}
      {isVisible && <Notification />}
    </animated.div>
  );
};

export { CartNotifier };
