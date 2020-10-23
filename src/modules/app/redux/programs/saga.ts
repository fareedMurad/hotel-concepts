import { Saga, Payload } from 'redux-chill';
import {
  getPrograms,
  selectCategory,
  getSingleCategory,
  getSingleProgram,
  getCategories,
  sendRequest
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
    language: Payload<typeof getCategories>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.categories));
    try {
      const response = yield call(api.programs.getCategories, language);

      if (response.data.length === 0) return;

      const { id } = response.data[0]?.category;

      const params = {
        skip: 0,
        limit: 6,
        category: id,
        locale: language,
        subfilters: OnlineCourseSubfilter.all
      };
      yield put(getPrograms(params));
      yield put(selectCategory(response.data[0]));
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
  /*
   * Get single program
   */
  @Saga(getSingleProgram)
  public *getSingleProgram(
    payload: Payload<typeof getSingleProgram>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.programs));

    try {
      const response = yield call(api.programs.getSingleProgram, payload);
      console.log(response);
      yield put(getSingleProgram.success(response.data));
    } catch (err) {
      console.log(err);
    } finally {
      yield put(preloaderStop(Preloaders.programs));
    }
  }

  /*
   * Saga send request contact us
   */

  @Saga(sendRequest)
  public *sendRequest(payload: Payload<typeof sendRequest>, { api }: Context) {
    console.log(payload);
    try {
      yield call(api.form.sendForm, payload);
    } catch (error) {
      console.log(error);
    }
  }
}

export { ProgramsSaga };
