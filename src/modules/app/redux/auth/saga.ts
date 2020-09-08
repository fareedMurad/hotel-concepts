import { Saga, Payload } from 'redux-chill';
import {
  login,
  register,
  resetPassword,
  updatePassword,
  forgotPassword,
  googleSignIn,
  authorize,
  getUser
} from './actions';
import { call, put } from 'redux-saga/effects';
import { preloaderStop, preloaderStart } from '@ui/preloader';
import { Preloaders } from '@ui/models';
import { Context } from '../context';
import { GoogleSignInModel } from '@app/models';

/**
 * auth saga
 */
class AuthSaga {
  /**
   * Get user
   */
  @Saga(getUser)
  public *getUser(_, { api }: Context) {
    try {
      const response = yield call(api.auth.getUser);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Login
   */
  @Saga(login)
  public *login(payload: Payload<typeof login>, { api }: Context) {
    yield put(preloaderStart(Preloaders.login));

    try {
      const response = yield call(api.auth.login, payload);

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.login));
    }
  }

  /**
   * Register
   */
  @Saga(register)
  public *register(payload: Payload<typeof register>, { api }: Context) {
    yield put(preloaderStart(Preloaders.register));

    try {
      const response = yield call(api.auth.register, payload);

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.register));
    }
  }

  /**
   * Forgot password
   */
  @Saga(forgotPassword)
  public *forgotPassword(
    payload: Payload<typeof forgotPassword>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.forgotPassword));
    try {
      const response = yield call(api.auth.forgotPassword, payload);

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.forgotPassword));
    }
  }

  /**
   * Reset password
   */
  @Saga(resetPassword)
  public *resetPassword(
    payload: Payload<typeof resetPassword>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.resetPassword));
    try {
      const response = yield call(api.auth.resetPassword, payload);

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.resetPassword));
    }
  }

  /**
   * Update password
   */
  @Saga(updatePassword)
  public *updatePassword(
    payload: Payload<typeof updatePassword>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.updatePassword));
    try {
      const response = yield call(api.auth.updatePassword, payload);

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.updatePassword));
    }
  }

  /*
   * Sign in with google
   */
  @Saga(googleSignIn)
  public *googleSignIn(
    { familyName, givenName, email }: GoogleSignInModel,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.login));

    const data = {
      name: givenName,
      surname: familyName,
      email: email
    };

    try {
      const response = yield call(api.auth.googleSignIn, data);

      yield put(authorize());
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.login));
    }
  }
}

export { AuthSaga };
