import { ContentType } from '@app/models/enum';
import * as React from 'react';
import { useCartNotifierData } from '../../cart-notifier.hook';
import * as styles from './cart-notifier-item.scss';
import classNames from 'classnames';

/**
 * Renders CartNotifierItem
 */
const CartNotifierItem: React.FC<{ className?: string }> = ({ className }) => {
  const { addedProduct } = useCartNotifierData();
  const {
    product: { name, authors, price, __typename, courseImage, productImage }
  } = addedProduct || {};
  const isBook = __typename == ContentType.product;
  const url = productImage?.file?.url;
  const programImage = courseImage?.file?.url;
  
  return (
    <div className={classNames(styles.item, className)}>
      <img className={styles.itemImage} src={isBook ? url : programImage} />
      <div className={styles.description}>
        <div className={styles.descriptionName}>{name}</div>
        <div className={styles.descriptionPrice}>${price}</div>
      </div>
    </div>
  );
};

export { CartNotifierItem };
