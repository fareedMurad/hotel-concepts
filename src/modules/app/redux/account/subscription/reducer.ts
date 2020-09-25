import { SubscriptionState } from './state';
import { reducer } from 'redux-chill';

/**
 * subscription state
 */
const subscription = reducer(new SubscriptionState());

export { subscription }