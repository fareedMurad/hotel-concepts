import { Book } from '@account/pages/library/models';
import { MarketplaceCategory } from '@pages/marketplace/models';
import { make } from 'redux-chill';

/**
 * Fetch marketplace list
 */
const fetchMarketplaceList = make('[marketplace] fetch list')
  .stage((payload: string) => payload)
  .stage('success', (payload: { result: Book[]; total: number }) => payload);

/**
 * Fetch marketplace categories
 */
const fetchMarketplaceCategories = make('[marketplace] fetch categories').stage(
  'success',
  (
    payload: {
      category: MarketplaceCategory['category'];
      items: Book[];
      total: number;
    }[]
  ) => payload
);

/**
 * Fetch marketplace products by category id
 */
const fetchMarketplaceByCategory = make('[marketplace] fetch by category')
  .stage((payload: string) => payload)
  .stage('success', (payload: MarketplaceCategory['category']) => payload);

/**
 * Fetch marketplace product
 */
const fetchMarketplaceProduct = make('[marketplace] fetch product')
  .stage((payload: string) => payload)
  .stage('success', (payload: Book) => payload);

export {
  fetchMarketplaceList,
  fetchMarketplaceCategories,
  fetchMarketplaceByCategory,
  fetchMarketplaceProduct
};
