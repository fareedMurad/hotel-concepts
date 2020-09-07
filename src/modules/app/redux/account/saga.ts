import { Saga } from 'redux-chill';
import { fetchProfile } from './actions';
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
}

export { AccountSaga };
