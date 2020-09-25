/**
 * programs state
 */
class ProgramsState {
  /**
   * Purchased
   */
  public purchased: { items: []; total: number } = null;
  /**
   * Wishlist
   */
  public wishlist: { items: []; total: number } = null;
}

export { ProgramsState };
