import { Book } from '@account/pages/library/models';
import { make } from 'redux-chill';

/**
 * Fetch library
 */
const fetchLibraryPurchased = make('[library] fetch library purchased').stage(
  'success',
  (payload: { items: Book[]; total: number }) => payload
);

/**
 * Fetch library wishlist
 */
const fetchLibraryWishlist = make('[library] fetch library wishlist').stage(
  'success',
  (payload: { items: Book[]; total: number }) => payload
);

/**
 * Add book to wishlist
 */
const addBookToWishlist = make('[library] add book to wishlist')
  .stage((payload: string) => payload)
  .stage('success');

/**
 * Remove book from wishlist
 */
const removeBookFromWishlist = make('[library] remove book from wishlist')
  .stage((payload: string) => payload)
  .stage('success');

export {
  fetchLibraryPurchased,
  fetchLibraryWishlist,
  addBookToWishlist,
  removeBookFromWishlist
};
