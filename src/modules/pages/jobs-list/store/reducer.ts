import { JobsState } from './state';
import { reducer } from 'redux-chill';
import { getVacancies } from './actions';

/**
 * jobs state
 */
const jobs = reducer(new JobsState()).on(
  getVacancies.success,
  (state, payload) => (state.vacancies = payload)
);

export { jobs };
