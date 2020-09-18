import { HttpService } from './config';
import { ProfileValues } from '@account/models';

class AccountService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Edit profile
   */
  public editProfile = (data: ProfileValues) => {
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
}

export { AccountService };
