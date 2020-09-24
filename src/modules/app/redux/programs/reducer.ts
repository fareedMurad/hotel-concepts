import { ProgramsState } from './state';
import { reducer } from 'redux-chill';
import { getCategories } from './actions';

/**
 * programs state
 */
const programs = reducer(new ProgramsState()).on(
  getCategories.success,
  (state, payload) => (state.categories = payload)
);

export { programs };
