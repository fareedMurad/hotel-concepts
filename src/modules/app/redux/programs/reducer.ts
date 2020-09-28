import { SingleProgramModel } from '@app/models/single-program';
import { ProgramsState } from './state';
import { reducer } from 'redux-chill';
import {
  getCategories,
  getPrograms,
  selectCategory,
  getSingleCategory
} from './actions';

/**
 * programs state
 */
const programsData = reducer(new ProgramsState())
  .on(getCategories.success, (state, payload) => (state.categories = payload))

  .on(getPrograms.success, (state, payload) => {
    const { total, data } = payload;
    state.programs = data;
    state.programsTotal = total;
  })
  .on(selectCategory, (state, payload) => (state.selectedCategory = payload))
  .on(
    getSingleCategory.success,
    (state, payload) => (state.selectedCategory = payload)
  );

export { programsData };
