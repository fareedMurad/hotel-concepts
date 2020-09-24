import { reducer } from 'redux-chill';
import { AccountState } from './state';
import { subscribe } from './actions';

/**
 * account state
 */
const account = reducer(new AccountState()).on(subscribe, (state, payload) => {
  state.subscribed = true;
  state.subscription = payload;
});

export { account };
