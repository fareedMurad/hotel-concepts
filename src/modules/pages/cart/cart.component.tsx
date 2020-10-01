import * as React from 'react';
import { CartProps } from './cart.props';
import * as styles from './cart.scss';
import { useCartData } from './cart-hook';
import { CartItem } from './cart-item';

/**
 * Renders Cart
 */
const Cart: React.FC<CartProps> = ({}) => {
  const { cartData } = useCartData();
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <div className={styles.cartHeaderTitle}>My cart</div>
        <div className={styles.cartHeaderCounter}>2 items</div>
      </div>
      <div className={styles.cartItemsList}>
        {cartData.map(item => {
          return <CartItem item={item} />;
        })}
      </div>
    </div>
  );
};

export { Cart };
