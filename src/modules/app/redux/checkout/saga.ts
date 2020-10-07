import {
  CreateSession,
  CreateSessionItem,
  Session
} from '@app/models/fastspring';
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
  /**
   * Checkout
   * @param payload is array of products (type Product)
   */
  @Saga(checkout)
  public *checkout(payload: Payload<typeof checkout>, { api, fs }: Context) {
    try {
      const { authorized } = yield select((state: State) => state.auth);

      // Create Session object
      const session: Session = {
        checkout: true,
        products: payload
      };

      /**
       * if authorized ask backend to give us checkout sessionId.
       * else create new checkout session
       */
      if (authorized) {
        const items: CreateSessionItem[] = payload.map(
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
        yield call(fs.store.builder.push, session, data => console.log(data));
      }
    } catch (error) {
      yield put(handleError(error.response.data.message));
    }
  }
}

export { CheckoutSaga };
