import { Button } from '@core/components/button';
import { useCartData } from '@pages/cart/cart.hook';
import * as React from 'react';
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
        <div className={styles.descriptionName}>Book</div>
        <div className={styles.descriptionAuthor}>
          {/* {addedProduct?.authors.map(author => (
            <span key={author.id}>{author.name}</span>
          ))} */}
          author
        </div>
        <div className={styles.descriptionPrice}>{addedProduct?.price}</div>
      </div>
    </div>
  );
};

/**
 * Renders CartNotifier
 */
const CartNotifier: React.FC = ({}) => {
  return (
    <div className={styles.cartNotifier}>
      <div className={styles.title}>FREE SHIPPING ON ORDERS OF $35+</div>
      <CartNotifierItem />
      <div className={styles.cartNotifierFooter}>
        <div className={styles.cartNotifierTotal}>
          <span>Total price: </span> <span>'</span>
        </div>
        <Button className={styles.submit} arrow>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export { CartNotifier };
