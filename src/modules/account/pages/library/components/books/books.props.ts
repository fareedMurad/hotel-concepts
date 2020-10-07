import { Book } from '../../models';

/**
 * Single Book props
 */
type BookProps = {
  /**
   * Book type
   */
  type: 'wishlist' | 'purchased';
  /**
   * Book
   */
  book: Book;
  /**
   * Is in cart
   */
  inCart?: boolean;
};

/**
 * Books Props
 */
type BooksProps = {
  /**
   * Books type
   */
  type: 'wishlist' | 'purchased';
  /**
   * Classname
   */
  className?: string;
  /**
   * Data
   */
  data: { items: Book[]; total: number };
};

export { BooksProps, BookProps };
