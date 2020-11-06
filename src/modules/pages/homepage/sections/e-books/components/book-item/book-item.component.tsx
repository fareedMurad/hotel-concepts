import * as React from 'react';
import { BookItemProps } from './book-item.props';
import * as styles from './book-item.scss';

/**
 * Renders BookItem
 */
const BookItem: React.FC<BookItemProps> = ({
  book: { image, price, sale, title }
}) => (
  <div className={styles.bookItem}>
    <img className={styles.image} src={image} />
    <div className={styles.content}>
      <div className={styles.bookTitle}>{title}</div>
      <div className={styles.bookPrice}>
        <div className={sale && styles.bookPriceOld}>${price}</div>
        {sale && <div className={styles.sale}>${sale}</div>}
      </div>
    </div>
  </div>
);

export { BookItem };
