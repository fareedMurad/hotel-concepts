import { PaymentMethodsModel } from '@account/models/payment';
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
 * Edit interests
 */
const editInterests = make('[account] edit interests').stage(
  (payload: string[]) => payload
);

/**
 * Edit password
 */
const editPassword = make('[account] edit password').stage(
  (payload: string) => payload
);

/*
 * Edit payment method
 */
const editPaymentMethods = make('[account] edit payment method')
  .stage((payload: PaymentMethodsModel) => payload)
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

/**
 * Edit newsletter subscription
 */
const editNewsletterSubscription = make(
  '[account] edit newsletter subscription'
).stage((payload: { newsSub: boolean }) => payload);

export {
  editPrefferedLanguage,
  editContactAddress,
  editInterests,
  editPassword,
  editPaymentMethods,
  uploadAvatar,
  deleteAvatar,
  editNewsletterSubscription
};
