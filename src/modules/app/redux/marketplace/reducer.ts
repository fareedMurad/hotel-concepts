import { MarketplaceState } from './state';
import { reducer } from 'redux-chill';
import {
  fetchMarketplaceByCategory,
  fetchMarketplaceCategories,
  fetchMarketplaceList
} from './actions';

/**
 * marketplace state
 */
const marketplace = reducer(new MarketplaceState())
  .on(
    fetchMarketplaceList.success,
    (state, payload) => (state.selectedList = payload)
  )
  .on(fetchMarketplaceCategories.success, (state, payload) => {
    state.categories = payload;
  })
  .on(fetchMarketplaceByCategory.success, (state, payload) => {
    state.selectedCategory = payload;
  });

export { marketplace };
