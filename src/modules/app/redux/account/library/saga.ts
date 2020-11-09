import { ContentType } from '@account/pages/library/models';
import { Context } from '@app/redux/context';
import { fetchMarketplaceProduct } from '@app/redux/marketplace/actions';
import { State } from '@app/redux/state';
import { downloadBlob } from '@core/shared';
import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { toggleToast } from '@ui/toast';
import axios from 'axios';
import { Payload, Saga } from 'redux-chill';
import { call, put, select } from 'redux-saga/effects';
import {
  addBookToWishlist,
  downloadBook,
  fetchLibraryPurchased,
  fetchLibraryWishlist,
  removeBookFromWishlist
} from './actions';

/**
 * library saga
 */
class LibrarySaga {
  /**
   * Fetch library purchased
   */
  @Saga(fetchLibraryPurchased)
  public *fetchLibraryPurchased(_, { api }: Context) {
    yield put(preloaderStart(Preloaders.libraryPurchased));

    try {
      const response = yield call(
        api.library.fetchLibraryPurchased,
        'en-US',
        ContentType.product
      );

      yield put(fetchLibraryPurchased.success(response.data));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.libraryPurchased));
    }
  }

  //TODO purchased api (POST + DELETE)

  /**
   * Fetch library wishlist
   */
  @Saga(fetchLibraryWishlist)
  public *fetchLibraryWishlist(_, { api }: Context) {
    yield put(preloaderStart(Preloaders.libraryWishlist));

    try {
      const response = yield call(
        api.library.fetchLibraryWishlist,
        'en-US',
        ContentType.product
      );

      yield put(fetchLibraryWishlist.success(response.data));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.libraryWishlist));
    }
  }

  /**
   * Add book to wishlist
   */
  @Saga(addBookToWishlist)
  public *addBookToWishlist(
    { id, preloader, page }: Payload<typeof addBookToWishlist>,
    { api }: Context
  ) {
    const pages = {
      '/marketplace': addBookToWishlist.marketplace,
      [`/marketplace/${id}`]: addBookToWishlist.product
    };
    const handle = pages[page];

    yield put(preloaderStart(preloader));
    try {
      yield call(api.library.addBookToWishlist, id, ContentType.product);
      yield put(handle(id));

      yield put(
        toggleToast({
          status: 'success',
          description: 'Book was added to your wishlist'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(preloader));
    }
  }

  /**
   * Remove book from wishlist
   */
  @Saga(removeBookFromWishlist)
  public *removeBookFromWishlist(
    { id, preloader, page }: Payload<typeof removeBookFromWishlist>,
    { api }: Context
  ) {
    const pages = {
      '/account/library/wishlist': removeBookFromWishlist.library,
      '/marketplace': removeBookFromWishlist.marketplace,
      [`/marketplace/${id}`]: removeBookFromWishlist.product
    };
    const handle = pages[page];
    const isLibrary = page == '/account/library/wishlist';

    yield put(preloaderStart(preloader));
    try {
      const response = yield call(
        api.library.removeBookFromWishlist,
        id,
        ContentType.product
      );
      yield put(handle(isLibrary ? response.data : id));
      yield put(removeBookFromWishlist.success(response.data));

      yield put(
        toggleToast({
          status: 'success',
          description: 'Book was removed from your wishlist'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(preloader));
    }
  }

  /**
   * Download book
   */
  @Saga(downloadBook)
  public *downloadBook(url: Payload<typeof downloadBook>) {
    try {
      const response = yield call(axios.get, url, {
        responseType: 'blob'
      });
      downloadBlob(response.data, name);
    } catch (error) {
      console.log(error);
    }
  }
}

export { LibrarySaga };
