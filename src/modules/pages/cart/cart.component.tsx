import * as React from 'react';
import { CartProps } from './cart.props';
import * as styles from './cart.scss';
import { useCartData } from './cart-hook';
import { CartItem } from './components/cart-item';
import { useDispatch } from 'react-redux';
import { isBackgroundWhite } from '@core/components/header/store';
import { Summary } from './components/summary';

/**
 * Renders Cart
 */
const Cart: React.FC<CartProps> = ({}) => {
  const dispatch = useDispatch();
  /**
   * change header theme
   */
  React.useEffect(() => {
    dispatch(isBackgroundWhite(true));
    return () => {
      dispatch(isBackgroundWhite(false));
    };
  }, []);
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
      <div className={styles.hr} />
      <Summary />
      <div className={styles.hrText}>
        <span /> <div>Or checkout with</div> <span />
      </div>
    </div>
  );
};

export { Cart };
