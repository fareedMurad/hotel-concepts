import * as React from 'react';
import { BookItemProps } from './book-item.props';
import * as styles from './book-item.scss';

/**
 * Renders BookItem
 */
const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const {
    productImage: {
      file: { url }
    },
    name,
    price
  } = book;
  console.log(book);
  return (
    <div className={styles.bookItem}>
      <img className={styles.image} src={url} />
      <div className={styles.content}>
        <div className={styles.bookTitle}>{name}</div>
        <div className={styles.bookPrice}>
          {/* <div className={sale && styles.bookPriceOld}>${price}</div> */}
          <div>${price}</div>
          {/* {sale && <div className={styles.sale}>${sale}</div>} */}
        </div>
      </div>
    </div>
  );
};

export { BookItem };
