import { State } from '@app/redux/state';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { animated } from 'react-spring';
import * as styles from './cart-notifier.scss';
import { Dropdown } from './components/dropdown';
import { Notification } from './components/notification';

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
