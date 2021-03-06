import { GoogleSignInModel } from '@app/models';
import { handleError } from '@general/store';
import { changeLanguage } from '@localization/store';
import { navigate } from '@router/store';
import { closeModal, showModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { toggleToast } from '@ui/toast';
import { Payload, Saga } from 'redux-chill';
import { call, put } from 'redux-saga/effects';
import { Context } from '../context';
import {
  authorize,
  chooseInterests,
  facebookSignIn,
  forgotPassword,
  getUser,
  googleSignIn,
  login,
  register,
  resetPassword,
  unauthorize,
  updatePassword,
  verifyEmail,
  verifyEmailResend,
  confirmationEmailResend,
  sendNewConfirmationEmail
} from './actions';

/**
 * auth saga
 */
class AuthSaga {
  /**
   * Authorize user
   */
  @Saga(authorize)
  public *authorize() {
    localStorage.setItem('isAuthorized', 'true');
  }

  /**
   * Unauthorize user
   */
  @Saga(unauthorize)
  public *unauthorize(_, { api }: Context) {
    try {
      localStorage.setItem('isAuthorized', 'false');
      yield call(api.auth.unauthorize);
      yield put(navigate('/'));
    } catch (error) {
      yield put(handleError('Your session has expired'));
    }
  }

  /**
   * Get user
   */
  @Saga(getUser)
  public *getUser(_, { api }: Context) {
    const isAuthorized = localStorage.getItem('isAuthorized') == 'true';
    yield put(preloaderStart(Preloaders.profile));

    try {
      const response = yield call(api.auth.getUser);
      const { language } = response.data;
      yield put(changeLanguage(language));
      yield put(getUser.success(response.data));
      yield put(authorize());
    } catch (error) {
      if (Boolean(isAuthorized)) {
        yield put(unauthorize());
        yield put(handleError(error.response.data.message));
      }
    } finally {
      yield put(preloaderStop(Preloaders.profile));
    }
  }

  /**
   * Login
   */
  @Saga(login)
  public *login(payload: Payload<typeof login>, { api }: Context) {
    yield put(preloaderStart(Preloaders.login));

    try {
      const response = yield call(api.auth.login, payload.data);
      const user = yield call(api.auth.getUser);
      const {
        data: { newUser }
      } = response;
      localStorage.setItem('isAuthorized', 'true');
      yield put(getUser.success(user.data));
      yield put(
        toggleToast({
          status: 'success',
          description: 'Logged in'
        })
      );
      yield put(closeModal(Modals.registration));
      newUser
        ? yield put(navigate('/interests'))
        : yield put(navigate(payload.from != '/cart' && '/account/profile'));
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

      const { email } = payload;
      yield put(navigate(`/auth/email-verification/pending/?email=${email}`));

      yield put(register.success());
      yield put(closeModal(Modals.registration));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.register));
    }
  }

  /**
   * Saga confirmation email resend
   */

  @Saga(confirmationEmailResend)
  public *resendConfirmationEmail(
    payload: Payload<typeof confirmationEmailResend>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.confirmationEmailResend));
    try {
      const data = {
        email: payload
      };
      const response = yield call(api.auth.confirmationEmailResend, data);

      yield put(
        toggleToast({
          status: 'success',
          description: 'An email has been sent'
        })
      );
    } catch (error) {
      handleError(error.response.data.message);
    } finally {
      yield put(preloaderStop(Preloaders.confirmationEmailResend));
    }
  }

  /**
   * Saga send new confirmation email
   */
  @Saga(sendNewConfirmationEmail)
  public *sendNewConfirmationEmail(
    payload: Payload<typeof sendNewConfirmationEmail>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.confirmationEmailResend));
    try {
      const response = yield call(api.auth.newConfirmationEmailSend, payload);

      yield put(
        navigate(`/auth/email-verification/pending/?email=${payload.newEmail}`)
      );
      yield put(
        toggleToast({
          status: 'success',
          description: 'Please check your new email'
        })
      );
    } catch (error) {
      handleError(error.response.data.message);
    } finally {
      yield put(preloaderStop(Preloaders.confirmationEmailResend));
      yield put(closeModal(Modals.newEmail));
    }
  }

  /**
   * Choose interests
   */
  @Saga(chooseInterests)
  public *chooseInterests(
    payload: Payload<typeof chooseInterests>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.interests));

    try {
      const response = yield call(api.auth.chooseInterests, payload);

      yield put(getUser());
      yield put(navigate('/account/profile'));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.interests));
    }
  }

  /**
   * Verify email
   */
  @Saga(verifyEmail)
  public *verifyEmail(payload: Payload<typeof verifyEmail>, { api }: Context) {
    yield put(preloaderStart(Preloaders.emailVerification));
    const isAuthorized = localStorage.getItem('isAuthorized') == 'true';
    try {
      const { token, isNewEmail } = payload;

      const response = yield call(api.auth.verifyEmail, token, isNewEmail);

      yield put(verifyEmail.success());
      localStorage.setItem('isAuthorized', 'true');
      yield put(getUser());
    } catch (error) {
      if (isAuthorized) {
        yield put(handleError(error.response.data.message));
      }
    } finally {
      yield put(preloaderStop(Preloaders.emailVerification));
    }
  }

  /**
   * Verify email resend
   */
  @Saga(verifyEmailResend)
  public *verifyEmailResend(
    payload: Payload<typeof verifyEmailResend>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.emailVerification));

    try {
      const { token, isNewEmail } = payload;
      const response = yield call(
        api.auth.verifyEmailResend,
        token,
        isNewEmail
      );

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
      yield put(closeModal(Modals.forgotPassword));
      yield put(navigate('/auth/reset-password'));
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
    { token, password }: Payload<typeof resetPassword>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.resetPassword));
    try {
      const response = yield call(api.auth.resetPassword, password, token);

      yield put(showModal(Modals.passwordChanged));
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
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.updatePassword));
      yield put(updatePassword.success());
    }
  }

  /*
   * Sign in with google
   */
  @Saga(googleSignIn)
  public *googleSignIn(
    payload: Payload<typeof googleSignIn>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.login));

    const data = {
      token: payload.data.tokenId
    };
    try {
      const response = yield call(api.auth.googleSignIn, data);
      yield put(getUser());
      yield put(authorize());

      const {
        data: { newUser }
      } = response;

      yield put(closeModal(Modals.registration));

      newUser
        ? yield put(navigate('/interests'))
        : yield put(navigate(payload.from != '/cart' && '/account/profile'));

      yield put(
        toggleToast({
          status: 'success',
          description: 'Logged in'
        })
      );
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

    if (!payload?.data.accessToken) {
      yield put(
        handleError(
          'Unable to sign in with Facebook. Please try another authorisation method'
        )
      );
      yield put(preloaderStop(Preloaders.login));
      return;
    }

    const data = {
      token: payload.data.accessToken
    };

    try {
      const response = yield call(api.auth.facebookSignIn, data);
      yield put(getUser());
      yield put(authorize());

      const {
        data: { newUser }
      } = response;

      yield put(closeModal(Modals.registration));

      newUser
        ? yield put(navigate('/interests'))
        : yield put(navigate(payload.from != '/cart' && '/account/profile'));

      yield put(
        toggleToast({
          status: 'success',
          description: 'Logged in'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.login));
    }
  }
}

export { AuthSaga };
