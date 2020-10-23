import { Book } from '@account/pages/library/models';
import { MarketplaceCategory } from '@pages/marketplace/models';

/**
 * Props
 */
type HeroProps = {
  /**
   * Classname
   */
  className?: string;
  /**
   * Categories
   */
  categories: {
    category: MarketplaceCategory;
    items: Book[];
    total: number;
  }[];
  /**
   * Slider data
   */
  slider: { title: string; url: string }[];
};

export { HeroProps };
