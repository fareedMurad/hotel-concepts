import { make } from 'redux-chill';

/**
 * Fetch library
 */
const fetchLibraryPurchased = make('[library] fetch library purchased').stage(
  'success',
  (payload: { items: []; total: number }) => payload
);

/**
 * Fetch library wishlist
 */
const fetchLibraryWishlist = make('[library] fetch library wishlist').stage(
  'success',
  (payload: { items: []; total: number }) => payload
);

export { fetchLibraryPurchased, fetchLibraryWishlist };
