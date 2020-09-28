import { Saga, Payload } from 'redux-chill';
import {
  getCategories,
  getPrograms,
  selectCategory,
  getSingleCategory
} from './actions';
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

      const params = {
        skip: 0,
        limit: 6,
        category: id,
        locale: language,
        subfilters: OnlineCourseSubfilter.all
      };
      //  yield put(getPrograms(params));
      yield put(selectCategory(response.data[0]));
      console.log(response);
      yield put(getCategories.success(response.data));
    } catch (err) {
      console.log(err);
    } finally {
      yield put(preloaderStop(Preloaders.categories));
    }
  }

  /**
   * Saga get single category
   */
  @Saga(getSingleCategory)
  public *getSingleCategory(
    payload: Payload<typeof getSingleCategory>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.categories));
    const { locale, id } = payload;

    try {
      const response = yield call(api.programs.getSingleCategory, id, locale);

      const payload = {
        category: response.data,
        total: 0
      };
      yield put(getSingleCategory.success(payload));
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

      const { result, total } = response.data;

      yield put(getPrograms.success(result, total));
    } catch (err) {
      console.log(err);
    } finally {
      yield put(preloaderStop(Preloaders.programs));
    }
  }
}

export { ProgramsSaga };
