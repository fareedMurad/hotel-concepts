import { ProfileValues } from 'src/modules/account/models';

/**
 * account state
 */
class AccountState {
  /**
   * Profile
   */
  public profile: ProfileValues = {
    language: '',
    email: '',
    password: '',
    repeatPassword: '',
    title: '',
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    city: '',
    country: '',
    phone: ''
  };
}

export { AccountState };
