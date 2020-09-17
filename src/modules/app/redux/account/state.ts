import { ProfileValues } from '@account/models';
import { SubscriptionModel } from '@account/models/subscription';

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
  /*
   * subscription info
   */
  public subscribed = false;
  public subscription: SubscriptionModel = {
    name: null,
    benefits: null,
    expirationDate: null
  };
}

export { AccountState };
