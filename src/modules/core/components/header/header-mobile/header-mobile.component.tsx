import * as React from 'react';
import * as styles from './header-mobile.scss';
import { useState, useEffect } from 'react';
import { Burger } from './components/burger';
import { Icon } from '@core/components/icon';
import { NavLink, useLocation } from 'react-router-dom';
import { useBurgerTransition } from './components/burger/burger.animation';
import classNames from 'classnames';
import { useHeaderMainData } from '../header-main/hooks';
import { LocalizationMenu } from '../header-main/menus';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { CartMenu } from '../header-main/menus/cart-menu';

/**
 * Cart Icon render if user added some product to cart
 */

const CartIcon: React.FC<{ blackTheme: boolean; cartQuantity: number }> = ({
  blackTheme,
  cartQuantity
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cart} onClick={() => dispatch(navigate('/cart'))}>
      <Icon name='shopping-cart' fill={blackTheme ? 'black' : 'white'} />
      {cartQuantity > 0 && (
        <div className={styles.indicator}>{cartQuantity}</div>
      )}
    </div>
  );
};

/**
 * Renders HeaderMobile
 */
const HeaderMobile: React.FC = () => {
  const [showBurger, setShowBurger] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);
  const { whiteHeader, cartQuantity } = useHeaderMainData();
  const { transition } = useBurgerTransition(showBurger);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const blackTheme = whiteHeader || stickyHeader;
  /**
   * close burger on url change and handle theme
   */
  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.pageYOffset > 0 ? setStickyHeader(true) : setStickyHeader(false)
    );
    return () => {
      setShowBurger(false);
    };
  }, [pathname]);

  return (
    <div
      className={classNames(styles.headerMobile, {
        [styles.whiteHeader]: blackTheme
      })}
    >
      <NavLink className={styles.logo} to={'/'}>
        <Icon name={blackTheme ? 'logo-b' : 'logo'} />
      </NavLink>
      <div className={styles.controll}>
        <CartMenu />
        <LocalizationMenu theme='secondary' />
        <Icon
          name={showBurger ? 'close-burger' : 'burger'}
          fill='#fff'
          onClick={() => setShowBurger(!showBurger)}
        />
      </div>
      {transition.map(
        ({ item, key, props }) => item && <Burger transition={props} />
      )}
    </div>
  );
};

export { HeaderMobile };
