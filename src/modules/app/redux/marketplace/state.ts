import { Book } from '@account/pages/library/models';
import { MarketplaceCategory } from '@pages/marketplace/models';

/**
 * marketplace state
 */
class MarketplaceState {
  /**
   * Marketplace slider
   */
  public slider: { title: string; url: string }[] = [];
  /**
   * Categories
   */
  public categories: {
    category: MarketplaceCategory;
    items: Book[];
    total: number;
  }[] = [];
  /**
   * Selected category
   */
  public selectedCategory: MarketplaceCategory = null;
  /**
   * Selected product
   */
  public selectedProduct: Book = null;
}

export { MarketplaceState };
