import { ProgramsState } from './state';
import { reducer } from 'redux-chill';
import { fetchProgramsPurchased, fetchProgramsWishlist } from './actions';

/**
 * programs state
 */
const programs = reducer(new ProgramsState())
  .on(fetchProgramsPurchased.success, (state, payload) => {
    state.purchased = payload;
  })
  .on(fetchProgramsWishlist.success, (state, payload) => {
    state.wishlist = payload;
  });

export { programs };
