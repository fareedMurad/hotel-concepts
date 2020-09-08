import { HttpService } from './config';

class AccountService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Fetch profile
   */
  public fetchProfile = data =>
    this.http.request({
      method: 'POST',
      url: '',
      data
    });

  /**
   * Upload avatar
   */
  public uploadAvatar = file => {
    this.http.request({
      method: 'POST',
      url: '',
      data: file
    });
  };
}

export { AccountService };
