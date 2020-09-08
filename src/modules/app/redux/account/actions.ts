import { make } from 'redux-chill';
import { ProfileValues } from 'src/modules/account/models';

/**
 * Fetch profile
 */
const fetchProfile = make('[account] fetch profile').stage(
  'success',
  (payload: ProfileValues) => payload
);

/**
 * Upload avatar
 */
const uploadAvatar = make('[account] upload avatar')
  .stage((file: File) => file)
  .stage('success');

export { fetchProfile, uploadAvatar };
