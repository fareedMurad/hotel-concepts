import { Book } from '@account/pages/library/models';
/**
 * Marketplace category model
 */
type MarketplaceCategory = {
  id: string;
  slug: string;
  category: string;
  __typename: string;
};

/**
 * Marketplace API response model
 */
type MarketplaceModel = {
  carousel: { title: string; url: string }[];
  categories: {
    category: MarketplaceCategory;
    items: Book[];
    total: number;
  }[];
};

export { MarketplaceModel, MarketplaceCategory };
