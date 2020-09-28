import { CreateSession, CreateSessionItem } from '@app/models/fastspring';
import { handleError } from '@general/store';
import { Payload, Saga } from 'redux-chill';
import { call, delay, put, select } from 'redux-saga/effects';
import { Context } from '../context';
import { State } from '../state';
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
      const { authorized } = yield select((state: State) => state.auth);

      const { products } = payload;

      if (authorized) {
        const items: CreateSessionItem[] = products.map(
          ({ path, quantity }) => ({
            product: path,
            quantity
          })
        );
        const response = yield call(api.checkout.createSession, {
          products: items
        });

        const {
          data: {
            session: { id }
          }
        } = response;
        yield call(fs.store.builder.checkout, id);
      } else {
        yield call(fs.store.builder.push, payload, data => console.log(data));
      }
    } catch (error) {
      yield put(handleError(error.response.data.message));
    }
  }
}

export { CheckoutSaga };
