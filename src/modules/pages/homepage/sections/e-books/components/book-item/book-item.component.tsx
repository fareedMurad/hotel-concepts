import { Spinner } from '@core/components';
import * as React from 'react';
import { useEffect, useState } from 'react';
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

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = url;
    imageLoader.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <div className={styles.bookItem}>
      {isLoaded ? (
        <img className={styles.image} src={url} />
      ) : (
        <Spinner className={styles.spiner} />
      )}
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
