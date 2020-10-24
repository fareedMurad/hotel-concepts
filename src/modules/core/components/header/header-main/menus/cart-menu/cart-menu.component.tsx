import { Button } from '@core/components/button';
import * as React from 'react';
import { useCartMenuData } from './cart-menu.hook';
import { CartMenuProps } from './cart-menu.props';
import * as styles from './cart-menu.scss';

/**
 * Render Cart menu item
 */

const CartMenuItem: React.FC<any> = ({}) => {
  const { addedProduct } = useCartMenuData();
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
 * Renders CartMenu
 */
const CartMenu: React.FC<CartMenuProps> = ({}) => {
  return (
    <div className={styles.cartMenu}>
      <div className={styles.title}>Free</div>
      <CartMenuItem />
      <div className={styles.cartMenuFooter}>
        <div className={styles.cartMenuTotal}>
          <span>Total price: </span> <span>189px</span>{' '}
        </div>
        <Button width={'100%'} arrow>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export { CartMenu };
