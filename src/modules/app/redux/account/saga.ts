import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { toggleToast } from '@ui/toast';
import { Payload, Saga } from 'redux-chill';
import { call, put, delay } from 'redux-saga/effects';
import { getUser } from '../auth';
import { Context } from '../context';
import {
  editContactAddress,
  uploadAvatar,
  deleteAvatar,
  addToWishList,
  subscribe,
  selectPaymentMethods,
  setNewsSubscription,
  editPrefferedLanguage,
  updatePassword
} from './actions';

/**
 * Account saga
 */
class AccountSaga {
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
      yield call(api.account.editPreferredLanguage, payload);
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
      yield call(api.account.editContactAddress, payload);
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

      yield call(api.account.uploadAvatar, fileData);
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
      yield call(api.account.deleteAvatar);
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

  /*
   * Add to wish list
   */
  @Saga(addToWishList)
  public *addToWishList(payload, { api }: Context) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Select payment methods
   */
  @Saga(selectPaymentMethods)
  public *selectPaymentMethods(payload, { api }: Context) {
    yield put(preloaderStart(Preloaders.profilePaymentMethods));
    try {
      const arrOfPaymentMethods = [];

      for (const key in payload) {
        if (payload[key] === true) {
          arrOfPaymentMethods.push(key);
        }
      }
      const object = { paymentMethods: arrOfPaymentMethods };

      yield call(api.account.selectPaymentMethods, object);
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
   * Update password
   */
  @Saga(updatePassword)
  public *updatePassword(
    payload: Payload<typeof updatePassword>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.profileUpdatePassword));

    try {
      yield call(api.account.updatePassword, payload);
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

  /*
   * Set news subscription
   */
  @Saga(setNewsSubscription)
  public *setNewsSubscription(payload, { api }: Context) {
    yield put(preloaderStart(Preloaders.profileNewsletter));

    try {
      yield call(api.account.updateNewsSubscription, payload);
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

export { AccountSaga };
