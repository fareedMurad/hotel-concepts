import { Program } from '@account/pages/my-programs/models';

/**
 * programs state
 */
class ProgramsState {
  /**
   * Purchased
   */
  public purchased: { items: Program[]; total: number } = null;
  /**
   * Wishlist
   */
  public wishlist: { items: Program[]; total: number } = null;
}

export { ProgramsState };
