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
  categories: MarketplaceCategory[];
  /**
   * Slider data
   */
  slider: { title: string; url: string }[];
};

export { HeroProps };
