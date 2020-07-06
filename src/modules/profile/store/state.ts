import {
  UserInfoModel,
  SecurityInfoModel,
  SettingsModel
} from '@profile/models';

/**
 * profile state
 */
class ProfileState {
  /**
   * User info
   */
  public userInfo: UserInfoModel = null;
  /**
   * User security
   */
  public securityInfo: SecurityInfoModel = null;
  /**
   * User settings
   */
  public settings: SettingsModel = null;
}

export { ProfileState };
