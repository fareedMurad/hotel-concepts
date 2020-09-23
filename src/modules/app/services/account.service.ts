import { HttpService } from './config';
import { ProfileValues } from '@account/models';
import { ContactAddressModel } from '@account/pages/profile/models';

class AccountService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /*
   * Edit preferred language
   */
  public editPreferredLanguage = (language: string) =>
    this.http.request({
      method: 'PUT',
      url: '/user/language',
      data: {
        language
      }
    });

  /**
   * Edit contact address
   */
  public editContactAddress = (data: ContactAddressModel) => {
    const {
      name,
      surname,
      title,
      company,
      job,
      city,
      country,
      phone,
      position
    } = data;

    return this.http.request({
      method: 'PUT',
      url: '/user',
      data: {
        name,
        surname,
        title,
        company,
        job,
        city,
        country,
        phone,
        position
      }
    });
  };

  /**
   * Upload avatar
   */
  public uploadAvatar = file =>
    this.http.request({
      method: 'POST',
      url: '/user/avatar',
      data: file
    });

  /**
   * Delete avatar
   */
  public deleteAvatar = () =>
    this.http.request({
      method: 'DELETE',
      url: '/user/avatar'
    });

  /*
   * Update or set payment methods
   */
  public selectPaymentMethods = payload =>
    this.http.request({
      method: 'PUT',
      url: 'user/payment-method',
      data: payload
    });
  /*
   * Update news subscription
   */
  public updateNewsSubscription = payload =>
    this.http.request({
      method: 'PUT',
      url: 'user/news-subscription',
      data: payload
    });
}

export { AccountService };
