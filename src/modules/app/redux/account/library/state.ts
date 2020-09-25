/**
 * library state
 */
class LibraryState {
  /**
   * Purchased
   */
  public purchased: { items: []; total: number } = null;
  /**
   * Wishlist
   */
  public wishlist: { items: []; total: number } = null;
}

export { LibraryState };
