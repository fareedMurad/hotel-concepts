import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Payload, Saga } from 'redux-chill';
import { call, put } from 'redux-saga/effects';
import { getUser } from '../auth';
import { Context } from '../context';
import { editProfile, uploadAvatar, deleteAvatar } from './actions';

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

    try {
      const response = yield call(api.account.editProfile, payload);

      yield put(getUser());
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.profile));
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
}

export { AccountSaga };
