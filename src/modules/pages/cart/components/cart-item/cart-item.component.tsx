import * as React from 'react';
import { CartItemProps } from './cart-item.props';
import * as styles from './cart-item.scss';

/**
 * Renders CartItem
 */
const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const {
    name,
    price,
    amount: currentAmount,
    author,
    preordered,
    img,
    discount
  } = item;
  const [amount, setAmount] = React.useState('');
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
          <div className={styles.descriptionAmount}>
            Amount:{' '}
            <input
              onChange={e => setAmount(e.target.value)}
              type='number'
              placeholder={currentAmount.toString()}
            />
          </div>
          <div className={styles.descriptionPrice}>
            {discount && <span>{discount}</span>}
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
