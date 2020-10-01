import * as React from 'react';
import { CartItemProps } from './cart-item.props';
import * as styles from './cart-item.scss';

/**
 * Renders CartItem
 */
const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { name, price, amount, author, preordered, img } = item;
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img
          src={require(`img/marketplace/marketplace-4.png`)}
          alt=''
          height='180px'
          width='130px'
        />
        <div className={styles.remove}>Remove</div>
      </div>
      <div className={styles.cartItemInfo}>
        <div className={styles.cartItemInfoTitle}>{name}</div>
        <div className={styles.description}>
          <div className={styles.descriptionAuthor}>{author}</div>
          <div className={styles.descriptionAmount}>{amount}</div>
          <div className={styles.descriptionPrice}>{price}</div>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
