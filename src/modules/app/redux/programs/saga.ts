import { Saga, Payload } from 'redux-chill';
import { getCategories, getPrograms } from './actions';
import { Context } from '../context';
import { put, call } from 'redux-saga/effects';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Preloaders } from '@ui/models';

/**
 * programs saga
 */
class ProgramsSaga {
  /*
   * Saga get categories
   */
  @Saga(getCategories)
  public *getCategories(
    payload: Payload<typeof getCategories>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.categories));
    try {
      const response = yield call(api.programs.getCategories, payload);

      yield put(getCategories.success(response.data));
    } catch (err) {
      console.log(err);
    } finally {
      yield put(preloaderStop(Preloaders.categories));
    }
  }
  /*
   * Saga get programs
   */
  @Saga(getPrograms)
  public *getPrograms(payload: Payload<typeof getPrograms>, { api }: Context) {}
}

export { ProgramsSaga };
