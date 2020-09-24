import { reducer } from 'redux-chill';
import { ProfileState } from './state';

/**
 * profile state
 */
const profile = reducer(new ProfileState());

export { profile };
