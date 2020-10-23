import { Book } from '@account/pages/library/models';
import { MarketplaceCategory } from '@pages/marketplace/models';

/**
 * Props
 */
type ProductsProps = {
  /**
   * Categories data
   */
  categories: {
    category: MarketplaceCategory;
    items: Book[];
    total: number;
  }[];
};

export { ProductsProps };
