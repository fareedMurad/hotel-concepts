import { make } from 'redux-chill';
import { ProfileValues } from 'src/modules/account/models';

/**
 * Fetch profile
 */
const fetchProfile = make('[account] fetch profile').stage(
  'success',
  (payload: ProfileValues) => payload
);

export { fetchProfile };
