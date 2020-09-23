import { PaymentMethodsModel } from '@account/models/payment';
import { SubscriptionModel } from '@account/models/subscription';
import { ContactAddressModel } from '@account/pages/profile/models';
import { make } from 'redux-chill';

/*
 * Edit preferred language
 */
const editPrefferedLanguage = make('[account] select language')
  .stage((payload: string) => payload)
  .stage('success');

/**
 * Edit contact address
 */
const editContactAddress = make('[account] edit profile')
  .stage((payload: ContactAddressModel) => payload)
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

/**
 * Update password
 */
const updatePassword = make('[account] update password').stage(
  (payload: string) => payload
);

export {
  editContactAddress,
  uploadAvatar,
  deleteAvatar,
  addToWishList,
  subscribe,
  selectPaymentMethods,
  setNewsSubscription,
  editPrefferedLanguage,
  updatePassword
};
