import { Book } from '@account/pages/library/models';
import { MarketplaceCategory } from '@pages/marketplace/models';
import { make } from 'redux-chill';

/**
 * Fetch marketplace list
 */
const fetchMarketplaceList = make('[marketplace] fetch list').stage(
  'success',
  (payload: { result: Book[]; total: number }) => payload
);

/**
 * Fetch marketplace categories
 */
const fetchMarketplaceCategories = make('[marketplace] fetch categories').stage(
  'success',
  (payload: MarketplaceCategory[]) => payload
);

/**
 * Fetch marketplace products by category id
 */
const fetchMarketplaceByCategory = make('[marketplace] fetch by category')
  .stage((payload: string) => payload)
  .stage('success', (payload: MarketplaceCategory) => payload);

/**
 * Fetch marketplace product
 */
const fetchMarketplaceProduct = make('[marketplace] fetch product')
  .stage((payload: { id: string; category: string }) => payload)
  .stage('success');

export {
  fetchMarketplaceList,
  fetchMarketplaceCategories,
  fetchMarketplaceByCategory,
  fetchMarketplaceProduct
};
