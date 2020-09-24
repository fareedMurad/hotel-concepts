import { Saga, Payload } from 'redux-chill';
import { getCategories, getPrograms } from './actions';
import { Context } from '../context';
import { put, call, select } from 'redux-saga/effects';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Preloaders } from '@ui/models';
import { OnlineCourseSubfilter } from '@app/models/enum';
import { State } from '../state';

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
    const { language } = yield select((state: State) => state.localization);
    try {
      const response = yield call(api.programs.getCategories, payload);
      const { id } = response.data[0].category;
      console.log(id);
      const params = {
        skip: 0,
        limit: 6,
        category: id,
        locale: language,
        subfilters: OnlineCourseSubfilter.all
      };
      yield put(getPrograms(params));
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
  public *getPrograms(payload: Payload<typeof getPrograms>, { api }: Context) {
    yield put(preloaderStart(Preloaders.programs));

    try {
      const response = yield call(api.programs.getPrograms, payload);

      const { result } = response.data;
      yield put(getPrograms.success(result));
    } catch (err) {
      console.log(err);
    } finally {
      yield put(preloaderStop(Preloaders.programs));
    }
  }
}

export { ProgramsSaga };
