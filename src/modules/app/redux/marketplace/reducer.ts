import { reducer } from 'redux-chill';
import { addBookToWishlist, removeBookFromWishlist } from '../account';
import {
  fetchMarketplaceByCategory,
  fetchMarketplace,
  fetchMarketplaceProduct
} from './actions';
import { MarketplaceState } from './state';

/**
 * marketplace state
 */
const marketplace = reducer(new MarketplaceState())
  .on(fetchMarketplace.success, (state, { carousel, categories }) => {
    state.categories = categories;
    state.slider = carousel;
  })
  .on(fetchMarketplaceByCategory.success, (state, payload) => {
    state.selectedCategory = payload;
  })
  .on(fetchMarketplaceProduct.success, (state, payload) => {
    state.selectedProduct = payload;
  })
  .on(addBookToWishlist.marketplace, (state, id) => {
    state.categories = state.categories.map(category => {
      category.items = category.items.map(item => {
        if (item.id === id) {
          item.inWishlist = true;
        }
        return item;
      });
      return category;
    });
  })
  .on(addBookToWishlist.product, state => {
    state.selectedProduct.inWishlist = true;
  })
  .on(removeBookFromWishlist.marketplace, (state, id) => {
    state.categories = state.categories.map(category => {
      category.items = category.items.map(item => {
        if (item.id == id) {
          item.inWishlist = false;
        }
        return item;
      });
      return category;
    });
  })
  .on(removeBookFromWishlist.product, state => {
    state.selectedProduct.inWishlist = false;
  });

export { marketplace };
