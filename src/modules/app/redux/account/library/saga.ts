import { Context } from '@app/redux/context';
import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Saga } from 'redux-chill';
import { call, put } from 'redux-saga/effects';
import { fetchLibraryPurchased, fetchLibraryWishlist } from './actions';

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
      const response = yield call(api.library.fetchLibraryPurchased, 'en-US');

      yield put(fetchLibraryPurchased.success(response.data));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.libraryPurchased));
    }
  }

  /**
   * Fetch library wishlist
   */
  @Saga(fetchLibraryWishlist)
  public *fetchLibraryWishlist(_, { api }: Context) {
    yield put(preloaderStart(Preloaders.libraryWhishlist));

    try {
      const response = yield call(api.library.fetchLibraryWhishlist, 'en-US');

      yield put(fetchLibraryWishlist.success(response.data));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.libraryWhishlist));
    }
  }
}

export { LibrarySaga };
