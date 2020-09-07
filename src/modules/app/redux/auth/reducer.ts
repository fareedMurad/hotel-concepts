import { AuthState } from './state';
import { reducer } from 'redux-chill';

/**
 * auth state
 */
const auth = reducer(new AuthState());

export { auth }