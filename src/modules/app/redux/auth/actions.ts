import { User } from '@app/models';
import {
  ForgotPasswordValues,
  GoogleSignInValues,
  LoginValues,
  RegisterValues,
  ResetPasswordValues,
  UpdatePasswordValues
} from '@auth/models';
import { make } from 'redux-chill';

/**
 * Authorize
 */
const authorize = make('[auth] authorize user');

/**
 * Unauthorize
 */
const unauthorize = make('[auth] unauthorize user');

/**
 * Get user
 */
const getUser = make('[auth] get user').stage(
  'success',
  (payload: User) => payload
);

/**
 * Login
 */
const login = make('[auth] login')
  .stage((payload: LoginValues) => payload)
  .stage('success');

/**
 * Register
 */
const register = make('[auth] register')
  .stage((payload: RegisterValues) => payload)
  .stage('success');

/**
 * Choose interests
 */
const chooseInterests = make('[auth] choose interests')
  .stage((payload: string[]) => payload)
  .stage('success');

/**
 * Verify email
 */
const verifyEmail = make('[auth] verify email')
  .stage((payload: { token: string; isNewEmail: boolean }) => payload)
  .stage('success');

/**
 * Email verification   resend
 */
const verifyEmailResend = make('[auth] verify email resend')
  .stage((payload: { token: string; isNewEmail: boolean }) => payload)
  .stage('success');

/**
 * Confirmation resend  email
 */

const confirmationEmailResend = make('[auth] resend confirmation email')
  .stage((payload: string) => payload)
  .stage('success');

/**
 * New confirmation email send
 */

const sendNewConfirmationEmail = make(
  '[auth] send new confirmation email'
).stage((payload: { oldEmail: string; newEmail: string }) => payload);

/**
 * Forgot password
 */
const forgotPassword = make('[auth] forgot password')
  .stage((payload: ForgotPasswordValues) => payload)
  .stage('success');

/**
 * Reset password
 */
const resetPassword = make('[auth] reset password')
  .stage((payload: { password: string; token: string }) => payload)
  .stage('success');

/**
 * Update password
 */
const updatePassword = make('[auth] update password')
  .stage((payload: UpdatePasswordValues) => payload)
  .stage('success');

/*
 * Sign-in with google
 */
const googleSignIn = make('[auth] sign-in with google')
  .stage((payload: GoogleSignInValues) => payload)
  .stage('success');

/**
 * Sign in with facebook
 */
const facebookSignIn = make('[auth] sign-in with facebook')
  .stage((payload: any) => payload)
  .stage('success');

/**
 * Change user language
 */
const changeUserLanguage = make('[auth] change user language').stage(
  (payload: string) => payload
);

export {
  login,
  getUser,
  register,
  authorize,
  verifyEmail,
  unauthorize,
  googleSignIn,
  resetPassword,
  forgotPassword,
  updatePassword,
  facebookSignIn,
  chooseInterests,
  verifyEmailResend,
  changeUserLanguage,
  confirmationEmailResend,
  sendNewConfirmationEmail
};
