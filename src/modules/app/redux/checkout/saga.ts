import { handleError } from '@general/store';
import { Payload, Saga } from 'redux-chill';
import { call, delay, put } from 'redux-saga/effects';
import { Context } from '../context';
import { checkout } from './actions';

/**
 * Checkout saga
 */
class CheckoutSaga {
  /*
   * Checkout
   */
  @Saga(checkout)
  public *checkout(payload: Payload<typeof checkout>, { api, fs }: Context) {
    try {
      yield call(fs.store.builder.push, payload, data => console.log(data));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    }
  }
}

export { CheckoutSaga };
