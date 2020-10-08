import { Program } from '@account/pages/my-programs/models';
import { Preloaders } from '@ui/models';
import { make } from 'redux-chill';

/**
 * Fetch purchased programs
 */
const fetchProgramsPurchased = make(
  '[programs] fetch programs purchased'
).stage('success', (payload: { items: Program[]; total: number }) => payload);

/**
 * Fetch programs wishlist
 */
const fetchProgramsWishlist = make('[programs] fetch programs wishlist').stage(
  'success',
  (payload: { items: Program[]; total: number }) => payload
);

/**
 * Add program to wishlist
 */
const addProgramToWishlist = make('[program] add program to wishlist')
  .stage((payload: { id: string; preloader: Preloaders }) => payload)
  .stage('success', (id: string) => id);

/**
 * Remove program from wishlist
 */
const removeProgramFromWishlist = make('[program] remove program from wishlist')
  .stage((payload: { id: string; preloader: Preloaders }) => payload)
  .stage('success', (payload: { items: Program[]; total: number }) => payload)
  .stage('removeHeart', (id: string) => id);

export {
  fetchProgramsPurchased,
  fetchProgramsWishlist,
  addProgramToWishlist,
  removeProgramFromWishlist
};
