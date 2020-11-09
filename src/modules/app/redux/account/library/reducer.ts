import { reducer } from 'redux-chill';
import {
  fetchLibraryPurchased,
  fetchLibraryWishlist,
  removeBookFromWishlist
} from './actions';
import { LibraryState } from './state';

/**
 * library state
 */
const library = reducer(new LibraryState())
  .on(fetchLibraryPurchased.success, (state, payload) => {
    state.purchased = payload;
  })
  .on(fetchLibraryWishlist.success, (state, payload) => {
    state.wishlist = payload;
  })
  .on(removeBookFromWishlist.library, (state, payload) => {
    state.wishlist = payload;
  })
  .on(
    removeBookFromWishlist.success,
    (state, payload) => (state.wishlist = payload)
  );

export { library };
