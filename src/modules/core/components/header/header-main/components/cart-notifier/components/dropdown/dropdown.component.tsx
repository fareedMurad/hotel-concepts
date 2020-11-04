import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useCartNotifierData } from '../../cart-notifier.hook';
import * as styles from './dropdown.scss';
import { CartNotifierItem } from '../cart-notifier-item';
import { Button } from '@core/components/button';
import { useRef } from 'react';
import { useClickOutside } from '@core/shared';
import { cart } from '@app/redux/cart';

/**
 * Renders Dropdown
 */
const Dropdown: React.FC = () => {
  const { total } = useCartNotifierData();
  const dispatch = useDispatch();

  const ref = useRef();
  // useClickOutside(ref, () => {
  //   dispatch(cart.showDropdown(false));
  //   console.log('hello');
  // });

  const navigateToCartPage = () => dispatch(navigate('/cart'));
  return (
    <div ref={ref}>
      <div className={styles.title}>Just added to your cart</div>
      <CartNotifierItem />
      <div className={styles.dropdownFooter}>
        <div className={styles.dropdownTotal}>
          <span>ORDER TOTAL: </span> <span>${total}</span>
        </div>

        <Button className={styles.submit} arrow onClick={navigateToCartPage}>
          Checkout
        </Button>

        <div className={styles.hint} onClick={navigateToCartPage}>
          View Shopping Cart for more options
        </div>
      </div>
    </div>
  );
};

export { Dropdown };
