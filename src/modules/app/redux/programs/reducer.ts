import { SingleProgramModel } from '@app/models/single-program';
import { ProgramsState } from './state';
import { reducer } from 'redux-chill';
import {
  getCategories,
  getPrograms,
  selectCategory,
  getSingleCategory,
  getSingleProgram
} from './actions';
import { addProgramToWishlist, removeProgramFromWishlist } from '../account';

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
  )
  .on(
    getSingleProgram.success,
    (state, payload) => (state.singleProgram = payload)
  )
  .on(addProgramToWishlist.success, (state, id) => {
    debugger;
    state.programs = state.programs.map(program => {
      if (program.id === id) {
        program.inWishlist = true;
      }
      return program;
    });
  })
  .on(removeProgramFromWishlist.removeHeart, (state, id) => {
    debugger;
    state.programs = state.programs.map(program => {
      if (program.id === id) {
        program.inWishlist = false;
      }
      return program;
    });
  });

export { programsData };
