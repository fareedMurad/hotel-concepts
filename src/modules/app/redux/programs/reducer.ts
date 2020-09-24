import { ProgramsState } from './state';
import { reducer, Payload } from 'redux-chill';
import { getCategories, getPrograms } from './actions';

/**
 * programs state
 */
const programsData = reducer(new ProgramsState())
  .on(getCategories.success, (state, payload) => (state.categories = payload))

  .on(getPrograms.success, (state, payload) => (state.programs = payload));

export { programsData };
