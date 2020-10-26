import { Button } from '@core/components/button';
import * as React from 'react';
import { animated } from 'react-spring';
import { useCartNotifierData } from './cart-notifier.hook';
import * as styles from './cart-notifier.scss';

/**
 * Render Cart notifier item
 */

const CartNotifierItem: React.FC<any> = ({}) => {
  const { addedProduct } = useCartNotifierData();
  const url = addedProduct?.productImage?.file?.url;

  return (
    <div className={styles.item}>
      <img className={styles.itemImage} src={url} />
      <div className={styles.description}>
        <div className={styles.descriptionName}>{addedProduct?.name}</div>
        <div className={styles.descriptionAuthor}>
          {addedProduct?.authors.map(author => (
            <span key={author.id}>{author.name}</span>
          ))}
        </div>
        <div className={styles.descriptionPrice}>${addedProduct?.price}</div>
      </div>
    </div>
  );
};

/**
 * Renders CartNotifier
 */
const CartNotifier: React.FC<any> = ({ transition }) => {
  const { total } = useCartNotifierData();
  return (
    <animated.div style={transition} className={styles.cartNotifier}>
      <div className={styles.title}>FREE SHIPPING ON ORDERS OF $35+</div>
      <CartNotifierItem />
      <div className={styles.cartNotifierFooter}>
        <div className={styles.cartNotifierTotal}>
          <span>Total price: </span> <span>${total}</span>
        </div>
        <Button className={styles.submit} arrow>
          Checkout
        </Button>
        <div className={styles.hint}>View Shopping Cart for more options</div>
      </div>
    </animated.div>
  );
};

export { CartNotifier };
