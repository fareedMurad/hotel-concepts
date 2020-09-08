import { HttpService } from './config';
import {
  RegisterValues,
  LoginValues,
  UpdatePasswordValues,
  ResetPasswordValues,
  ForgotPasswordValues
} from '@auth/models';

class AuthService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Login
   */
  public login = (data: LoginValues) =>
    this.http.request({
      method: 'POST',
      url: '/auth/login',
      data
    });

  /**
   * Register
   */
  public register = (data: RegisterValues) =>
    this.http.request({
      method: 'POST',
      url: '/auth/register',
      data
    });

  /**
   * Reset password
   */
  public forgotPassword = (data: ForgotPasswordValues) =>
    this.http.request({
      method: 'POST',
      url: '/auth/password/forgot',
      data
    });

  /**
   * Reset password
   */
  public resetPassword = (data: ResetPasswordValues) =>
    this.http.request({
      method: 'PATCH',
      url: '/auth/password/reset',
      data
    });

  /**
   * Update password
   */
  public updatePassword = (data: UpdatePasswordValues) =>
    this.http.request({
      method: 'PATCH',
      url: '/auth/password/update',
      data
    });
  /*
   * Sign in with google
   */
  public signInWithGoogle = data =>
    this.http.request({
      method: 'POST',
      url: '/auth/google',
      data: data
    });
}

export { AuthService };
