import { Language } from '@app/models/enum';
import { useBrowserVersion } from '@core/helpers/browser-version';
import { setupLocalization } from '@localization/store';
import { toggleToast } from '@ui/toast';
import { Payload, Saga } from 'redux-chill';
import { all, put, spawn, take } from 'redux-saga/effects';
import {
  checkBrowserVersion,
  handleError,
  startup,
  toggleCookieBanner
} from './actions';

/**
 * General app methods
 */
class GeneralSaga {
  /**
   * Init all pre-start actions
   */
  @Saga(startup)
  public *startup() {
    yield spawn(this.run);
    const cookieBanner = localStorage.getItem('kordieCookieBanner');
    const language = window.localStorage.getItem('language-kordie');

    const { name, version } = useBrowserVersion();
    const payload = {
      name: name,
      version: version
    };

    yield put(checkBrowserVersion(payload));

    yield put(setupLocalization(language || Language.en));

    if (!cookieBanner && cookieBanner != 'false') {
      yield put(toggleCookieBanner(true));
    } else {
      yield put(toggleCookieBanner(false));
    }
  }

  /**
   * Run app
   */
  public *run() {
    yield all([take(setupLocalization.success)]);

    yield put(startup.success());
  }

  /**
   * Handle error
   */
  @Saga(handleError)
  public *handleError(message: Payload<typeof handleError>) {
    const description = Array.isArray(message) ? message.join(',') : message;

    yield put(
      toggleToast({
        status: 'fail',
        description
      })
    );
  }

  /**
   * Toggle cookie banner
   */
  @Saga(toggleCookieBanner)
  public *toggleCookieBanner(payload: Payload<typeof toggleCookieBanner>) {
    if (payload) {
      localStorage.setItem('kordieCookieBanner', 'true');
    } else {
      localStorage.setItem('kordieCookieBanner', 'false');
    }
  }
}

export { GeneralSaga };
