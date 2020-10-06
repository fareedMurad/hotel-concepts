import { downloadBook, removeBookFromWishlist } from '@app/redux/account';
import { addToCart, cart } from '@app/redux/cart';
import { State } from '@app/redux/state';
import { Button, Icon } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookProps, BooksProps } from './books.props';
import * as styles from './books.scss';

/**
 * Renders single book
 */
const Book: React.FC<BookProps> = ({ type, book, inCart }) => {
  const dispatch = useDispatch();
  const fromWishlist = type == 'wishlist';
  const {
    id,
    name,
    productImage: {
      file: { url }
    }
  } = book || {};

  return (
    <div className={styles.book}>
      {fromWishlist && (
        <Icon
          className={styles.like}
          name='heart'
          onClick={() =>
            dispatch(
              removeBookFromWishlist({
                id,
                preloader: Preloaders.libraryWishlist
              })
            )
          }
        />
      )}
      <img className={styles.image} src={url} alt={url} />
      <div className={styles.divider} />
      <div className={styles.name}>{name}</div>
      <div className={styles.controls}>
        {fromWishlist ? (
          inCart ? (
            <Button disabled>Is in cart</Button>
          ) : (
            <Button arrow onClick={() => dispatch(addToCart({ id }))}>
              Add to cart
            </Button>
          )
        ) : (
          <React.Fragment>
            <Button arrow>Read</Button>
            <Button
              theme='secondary'
              arrow
              // onClick={() => dispatch(downloadBook(()))}
            >
              Download
            </Button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

/**
 * Renders Books
 */
const Books: React.FC<BooksProps> = ({ className, type, data }) => {
  const { selectedProducts } = useSelector((state: State) => state.cart);
  const fromWishlist = type == 'wishlist';
  const { items, total } = data || {};

  return total > 0 ? (
    <div className={classNames(styles.books, className)}>
      {items.map(book => {
        const match = selectedProducts.some(one => one == book.id);

        return <Book type={type} book={book} inCart={match} key={book?.id} />;
      })}
    </div>
  ) : (
    <div className={styles.placeholder}>
      Your Library {fromWishlist ? 'Wishlist' : 'Purchased list'} is empty.
      Start adding some.
    </div>
  );
};

export { Books };
