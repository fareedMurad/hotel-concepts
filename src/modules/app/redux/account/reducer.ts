import { reducer } from 'redux-chill';
import { AccountState } from './state';

/**
 * account state
 */
const account = reducer(new AccountState());

export { account };
