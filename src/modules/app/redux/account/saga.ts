import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Payload, Saga } from 'redux-chill';
import { call, put, delay } from 'redux-saga/effects';
import { getUser } from '../auth';
import { Context } from '../context';
import {
  editProfile,
  uploadAvatar,
  deleteAvatar,
  addToWishList,
  subscribe,
  selectPaymentMethods,
  setNewsSubscription,
  selectUserLanguage
} from './actions';

/**
 * Account saga
 */
class AccountSaga {
  /**
   * Edit profile
   */
  @Saga(editProfile)
  public *editProfile(payload: Payload<typeof editProfile>, { api }: Context) {
    yield put(preloaderStart(Preloaders.profile));
    yield console.log(payload);
    try {
      const response = yield call(api.account.editProfile, payload);

      yield put(getUser());
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.profile));
      yield put(editProfile.success());
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
    yield put(preloaderStart(Preloaders.newsSub));
    try {
      yield call(api.account.updateNewsSubscription, payload);
      yield put(setNewsSubscription.success());
    } catch (err) {
      console.log(err);
    } finally {
      yield put(preloaderStop(Preloaders.newsSub));
    }
  }
  /*
   * Select language
   */
  @Saga(selectUserLanguage)
  public *selectUserLanguage(
    payload: Payload<typeof selectUserLanguage>,
    { api }: Context
  ) {
    // yield put(preloaderStart(Preloaders.newsSub));
    try {
      yield call(api.account.updateUserLanguage, payload);
      yield put(setNewsSubscription.success());
    } catch (err) {
      console.log(err);
    }
    // } finally {
    //   yield put(preloaderStop(Preloaders.newsSub));
    // }
  }
}

export { AccountSaga };
