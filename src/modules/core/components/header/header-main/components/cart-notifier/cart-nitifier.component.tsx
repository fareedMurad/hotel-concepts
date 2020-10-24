import { Button } from '@core/components/button';
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
      <img
        className={styles.itemImage}
        src={
          'https://lh3.googleusercontent.com/proxy/JMBMqc83kWJkNcrYYZQxlFk10SdcTsJZhooz61dbzclU_Z1-F4RFZqgfdZHt'
        }
      />
      <div className={styles.description}>
        <div className={styles.descriptionName}>Book</div>
        <div className={styles.descriptionAuthor}>
          {/* {addedProduct?.authors.map(author => (
            <span key={author.id}>{author.name}</span>
          ))} */}
          Author
        </div>
        <div className={styles.descriptionPrice}>
          {addedProduct?.price} 3900
        </div>
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
      <div className={styles.title}>Free</div>
      <CartNotifierItem />
      <div className={styles.cartNotifierFooter}>
        <div className={styles.cartNotifierTotal}>
          <span>Total price: </span> <span>189px</span>{' '}
        </div>
        <Button width={'100%'} arrow>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export { CartNotifier };
