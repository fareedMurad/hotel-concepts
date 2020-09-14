import { make } from 'redux-chill';
import { ProfileValues } from '@account/models';
import { SubscriptionModel } from '@account/models/subscription';

/**
 * Edit profile
 */
const editProfile = make('[account] edit profile').stage(
  (payload: ProfileValues) => payload
);

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

export { editProfile, uploadAvatar, deleteAvatar, addToWishList, subscribe };
