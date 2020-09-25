import classNames from 'classnames';
import * as React from 'react';
import { BookProps, BooksProps } from './books.props';
import * as styles from './books.scss';

/**
 * Renders single book
 */
const Book: React.FC<BookProps> = ({ type }) => {
  const fromWhishlist = type == 'wishlist';

  return (
    <div className={styles.book}>
      {fromWhishlist && <div className={styles.icon}>Like icon</div>}
      <div className={styles.image}>image</div>
      <div className={styles.divider} />
      <div className={styles.description}>description</div>
      <div className={styles.controls}>Button</div>
    </div>
  );
};

/**
 * Renders Books
 */
const Books: React.FC<BooksProps> = ({ className, type, data }) => {
  const fromWishlist = type == 'wishlist';
  const { items, total } = data || {};

  return total > 0 ? (
    <div className={classNames(styles.books, className)}>
      {items.map(index => (
        <Book type={type} key={index} />
      ))}
    </div>
  ) : (
    <div className={styles.placeholder}>
      Your Library {fromWishlist ? 'Wishlist' : 'Purchased list'} is empty.
      Start adding some.
    </div>
  );
};

export { Books };
