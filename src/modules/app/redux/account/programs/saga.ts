import { ContentType } from '@account/pages/library/models';
import { Context } from '@app/redux/context';
import { State } from '@app/redux/state';
import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { toggleToast } from '@ui/toast';
import { Payload, Saga } from 'redux-chill';
import { call, put, select } from 'redux-saga/effects';
import {
  addProgramToWishlist,
  fetchProgramsPurchased,
  fetchProgramsWishlist,
  removeProgramFromWishlist
} from './actions';

/**
 * programs saga
 */
class ProgramsSaga {
  /**
   * Fetch programs purchased
   */
  @Saga(fetchProgramsPurchased)
  public *fetchProgramsPurchased(_, { api }: Context) {
    yield put(preloaderStart(Preloaders.programsPurchased));

    try {
      const response = yield call(api.programs.fetchProgramsPurchased, 'en-US');

      yield put(fetchProgramsPurchased.success(response.data));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.programsPurchased));
    }
  }

  //TODO purchased api (POST + DELETE)

  /**
   * Fetch programs wishlist
   */
  @Saga(fetchProgramsWishlist)
  public *fetchProgramsWishlist(_, { api }: Context) {
    yield put(preloaderStart(Preloaders.programsWishlist));

    try {
      const response = yield call(api.programs.fetchProgramsWishlist, 'en-US');

      yield put(fetchProgramsWishlist.success(response.data));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.programsWishlist));
    }
  }

  /**
   * Add program to wishlist
   */
  @Saga(addProgramToWishlist)
  public *addProgramToWishlist(
    { id, preloader }: Payload<typeof addProgramToWishlist>,
    { api }: Context
  ) {
    yield put(preloaderStart(preloader));

    try {
      yield call(
        api.programs.addProgramToWishlist,
        id,
        ContentType.onlineCourse
      );

      const { location } = yield select((state: State) => state.router);

      if (location?.pathname.includes('programs-catalogue')) {
        yield put(addProgramToWishlist.success(id));
      }

      yield put(
        toggleToast({
          status: 'success',
          description: 'Program was added to your wishlist'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(preloader));
    }
  }

  /**
   * Remove program from wishlist
   */
  @Saga(removeProgramFromWishlist)
  public *removeProgramFromWishlist(
    { id, preloader }: Payload<typeof removeProgramFromWishlist>,
    { api }: Context
  ) {
    yield put(preloaderStart(preloader));

    try {
      const response = yield call(
        api.programs.removeProgramFromWishlist,
        id,
        ContentType.onlineCourse
      );

      const { location } = yield select((state: State) => state.router);

      yield put(removeProgramFromWishlist.success(response.data));

      if (location?.pathname.includes('programs-catalogue')) {
        yield put(removeProgramFromWishlist.removeHeart(id));
      }

      yield put(
        toggleToast({
          status: 'success',
          description: 'Program was removed from your wishlist'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(preloader));
    }
  }
}

export { ProgramsSaga };
