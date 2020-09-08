import { Saga } from 'redux-chill';
import { fetchProfile, uploadAvatar } from './actions';
import { call, put } from 'redux-saga/effects';
import { Context } from '../context';
/**
 * account saga
 */
class AccountSaga {
  /**
   * Fetch profile
   */
  @Saga(fetchProfile)
  public *fetchProfile(_, { api }: Context) {
    try {
      //   const response = yield call(api.account.fetchProfile,_)
      //   yield put(fetchProfile.success(response.data));
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  /**
   * Upload avatar
   */
  @Saga(uploadAvatar)
  public *uploadAvatar(payload, { api }: Context) {
    try {
      const fileData = new FormData();
      fileData.append('file', payload);

      const response = yield call(api.account.uploadAvatar, fileData);
      yield put(fetchProfile());
    } catch (error) {
      console.log(error);
    }
  }
}

export { AccountSaga };
