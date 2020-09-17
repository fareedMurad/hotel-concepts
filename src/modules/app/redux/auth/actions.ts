import { make } from 'redux-chill';
import {
  LoginValues,
  RegisterValues,
  UpdatePasswordValues,
  ResetPasswordValues,
  ForgotPasswordValues,
  GoogleSignInValues,
  FacebookSignInValues
} from '@auth/models';
import { User } from '@app/models';
import {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse
} from 'react-facebook-login';

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
 * Verify email
 */
const verifyEmail = make('[auth] verify email')
  .stage((payload: string) => payload)
  .stage('success');

/**
 * Email verification resend
 */
const verifyEmailResend = make('[auth] verify email resend')
  .stage((payload: string) => payload)
  .stage('success');

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
  .stage((payload: { values: ResetPasswordValues; token: string }) => payload)
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
  verifyEmailResend
};
