import * as React from 'react';
import { CartDropdownProps } from './cart-dropdown.props';
import * as styles from './cart-dropdown.scss';

/**
 * Renders CartDropdown
 */
const CartDropdown: React.FC<CartDropdownProps> = ({}) => {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.title}>Just added to your cart</div>
      <CartNotifierItem />
      <div className={styles.cartNotifierFooter}>
        {isClicked && (
          <div className={styles.cartNotifierTotal}>
            <span>ORDER TOTAL: </span> <span>${total}</span>
          </div>
        )}
        <Button className={styles.submit} arrow onClick={navigateToCartPage}>
          Checkout
        </Button>
        {isClicked && (
          <div className={styles.hint} onClick={navigateToCartPage}>
            View Shopping Cart for more options
          </div>
        )}
      </div>
    </div>
  );
};

export { CartDropdown };
