import { handleNotifierCart } from '@app/redux/cart';
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
const CartMenu: React.FC<CartMenuProps> = ({ isWhite }) => {
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
    dispatch(handleNotifierCart.hideModal());
  }, [location]);

  const isActive = showDropdown || isVisible;

  const getIconColor = () => {
    //rework this trash
    if (isWhite) return 'shopping-cart-white';
    else if (whiteHeader || stickyHeader || isVisible || showDropdown)
      return 'shopping-cart';
    else return 'shopping-cart-white';
  };

  return (
    <div
      className={styles.cart}
      onClick={() => {
        // when we show notifier we disable cart click
        if (isVisible) {
          return;
        }
        !!product
          ? dispatch(handleNotifierCart.defaultClick())
          : dispatch(navigate('/cart'));
      }}
    >
      <div
        className={classNames(styles.box, {
          [styles.boxActive]: isActive
        })}
      >
        <Icon
          className={classNames(styles.icon, {
            [styles.active]: isClicked
          })}
          name={getIconColor()}
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
