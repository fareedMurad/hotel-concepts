import { GoogleSignInModel } from '@app/models';
import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Payload, Saga } from 'redux-chill';
import { call, put } from 'redux-saga/effects';
import { Context } from '../context';
import {
  authorize,
  forgotPassword,
  getUser,
  googleSignIn,
  login,
  register,
  resetPassword,
  updatePassword,
  verifyEmail,
  verifyEmailResend,
  unauthorize,
  facebookSignIn
} from './actions';
import { toggleToast } from '@ui/toast';
import { navigate } from '@router/store';

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

      yield put(getUser.success(response.data));
      yield put(authorize());
    } catch (error) {
      yield put(unauthorize());
      yield put(handleError(error.response.data.message));
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

      yield put(
        toggleToast({
          status: 'success',
          description: 'Logged in'
        })
      );
      yield put(navigate('/'));
    } catch (error) {
      yield put(handleError(error.response.data.message));
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

      yield put(register.success());
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.register));
    }
  }

  /**
   * Verify email
   */
  @Saga(verifyEmail)
  public *verifyEmail(token: Payload<typeof verifyEmail>, { api }: Context) {
    yield put(preloaderStart(Preloaders.emailVerification));

    try {
      const response = yield call(api.auth.verifyEmail, token);

      yield put(verifyEmail.success());
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.emailVerification));
    }
  }

  /**
   * Verify email resend
   */
  @Saga(verifyEmailResend)
  public *verifyEmailResend(
    token: Payload<typeof verifyEmailResend>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.emailVerification));

    try {
      const response = yield call(api.auth.verifyEmailResend, token);

      yield put(
        toggleToast({
          status: 'success',
          description: 'Email verification was resent'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.emailVerification));
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

      yield put(forgotPassword.success());
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.forgotPassword));
    }
  }

  /**
   * Reset password
   */
  @Saga(resetPassword)
  public *resetPassword(
    { token, values }: Payload<typeof resetPassword>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.resetPassword));
    try {
      const response = yield call(api.auth.resetPassword, values, token);

      yield put(
        toggleToast({
          status: 'success',
          description: 'Your password was successfully changed'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
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
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.updatePassword));
    }
  }

  /*
   * Sign in with google
   */
  @Saga(googleSignIn)
  public *googleSignIn({ tokenId }: GoogleSignInModel, { api }: Context) {
    yield put(preloaderStart(Preloaders.login));

    const data = {
      token: tokenId
    };

    try {
      const response = yield call(api.auth.googleSignIn, data);
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.login));
    }
  }

  /*
   * Sign in with facebook
   */
  @Saga(facebookSignIn)
  public *facebookSignIn(
    payload: Payload<typeof facebookSignIn>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.login));

    if (payload.accessToken) {
    }
    const data = {
      token: payload.accessToken
    };

    try {
      const response = yield call(api.auth.facebookSignIn, data);
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.login));
    }
  }

  /**
   * Unauthorize user
   */
  @Saga(unauthorize)
  public *unauthorize(_, { api }: Context) {
    try {
      const response = yield call(api.auth.unauthorize);

      yield put(getUser());
    } catch (error) {
      yield put(handleError(error.response.data.message));
    }
  }
}

export { AuthSaga };
