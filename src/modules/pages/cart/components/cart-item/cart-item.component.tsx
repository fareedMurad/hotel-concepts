import { ContentType } from '@app/models/enum';
import { cart } from '@app/redux/cart';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { CartItemProps } from './cart-item.props';
import * as styles from './cart-item.scss';

/**
 * Renders CartItem
 */
const CartItem: React.FC<CartItemProps> = ({
  name,
  author,
  quantity,
  price,
  imageSource,
  id
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img src={imageSource} alt='image' />
        <div
          className={styles.remove}
          onClick={() => dispatch(cart.remove({ path: id, quantity }))}
        >
          Remove
        </div>
      </div>
      <div className={styles.cartItemInfo}>
        <div className={styles.cartItemInfoTitle}>{name}</div>
        <div className={styles.description}>
          <div className={styles.descriptionAuthor}>{author}</div>
          <div className={styles.descriptionAmount}>
            Amount:{' '}
            <input
              onChange={e =>
                dispatch(
                  cart.update({ path: id, quantity: Number(e.target.value) })
                )
              }
              type='number'
              placeholder={quantity?.toString()}
            />
          </div>
          <div className={styles.descriptionPrice}>
            {/* {discount && <span>{discount}</span>} */}
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
