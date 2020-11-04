import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { animated } from 'react-spring';
import { useCartNotifierData } from '../../cart-notifier.hook';
import { DropdownProps } from './dropdown.props';
import * as styles from './dropdown.scss';
import { CartNotifierItem } from '../cart-notifier-item';
import { Button } from '@core/components/button';

/**
 * Renders Dropdown
 */
const Dropdown: React.FC = () => {
  const { total } = useCartNotifierData();
  const dispatch = useDispatch();

  const navigateToCartPage = () => dispatch(navigate('/cart'));
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export { Dropdown };
