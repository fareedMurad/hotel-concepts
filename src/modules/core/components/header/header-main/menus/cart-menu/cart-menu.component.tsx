import { Icon } from '@core/components/icon';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartNotifier } from '../../components/cart-notifier';
import { useHeaderMainData } from '../../hooks/header-main.hook';
import { CartMenuProps } from './cart-menu.props';
import * as styles from './cart-menu.scss';

/**
 * Renders CartMenu
 */
const CartMenu: React.FC<CartMenuProps> = () => {
  const dispatch = useDispatch();
  const { cartQuantity, addedProduct, whiteHeader } = useHeaderMainData();

  return (
    <div className={styles.cart} onClick={() => dispatch(navigate('/cart'))}>
      <Icon name={whiteHeader ? 'shopping-cart' : 'shopping-cart-white'} />
      {cartQuantity > 0 && (
        <div className={styles.indicator}>{cartQuantity}</div>
      )}
      {addedProduct && <CartNotifier />}
    </div>
  );
};

export { CartMenu };
