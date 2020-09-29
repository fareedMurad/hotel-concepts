import { Book } from '@account/pages/library/models';

/**
 * library state
 */
class LibraryState {
  /**
   * Purchased
   */
  public purchased: { items: Book[]; total: number } = null;
  /**
   * Wishlist
   */
  public wishlist: { items: Book[]; total: number } = null;
}

export { LibraryState };
