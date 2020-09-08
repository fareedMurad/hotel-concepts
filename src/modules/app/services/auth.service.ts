import { HttpService } from './config';

class AuthService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Login
   */
  public login = data =>
    this.http.request({
      method: 'POST',
      url: '',
      data
    });

  /**
   * Register
   */
  public register = data =>
    this.http.request({
      method: 'POST',
      url: '',
      data
    });

  /**
   * Reset password
   */
  public resetPassword = data =>
    this.http.request({
      method: 'POST',
      url: '',
      data
    });

  /**
   * Update password
   */
  public updatePassword = data =>
    this.http.request({
      method: 'POST',
      url: '',
      data
    });
}

export { AuthService };