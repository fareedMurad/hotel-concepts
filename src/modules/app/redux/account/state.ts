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
  /*
   * Eddit profile success
   */
  public editProfileSuccess = false;
  /*
   * Update password success
   */

  public updatePasswordSuccess = false;
  /*
   * Select payment success
   */
  public selectPaymentMethodsSuccess = false;

  /*
   *  New subscription success
   */
  public newsSubscriptionSuccess = false;

  /*
   * Select language success
   */
  public selectLanguageSuccess = false;
}

export { AccountState };
