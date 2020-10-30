import { HttpService } from './config';
import {
  RegisterValues,
  LoginValues,
  UpdatePasswordValues,
  ResetPasswordValues,
  ForgotPasswordValues,
  GoogleSignInValues,
  FacebookSignInValues
} from '@auth/models';

class AuthService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Get user
   */
  public getUser = () =>
    this.http.request({
      url: '/user'
    });

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
   * Choose interests
   */
  public chooseInterests = (data: string[]) =>
    this.http.request({
      method: 'PUT',
      url: '/user/interests',
      data: {
        interests: data
      }
    });

  /**
   * Verify email
   */
  public verifyEmail = (token: string, isNewEmail: boolean) =>
    this.http.request({
      method: 'PATCH',
      url: '/auth/email/verification',
      headers: {
        token,
        isNewEmail
      }
    });

  /**
   * Email verification resend
   */
  public verifyEmailResend = (token: string, isNewEmail: boolean) =>
    this.http.request({
      method: 'POST',
      url: '/auth/email/verification/resend',
      headers: {
        token,
        isNewEmail
      }
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
  public resetPassword = (password: string, token: string) =>
    this.http.request({
      method: 'PATCH',
      url: '/auth/password/reset',
      headers: {
        token
      },
      data: { password: password }
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
  public googleSignIn = (data: { token: string }) =>
    this.http.request({
      method: 'POST',
      url: '/auth/google',
      data
    });

  /**
   * Sign in with facebook
   */
  public facebookSignIn = (data: FacebookSignInValues) =>
    this.http.request({
      method: 'POST',
      url: '/auth/facebook',
      data
    });

  /**
   * Unauthorize
   */
  public unauthorize = () =>
    this.http.request({
      method: 'POST',
      url: '/auth/logout'
    });
}

export { AuthService };
