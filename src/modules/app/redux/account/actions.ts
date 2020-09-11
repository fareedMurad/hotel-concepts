import { make } from 'redux-chill';
import { ProfileValues } from '@account/models';

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

export { editProfile, uploadAvatar, deleteAvatar };
