import { cart } from '@app/redux/cart';
import { Icon } from '@core/components/icon';
import { navigate } from '@router/store';
import classNames from 'classnames';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
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
    whiteHeader,
    stickyHeader,
    addedProduct: { isVisible, product },
    showDropdown,
    selectedProducts
  } = useHeaderMainData();
  const { transition } = useCartMenuAnimation(isVisible || showDropdown);
  const dispatch = useDispatch();
  const [isClicked, setisClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(cart.removeCurrent());
  }, [location]);

  const isActive = showDropdown || isVisible;

  return (
    <div
      className={styles.cart}
      onClick={() => {
        // when we show notifier we disable cart click
        if (isVisible) {
          return;
        }
        !!product ? dispatch(cart.showDropdown()) : dispatch(navigate('/cart'));
      }}
    >
      <div
        className={classNames(styles.box, {
          [styles.boxActive]: isActive
        })}
      >
        <Icon
          className={styles.icon}
          name={
            whiteHeader || stickyHeader || isVisible || showDropdown
              ? 'shopping-cart'
              : 'shopping-cart-white'
          }
        />
        {cartQuantity > 0 && (
          <div className={styles.indicator}>{cartQuantity}</div>
        )}
      </div>
      {transition.map(
        ({ item, props, key }) =>
          item && (
            <CartNotifier transition={props} key={key} isClicked={isClicked} />
          )
      )}
    </div>
  );
};

export { CartMenu };
