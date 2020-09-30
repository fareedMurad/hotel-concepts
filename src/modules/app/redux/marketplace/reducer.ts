import { reducer } from 'redux-chill';
import {
  fetchMarketplaceByCategory,
  fetchMarketplaceCategories,
  fetchMarketplaceProduct
} from './actions';
import { MarketplaceState } from './state';

/**
 * marketplace state
 */
const marketplace = reducer(new MarketplaceState())
  .on(fetchMarketplaceCategories.success, (state, payload) => {
    state.categories = payload;
  })
  .on(fetchMarketplaceByCategory.success, (state, payload) => {
    state.selectedCategory = payload;
  })
  .on(fetchMarketplaceProduct.success, (state, payload) => {
    state.selectedProduct = payload;
  });

export { marketplace };
