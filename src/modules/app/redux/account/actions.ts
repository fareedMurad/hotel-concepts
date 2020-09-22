import { make } from 'redux-chill';
import { ProfileValues } from '@account/models';
import { SubscriptionModel } from '@account/models/subscription';
import { PaymentMethodsModel } from '@account/models/payment';

/**
 * Edit profile
 */
const editProfile = make('[account] edit profile')
  .stage((payload: ProfileValues) => payload)
  .stage('success');

/**
 * Upload avatar
 */
const uploadAvatar = make('[account] upload avatar')
  .stage((file: File) => file)
  .stage('success');

/**
 * Delete avatar
 */
const deleteAvatar = make('[account] delete avatar');

/*
 * Add to wish list
 */
const addToWishList = make('[account] add to wish list').stage(
  payload => payload
);

/*
 * Subscribe
 */
const subscribe = make('[account] subscribe').stage(
  (payload: SubscriptionModel) => payload
);

/*
 * Select payment method
 */

const selectPaymentMethods = make('[account] select payment method')
  .stage((payload: PaymentMethodsModel) => payload)
  .stage('success');

/*
 * Set news subscription
 */
const setNewsSubscription = make('[account] set news subscription')
  .stage((payload: { newsSub: boolean }) => payload)
  .stage('success');

/*
 * Select language
 */
const selectUserLanguage = make('[account] select language')
  .stage((payload: string) => payload)
  .stage('success');

export {
  editProfile,
  uploadAvatar,
  deleteAvatar,
  addToWishList,
  subscribe,
  selectPaymentMethods,
  setNewsSubscription,
  selectUserLanguage
};
