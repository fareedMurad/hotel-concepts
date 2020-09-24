import { LibraryState } from './state';
import { reducer } from 'redux-chill';
import { fetchLibraryPurchased, fetchLibraryWishlist } from './actions';

/**
 * library state
 */
const library = reducer(new LibraryState())
  .on(fetchLibraryPurchased.success, (state, payload) => {
    state.purchased = payload;
  })
  .on(fetchLibraryWishlist.success, (state, payload) => {
    state.wishlist = payload;
  });

export { library };
