import { Book } from '@account/pages/library/models';
import { MarketplaceCategory } from '@pages/marketplace/models';

/**
 * marketplace state
 */
class MarketplaceState {
  /**
   * Categories
   */
  public categories: MarketplaceCategory[] = [];
  /**
   * Selected category
   */
  public selectedCategory: MarketplaceCategory = null;
  /**
   * Selected list
   */
  public selectedList: { result: Book[]; total: number } = null;
}

export { MarketplaceState };
