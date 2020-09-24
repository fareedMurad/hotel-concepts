import { ProgramsState } from './state';
import { reducer } from 'redux-chill';

/**
 * programs state
 */
const programs = reducer(new ProgramsState());

export { programs }