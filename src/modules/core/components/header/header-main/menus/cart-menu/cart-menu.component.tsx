import { cart } from '@app/redux/cart';
import { Icon } from '@core/components/icon';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { CartNotifier } from '../../components/cart-notifier';
import { useHeaderMainData } from '../../hooks/header-main.hook';
import { useCartMenuAnimation } from './cart-menu.animation';
import { CartMenuProps } from './cart-menu.props';
import * as styles from './cart-menu.scss';
import { useState } from 'react';

/**
 * Renders CartMenu
 */
const CartMenu: React.FC<CartMenuProps> = () => {
  const {
    cartQuantity,
    whiteHeader,
    stickyHeader,
    addedProduct: { isVisible }
  } = useHeaderMainData();
  const { transition } = useCartMenuAnimation(isVisible);
  const dispatch = useDispatch();
  const [showOrderTotal, setShowOrderTotal] = useState(false);

  return (
    <div
      className={styles.cart}
      onClick={() => {
        setShowOrderTotal(!showOrderTotal);
        cartQuantity &&
          dispatch(isVisible ? cart.removeCurrent() : cart.showNotifier());
      }}
    >
      <Icon
        className={styles.icon}
        name={
          whiteHeader || stickyHeader || isVisible
            ? 'shopping-cart'
            : 'shopping-cart-white'
        }
      />
      {cartQuantity > 0 && (
        <div className={styles.indicator}>{cartQuantity}</div>
      )}
      {transition.map(
        ({ item, props, key }) =>
          item && (
            <CartNotifier
              transition={props}
              key={key}
              showOrderTotal={showOrderTotal}
            />
          )
      )}
    </div>
  );
};

export { CartMenu };
