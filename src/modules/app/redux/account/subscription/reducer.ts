import { SubscriptionState } from './state';
import { reducer } from 'redux-chill';
import { fetchSubscription } from './actions';

/**
 * subscription state
 */
const subscription = reducer(new SubscriptionState()).on(
  fetchSubscription.success,
  (state, payload) => {
    state.subscription = payload;
  }
);

export { subscription };
