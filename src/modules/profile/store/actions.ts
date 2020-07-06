import { make } from 'redux-chill';
import {
  UserInfoModel,
  SecurityInfoModel,
  SettingsModel
} from '@profile/models';

/**
 * Get user info
 */
const getUserInfo = make('[profile] get user info').stage(
  'success',
  (payload: UserInfoModel) => payload
);

/**
 * Get user security info
 */
const getSecurityInfo = make('[profile] get security info').stage(
  'success',
  (payload: SecurityInfoModel) => payload
);

/**
 * Get user settings
 */
const getSettings = make('[profile] get settings').stage(
  'success',
  (payload: SettingsModel) => payload
);

export { getUserInfo, getSecurityInfo, getSettings };
