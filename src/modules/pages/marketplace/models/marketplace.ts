/**
 * Marketplace category model
 */
type MarketplaceCategory = {
  category: {
    id: string;
    slug: string;
    category: string;
    __typename: string;
  };
  total: number;
};

export { MarketplaceCategory };
