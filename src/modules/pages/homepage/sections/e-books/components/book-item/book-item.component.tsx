import { State } from '@app/redux/state';
import { Spinner } from '@core/components';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && browserVersion < '14';

  const imageSrc = oldSafari
    ? `${url}?h=500&w=300`
    : `${url}?h=500&w=300&fm=webp`;

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = imageSrc;
    imageLoader.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <div className={styles.bookItem}>
      {isLoaded ? (
        <img className={styles.image} src={imageSrc} />
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
