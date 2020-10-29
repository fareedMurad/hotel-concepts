import * as React from 'react';
import { BookItemProps } from './book-item.props';
import * as styles from './book-item.scss';

/**
 * Renders BookItem
 */
const BookItem: React.FC<BookItemProps> = ({
  book: { image, price, sale, title }
}) => {
  console.log(image);
  return (
    <div className={styles.bookItem}>
      <img className={styles.image} src={image} />
      <div className={styles.meta}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>
          <div>{price}</div>
          {sale && <div className={styles.sale}>{sale}</div>}
        </div>
      </div>
    </div>
  );
};

export { BookItem };
