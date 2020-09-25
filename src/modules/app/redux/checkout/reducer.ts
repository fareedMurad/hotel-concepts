import { reducer } from 'redux-chill';
import { CheckoutState } from './state';

/**
 * Checkout Reducer
 */
const checkouts = reducer(new CheckoutState());

export { checkouts };
