import { ContentType } from '@account/pages/library/models';
import { Context } from '@app/redux/context';
import { fetchMarketplaceCategories } from '@app/redux/marketplace';
import { State } from '@app/redux/state';
import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { toggleToast } from '@ui/toast';
import { Payload, Saga } from 'redux-chill';
import { call, put, select } from 'redux-saga/effects';
import {
  addBookToWishlist,
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
    payload: Payload<typeof addBookToWishlist>,
    { api }: Context
  ) {
    // TODO Preloader start

    try {
      yield call(api.library.addBookToWishlist, payload, ContentType.product);

      const { location } = yield select((state: State) => state.router);

      if (location.pathname === '/marketplace') {
        yield put(addBookToWishlist.success(payload));
      }

      yield put(
        toggleToast({
          status: 'success',
          description: 'Book was added to your wishlist'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      // TODO Preloader stop
    }
  }

  /**
   * Remove book from wishlist
   */
  @Saga(removeBookFromWishlist)
  public *removeBookFromWishlist(
    payload: Payload<typeof removeBookFromWishlist>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.libraryWishlist));

    try {
      const response = yield call(
        api.library.removeBookFromWishlist,
        payload,
        ContentType.product
      );

      const { location } = yield select((state: State) => state.router);

      if (location.pathname === '/marketplace') {
        const {
          data: { items }
        } = response;
        if (Array.isArray(items)) {
          yield put(
            removeBookFromWishlist.removeHeart(
              items.map(item => item.id) as string[]
            )
          );
        }
      }

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
      yield put(preloaderStop(Preloaders.libraryWishlist));
    }
  }
}

export { LibrarySaga };
