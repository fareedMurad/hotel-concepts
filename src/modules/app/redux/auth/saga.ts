import { Saga } from 'redux-chill';
import {
  login,
  register,
  resetPassword,
  updatePassword,
  signInWithGoogle
} from './actions';
import { Context } from '../context';
import { call } from 'redux-saga/effects';
import { GoogleSignInModel } from '@app/models';

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
  /*
   * Sign in with google
   */
  @Saga(signInWithGoogle)
  public *signInwithGoogle(payload: GoogleSignInModel, { api }: Context) {
    const { tokenId } = payload;
    console.log(payload);
    const data = {
      tokenId,
      clientId:
        '293038701913-22g38t0rpep02thga71qsonelnlinqrf.apps.googleusercontent.com'
    };
    try {
      const response = api.auth.signInWithGoogle(data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
}

export { AuthSaga };
