import { Saga } from 'redux-chill';
import { getVacancies } from './actions';
import { put, delay } from 'redux-saga/effects';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Preloaders } from '@ui/models';
/**
 * mock up
 */
const vacancies = [
  { id: 1, title: 'Full time', description: 'Community Manager' },
  { id: 2, title: 'Full time', description: 'Community Manager' },
  { id: 3, title: 'Full time', description: 'Community Manager' },
  { id: 4, title: 'Full time', description: 'Community Manager' },
  { id: 5, title: 'Full time', description: 'Community Manager' }
];
/**
 * jobs saga
 */
class JobsSaga {
  @Saga(getVacancies)
  public *getVacancies(_) {
    yield put(preloaderStart(Preloaders.getVacancies));
    try {
      // const response = yield call(api.jobs.getVacancies);
      yield delay(3000);
      if (vacancies) yield put(getVacancies.success(vacancies));
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.getVacancies));
    }
  }
}

export { JobsSaga };
