import { removeFromCart } from '@app/redux/cart';
import classNames from 'classnames';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ProductProps } from './product.props';
import * as styles from './product.scss';

/**
 * Renders Product
 */
const Product: React.FC<ProductProps> = ({ className, product }) => {
  const dispatch = useDispatch();
  const { id, name, price } = product || {};

  return (
    <div className={classNames(styles.product, className)}>
      <div className={styles.image}>
        {/* <img src="" alt=""/> */}
        <div
          className={styles.remove}
          onClick={() => dispatch(removeFromCart({ id }))}
        >
          Remove
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.name}>{name}</div>
        <div className={styles.author}>Author</div>
        <div className={styles.amount}>
          <div className={styles.amountLabel}>Amount:</div>
          <input className={styles.amountInput} type='text' />
        </div>
        <div className={styles.price}>${price}</div>
      </div>
    </div>
  );
};

export { Product };
