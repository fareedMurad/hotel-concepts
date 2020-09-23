import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
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
  editPrefferedLanguage
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
      yield put(setNewsSubscription.success());
      yield put(getUser());
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
  public *editProfile(
    payload: Payload<typeof editContactAddress>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.profileContactAddress));

    try {
      const response = yield call(api.account.editContactAddress, payload);

      yield put(getUser());
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
      const response = yield call(api.account.uploadAvatar, fileData);

      yield put(getUser());
      yield delay(500);
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
      const response = yield call(api.account.deleteAvatar);

      yield put(getUser());
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

  /*
   * Select payment methods
   */
  @Saga(selectPaymentMethods)
  public *selectPaymentMethods(payload, { api }: Context) {
    yield put(preloaderStart(Preloaders.paymentMethods));
    try {
      const arrOfPaymentMethods = [];

      for (const key in payload) {
        if (payload[key] === true) {
          arrOfPaymentMethods.push(key);
        }
      }
      const object = { paymentMethods: arrOfPaymentMethods };
      const response = yield call(api.account.selectPaymentMethods, object);
      yield put(selectPaymentMethods.success());
    } catch (err) {
      console.log(err);
    } finally {
      yield put(preloaderStop(Preloaders.paymentMethods));
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
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.profileNewsletter));
    }
  }
}

export { AccountSaga };
