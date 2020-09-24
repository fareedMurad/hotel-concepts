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
   * Edit interests
   */
  public editInterests = (interests: string[]) => {
    this.http.request({
      method: 'PUT',
      url: '/user/interests',
      data: {
        interests
      }
    });
  };

  /**
   * Edit password
   */
  public editPassword = (newPassword: string) =>
    this.http.request({
      method: 'PATCH',
      url: '/auth/password/update',
      data: { newPassword }
    });

  /**
   * Edit payment methods
   */
  public editPaymentMethods = (paymentMethods: string[]) =>
    this.http.request({
      method: 'PUT',
      url: '/user/payment-method',
      data: { paymentMethods }
    });

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
   * Edit newsletter subscription
   */
  public editNewsletterSubscription = (newsSub: boolean) =>
    this.http.request({
      method: 'PUT',
      url: '/user/news-subscription',
      data: { newsSub }
    });
}

export { AccountService };
