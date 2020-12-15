import { State } from '@app/redux/state';
import { Spinner } from '@core/components';
import { usePrice } from '@core/shared/hooks/use-price';
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
    pricing
  } = book;

  const { discountPrice, price } = usePrice(pricing);

  const [isLoaded, setIsLoaded] = useState(false);
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = imageSrc;
    imageLoader.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  const oldSafari = browserName === 'Safari' && browserVersion <= '14';
  const imageSrc = oldSafari
    ? `${url}?h=500&w=300`
    : `${url}?h=500&w=300&fm=webp`;

  return (
    <div className={styles.bookItem}>
      {isLoaded ? (
        <img className={styles.image} src={imageSrc} />
      ) : (
        <Spinner className={styles.spiner} />
      )}
      <div className={styles.content}>
        <div className={styles.bookTitle}>{name}</div>

        {/* <div className={sale && styles.bookPriceOld}>${price}</div> */}
        <div className={styles.price}>
          <span className={discountPrice && styles.priceOld}>$ {price}</span>
          {discountPrice && (
            <span className={styles.priceNew}>$ {discountPrice}</span>
          )}
        </div>
        {/* {sale && <div className={styles.sale}>${sale}</div>} */}
      </div>
    </div>
  );
};

export { BookItem };
