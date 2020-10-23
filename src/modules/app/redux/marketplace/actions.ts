import { Book } from '@account/pages/library/models';
import {
  MarketplaceCategory,
  MarketplaceModel
} from '@pages/marketplace/models';
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
const fetchMarketplace = make('[marketplace] fetch categories').stage(
  'success',
  (payload: MarketplaceModel) => payload
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
  .stage((payload: string) => payload)
  .stage('success', (payload: Book) => payload);

export {
  fetchMarketplaceList,
  fetchMarketplace,
  fetchMarketplaceByCategory,
  fetchMarketplaceProduct
};
