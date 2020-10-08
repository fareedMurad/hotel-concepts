import { Book } from '@account/pages/library/models';
import { MarketplaceCategory } from '@pages/marketplace/models';

/**
 * marketplace state
 */
class MarketplaceState {
  /**
   * Categories
   */
  public categories: {
    category: MarketplaceCategory['category'];
    items: Book[];
    total: number;
  }[] = [];
  /**
   * Selected category
   */
  public selectedCategory: MarketplaceCategory['category'] = null;
  /**
   * Selected product
   */
  public selectedProduct: Book = null;
}

export { MarketplaceState };