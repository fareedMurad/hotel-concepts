import { reducer } from 'redux-chill';
import { addBookToWishlist, removeBookFromWishlist } from '../account';
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
  })
  .on(addBookToWishlist.success, (state, payload) => {
    state.categories = state.categories.map(category => {
      category.items = category.items.map(item => {
        if (item.id === payload) {
          item.inWishlist = true;
        }
        return item;
      });
      return category;
    });
  })
  .on(removeBookFromWishlist.removeHeart, (state, payload) => {
    state.categories = state.categories.map(category => {
      category.items = category.items.map(item => {
        if (!payload.includes(item.id)) {
          item.inWishlist = false;
        }
        return item;
      });
      return category;
    });
  });

export { marketplace };
