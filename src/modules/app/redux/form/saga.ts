import { handleError } from '@general/store/actions';
import { put } from 'redux-saga/effects';
import { Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Payload, Saga } from 'redux-chill';
import { Context } from '../context';
import { sendForm } from './actions';
/**
 * form saga
 */
class FormSaga {
  /*
   * Send form saga
   */
  @Saga(sendForm)
  public *sendForm(payload: Payload<typeof sendForm>, { api }: Context) {
    yield put(preloaderStart(Preloaders.sendForm));
    try {
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.sendForm));
    }
  }
}

export { FormSaga };
