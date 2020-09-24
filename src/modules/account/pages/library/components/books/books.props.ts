/**
 * Single Book props
 */
type BookProps = {
  /**
   * Book type
   */
  type: 'wishlist' | 'purchased';
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
  data: { items: []; total: number };
};

export { BooksProps, BookProps };
