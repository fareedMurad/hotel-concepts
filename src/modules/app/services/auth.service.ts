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
   * Verify email
   */
  public verifyEmail = (token: string) =>
    this.http.request({
      method: 'PATCH',
      url: '/auth/email/verification',
      headers: {
        token
      }
    });

  /**
   * Email verification resend
   */
  public verifyEmailResend = (token: string) =>
    this.http.request({
      method: 'POST',
      url: '/auth/email/verification/resend',
      headers: {
        token
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
  public resetPassword = (data: ResetPasswordValues, token: string) =>
    this.http.request({
      method: 'PATCH',
      url: '/auth/password/reset',
      headers: {
        token
      },
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
  public googleSignIn = (data: GoogleSignInValues) =>
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
      url: '/auth/fb',
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
