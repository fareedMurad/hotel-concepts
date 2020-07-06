import { Saga } from 'redux-chill';
import { getUserInfo, getSecurityInfo, getSettings } from './actions';
import { put } from 'redux-saga/effects';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Preloaders } from '@ui/models';
/**
 * profile saga
 */
class ProfileSaga {
  /**
   * Get user info
   */
  @Saga(getUserInfo)
  public *getUserInfo() {
    yield put(preloaderStart(Preloaders.userInfo));
    try {
      const response = {
        name: 'User',
        surname: 'User'
      };
      yield put(getUserInfo.success(response));
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.userInfo));
    }
  }

  /**
   * Get user info
   */
  @Saga(getSecurityInfo)
  public *getSecurityInfo() {
    yield put(preloaderStart(Preloaders.security));
    try {
      const response = {
        email: 'mail@mail.com'
      };
      yield put(getSecurityInfo.success(response));
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.security));
    }
  }

  /**
   * Get user settings
   */
  @Saga(getSettings)
  public *getSettings() {
    yield put(preloaderStart(Preloaders.settings));
    try {
      const response = {
        notifications: false
      };
      yield put(getSettings.success(response));
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.settings));
    }
  }
}

export { ProfileSaga };
