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
  public editProfile = (data: ProfileValues) =>
    this.http.request({
      method: 'PUT',
      url: '/user',
      data
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
}

export { AccountService };
