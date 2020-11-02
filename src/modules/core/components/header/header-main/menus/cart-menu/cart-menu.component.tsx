import { Icon } from '@core/components/icon';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { CartNotifier } from '../../components/cart-notifier';
import { useHeaderMainData } from '../../hooks/header-main.hook';
import { useCartMenuAnimation } from './cart-menu.animation';
import { CartMenuProps } from './cart-menu.props';
import * as styles from './cart-menu.scss';

/**
 * Renders CartMenu
 */
const CartMenu: React.FC<CartMenuProps> = () => {
  const {
    cartQuantity,
    isProductInCart,
    whiteHeader,
    stickyHeader
  } = useHeaderMainData();
  const { transition } = useCartMenuAnimation(isProductInCart);
  const dispatch = useDispatch();

  return (
    <div className={styles.cart} onClick={() => dispatch(navigate('/cart'))}>
      <Icon
        className={styles.icon}
        name={
          whiteHeader || stickyHeader || isProductInCart
            ? 'shopping-cart'
            : 'shopping-cart-white'
        }
      />
      {cartQuantity > 0 && (
        <div className={styles.indicator}>{cartQuantity}</div>
      )}
      {transition.map(
        ({ item, props, key }) =>
          item && <CartNotifier transition={props} key={key} />
      )}
    </div>
  );
};

export { CartMenu };
