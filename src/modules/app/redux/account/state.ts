import { ProfileValues } from '@account/models';

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
    name: '',
    surname: '',
    company: '',
    job: '',
    city: '',
    country: '',
    phone: ''
  };
}

export { AccountState };
