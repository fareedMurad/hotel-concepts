import { changeUserLanguage } from '@app/redux/auth/actions';
import { Context } from '@app/redux/context';
import { State } from '@app/redux/state';
import { handleError } from '@general/store/actions';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import i18next from 'i18next';
import { Payload, Saga } from 'redux-chill';
import { call, put, select } from 'redux-saga/effects';
import { changeLanguage, setupLocalization } from './actions';

class LocalizationSaga {
  /**
   * Change current language
   */
  @Saga(changeLanguage)
  public *change(language: Payload<typeof changeLanguage>, { api }: Context) {
    yield put(preloaderStart(Preloaders.general));
    try {
      const { authorized } = yield select((state: State) => state.auth);

      if (authorized) {
        yield call(api.profile.editPreferredLanguage, language);
        yield put(changeUserLanguage(language));
      }

      i18next.changeLanguage(language);
      window.localStorage.setItem('language-kordie', language);
    } catch (e) {
      yield put(handleError(e.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.general));
    }
  }
  /**
   * Setup i18next
   */
  @Saga(setupLocalization)
  public *setup(language: Payload<typeof setupLocalization>) {
    i18next.changeLanguage(language);
    yield put(setupLocalization.success());
  }
}

export { LocalizationSaga };
