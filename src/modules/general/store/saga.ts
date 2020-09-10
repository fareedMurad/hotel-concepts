import { setupLocalization } from '@localization/store';
import { Saga, Payload } from 'redux-chill';
import { put, take } from 'redux-saga/effects';
import { startup, handleError } from './actions';
import { toggleToast } from '@ui/toast';

/**
 * General app methods
 */
class GeneralSaga {
  /**
   * Init all pre-start actions
   */
  @Saga(startup)
  public *startup() {
    yield put(setupLocalization('en-US'));

    yield take(setupLocalization.success);

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
}

export { GeneralSaga };
