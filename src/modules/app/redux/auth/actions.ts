import { make } from 'redux-chill';
import { LoginValues } from '@auth/models';

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
  .stage(payload => payload)
  .stage('success');

/**
 * Reset password
 */
const resetPassword = make('[auth] reset password')
  .stage(payload => payload)
  .stage('success');

/**
 * Update password
 */
const updatePassword = make('[auth] update password')
  .stage(payload => payload)
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
  updatePassword,
  signInWithGoogle,
  signInWithFacebook
};
