import { AccountState } from './state';
import { reducer } from 'redux-chill';
import { fetchProfile } from './actions';

/**
 * account state
 */
const account = reducer(new AccountState()).on(
  fetchProfile.success,
  (state, payload) => {
    state.profile = payload;
  }
);

export { account };
