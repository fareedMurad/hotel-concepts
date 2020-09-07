import { Saga } from 'redux-chill';
import { login, register, resetPassword, updatePassword } from './actions';
import { Context } from '../context';
import { call } from 'redux-saga/effects';

/**
 * auth saga
 */
class AuthSaga {
  /**
   * Login
   */
  @Saga(login)
  public *login(payload, { api }: Context) {
    try {
      console.log(payload);
      //   const response = yield call(api.auth.login, payload);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Register
   */
  @Saga(register)
  public *register(payload, { api }: Context) {
    try {
      console.log(payload);
      //   const response = yield call(api.auth.register, payload);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Reset password
   */
  @Saga(resetPassword)
  public *resetPassword(payload, { api }: Context) {
    try {
      console.log(payload);
      // const response = yield call(api.auth.resetPassword, payload);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Update password
   */
  @Saga(updatePassword)
  public *updatePassword(payload, { api }: Context) {
    try {
      console.log(payload);
      //   const response = yield call(api.auth.updatePassword, payload);
    } catch (error) {
      console.log(error);
    }
  }
}

export { AuthSaga };
