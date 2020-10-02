import { getUser } from '@app/redux/auth';
import { Context } from '@app/redux/context';
import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { toggleToast } from '@ui/toast';
import { Payload, Saga } from 'redux-chill';
import { call, delay, put } from 'redux-saga/effects';
import {
  deleteAvatar,
  editContactAddress,
  editInterests,
  editNewsletterSubscription,
  editPassword,
  editPaymentMethods,
  editPrefferedLanguage,
  uploadAvatar
} from './actions';

/**
 * Profile saga
 */
class ProfileSaga {
  /*
   * Edit preferred language
   */
  @Saga(editPrefferedLanguage)
  public *editPrefferedLanguage(
    payload: Payload<typeof editPrefferedLanguage>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.profileLanguage));

    try {
      yield call(api.profile.editPreferredLanguage, payload);
      yield put(getUser());
      yield put(
        toggleToast({
          status: 'success',
          description: 'Preffered language updated succcessfully'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.profileLanguage));
    }
  }

  /**
   * Edit contact address
   */
  @Saga(editContactAddress)
  public *editContactAddress(
    payload: Payload<typeof editContactAddress>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.profileContactAddress));

    try {
      yield call(api.profile.editContactAddress, payload);
      yield put(getUser());
      yield put(
        toggleToast({
          status: 'success',
          description: 'Contact address updated succcessfully'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.profileContactAddress));
    }
  }

  /**
   * Edit interests
   */
  @Saga(editInterests)
  public *editInterests(
    payload: Payload<typeof editInterests>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.profileInterests));

    try {
      yield call(api.profile.editInterests, payload);
      yield put(getUser());
      yield put(
        toggleToast({
          status: 'success',
          description: 'Interests updated succcessfully'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.profileInterests));
    }
  }

  /**
   * Edit password
   */
  @Saga(editPassword)
  public *updatePassword(
    payload: Payload<typeof editPassword>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.profileUpdatePassword));

    try {
      yield call(api.profile.editPassword, payload);
      yield put(getUser());
      yield put(
        toggleToast({
          status: 'success',
          description: 'Password updated successfully'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.profileUpdatePassword));
    }
  }

  /**
   * Edit payment methods
   */
  @Saga(editPaymentMethods)
  public *editPaymentMethods(
    payload: Payload<typeof editPaymentMethods>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.profilePaymentMethods));

    try {
      const arrOfPaymentMethods = [] as string[];

      for (const key in payload) {
        if (payload[key] === true) {
          arrOfPaymentMethods.push(key);
        }
      }

      yield call(api.profile.editPaymentMethods, arrOfPaymentMethods);
      yield put(getUser());
      yield put(
        toggleToast({
          status: 'success',
          description: 'Payment methods updated succcessfully'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.profilePaymentMethods));
    }
  }

  /**
   * Upload avatar
   */
  @Saga(uploadAvatar)
  public *uploadAvatar(
    payload: Payload<typeof uploadAvatar>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.profileAvatar));

    try {
      const fileData = new FormData();
      fileData.append('file', payload);

      yield call(api.profile.uploadAvatar, fileData);
      yield put(getUser());
      yield put(
        toggleToast({
          status: 'success',
          description: 'Avatar updated succcessfully'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.profileAvatar));
    }
  }

  /**
   * Delete avatar
   */
  @Saga(deleteAvatar)
  public *deleteAvatar(_, { api }: Context) {
    yield put(preloaderStart(Preloaders.profileAvatar));

    try {
      yield call(api.profile.deleteAvatar);
      yield put(getUser());
      yield put(
        toggleToast({
          status: 'success',
          description: 'Avatar deleted succcessfully'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.profileAvatar));
    }
  }

  /**
   * Edit newsletter subscription
   */
  @Saga(editNewsletterSubscription)
  public *editNewsletterSubscription(
    { newsSub }: Payload<typeof editNewsletterSubscription>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.profileNewsletter));

    try {
      yield call(api.profile.editNewsletterSubscription, newsSub);
      yield put(getUser());
      yield put(
        toggleToast({
          status: 'success',
          description: 'Newsletter subscription updated succcessfully'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.profileNewsletter));
    }
  }
}

export { ProfileSaga };
