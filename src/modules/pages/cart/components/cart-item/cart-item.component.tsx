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
  const [value, setValue] = React.useState(quantity.toString() || '1');

  React.useEffect(() => {
    const filteredValue = value.replace(/\D+/g, '');
    setValue(filteredValue);
    dispatch(cart.update({ path: id, quantity: Number(filteredValue) }));
  }, [value]);

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img src={imageSource} alt='image' />
        <div
          className={styles.remove}
          onClick={() => dispatch(cart.remove(id))}
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
              onChange={e => {
                setValue(e.target.value);
              }}
              type='text'
              placeholder={quantity?.toString()}
              value={value}
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
