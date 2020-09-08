import { make } from 'redux-chill';
import {
  LoginValues,
  RegisterValues,
  UpdatePasswordValues,
  ResetPasswordValues,
  ForgotPasswordValues
} from '@auth/models';

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
 * Forgot password
 */
const forgotPassword = make('[auth] forgot password')
  .stage((payload: ForgotPasswordValues) => payload)
  .stage('success');

/**
 * Reset password
 */
const resetPassword = make('[auth] reset password')
  .stage((payload: ResetPasswordValues) => payload)
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
const signInWithGoogle = make('[auth] sign-in with google').stage(
  payload => payload
);

/**
 * Sign in with facebook
 */
const signInWithFacebook = make('[auth] sign-in with facebook').stage(
  payload => payload
);

export {
  login,
  register,
  resetPassword,
  forgotPassword,
  updatePassword,
  signInWithGoogle,
  signInWithFacebook
};
