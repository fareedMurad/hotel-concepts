import i18next from 'i18next';
import { Payload, Saga } from 'redux-chill';
import { put } from 'redux-saga/effects';
import { changeLanguage, setupLocalization } from './actions';

class LocalizationSaga {
  /**
   * Change current language
   */
  @Saga(changeLanguage)
  public *change(language: Payload<typeof changeLanguage>) {
    i18next.changeLanguage(language);
    window.localStorage.setItem('language', language);
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
