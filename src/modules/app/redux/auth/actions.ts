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

export { login, register, resetPassword, updatePassword };
