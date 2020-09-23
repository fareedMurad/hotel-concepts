import { reducer } from 'redux-chill';
import { AccountState } from './state';
import {
  subscribe,
  selectPaymentMethods,
  setNewsSubscription
} from './actions';
import { updatePassword } from '../auth';

/**
 * account state
 */
const account = reducer(new AccountState())
  .on(subscribe, (state, payload) => {
    state.subscribed = true;
    state.subscription = payload;
  })
  // .on(
  //   editProfile.success,
  //   (state, payload) => (state.editProfileSuccess = true)
  // )
  .on(updatePassword.success, state => (state.updatePasswordSuccess = true))
  .on(
    selectPaymentMethods.success,
    state => (state.selectPaymentMethodsSuccess = true)
  )
  .on(
    setNewsSubscription.success,
    state => (state.newsSubscriptionSuccess = true)
  );

export { account };
