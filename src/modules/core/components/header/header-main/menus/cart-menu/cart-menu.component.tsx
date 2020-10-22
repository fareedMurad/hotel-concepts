import * as React from 'react';
import { CartMenuProps } from './cart-menu.props';
import * as styles from './cart-menu.scss';

/**
 * Render Cart menu item
 */

const CartMenuItem: React.FC<any> = ({}) => {
  return (
    <div className={styles.item}>
      <img src='' />
      <div className={styles.itemDescription}>
        <div className={styles.itemDescriptionName}></div>
        <div className={styles.itemDescriptionAuthor}></div>
        <div className={styles.itemDescriptionPrice}></div>
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
    </div>
  );
};

export { CartMenu };
