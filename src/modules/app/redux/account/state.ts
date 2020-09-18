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
    email: '',
    // password: '',
    // repeatPassword: '',
    position: '',
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
  public editProfileSuccess = false;
  public updatePasswordSuccess = false;
  public selectPaymentMethodsSuccess = false;
  public newsSubscriptionSuccess = false;
}

export { AccountState };
