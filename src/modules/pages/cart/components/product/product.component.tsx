import { Book } from '@account/pages/library/models';
import { Program } from '@account/pages/my-programs/models';
import { removeProductFromCart } from '@app/redux/cart';
import classNames from 'classnames';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ProductProps } from './product.props';
import * as styles from './product.scss';
import { ProductCategory } from '@app/models/fastspring';
import { ContentType } from '@app/models/enum';

/**
 * Renders Product
 */
const Product: React.FC<ProductProps> = ({ className, product }) => {
  const dispatch = useDispatch();
  // Typing is bugged here fsr
  const {
    id,
    name,
    price,
    authors,
    courseImage,
    productImage,
    __typename
  } = product as any;

  const isBook = __typename == ContentType.product;
  const image = isBook ? productImage?.file?.url : courseImage?.file?.url;

  return (
    <div className={classNames(styles.product, className)}>
      <div className={styles.preview}>
        <img className={styles.image} src={image} alt={image} />
        <div
          className={styles.remove}
          onClick={() => dispatch(removeProductFromCart(id))}
        >
          Remove
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.name}>{name}</div>
        <div className={styles.authors}>
          {authors?.map(({ name, surname, id }) => (
            <span className={styles.author} key={id}>
              {name} {surname}
            </span>
          ))}
        </div>
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
