import { Book } from '@account/pages/library/models';
import { Preloaders } from '@ui/models';
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
  .stage(
    (payload: { id: string; preloader?: Preloaders; page: string }) => payload
  )
  .stage('marketplace', (payload: string) => payload)
  .stage('product', (payload: string) => payload);

/**
 * Remove book from wishlist
 */
const removeBookFromWishlist = make('[library] remove book from wishlist')
  .stage(
    (payload: { id: string; preloader?: Preloaders; page: string }) => payload
  )
  .stage('success', (payload: { items: Book[]; total: number }) => payload)
  .stage('library')
  .stage('marketplace', (payload: string) => payload)
  .stage('product', (payload: string) => payload);

/**
 * Download book
 */
const downloadBook = make('[library] download book').stage(
  (url: string) => url
);

export {
  fetchLibraryPurchased,
  fetchLibraryWishlist,
  addBookToWishlist,
  removeBookFromWishlist,
  downloadBook
};
