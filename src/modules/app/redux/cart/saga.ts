import { LocalStorageKeys } from '@app/models/enum';
import { Product } from '@app/models/fastspring';
import { parseString } from '@core/shared';
import { handleError } from '@general/store';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { toggleToast } from '@ui/toast';
import { Payload, Saga } from 'redux-chill';
import { call, delay, put, select } from 'redux-saga/effects';
import { Context } from '../context';
import { State } from '../state';
import { cart, getProducts } from './actions';

/**
 * Cart saga
 */
class CartSaga {
  private getCartFromLS = (): Product[] =>
    JSON.parse(localStorage.getItem(LocalStorageKeys.cart)) || [];
  /**
   * Add to cart
   */
  @Saga(cart.add)
  public *add(payload: Payload<typeof cart.add>) {
    const cartFromLS = this.getCartFromLS();

    const exists = cartFromLS.find(item => item.path === payload.path);

    if (exists) {
      yield put(
        toggleToast({
          status: 'info',
          description: 'Book already exists in your cart'
        })
      );
      yield put(cart.saveToState(cartFromLS));
      return;
    }
    cartFromLS.push(payload);

    localStorage.setItem(LocalStorageKeys.cart, JSON.stringify(cartFromLS));

    yield put(cart.saveToState(cartFromLS));
  }

  /**
   * Get many from cart
   */
  @Saga(cart.getMany)
  public *getMany() {
    const cartFromLS = this.getCartFromLS();

    yield put(cart.saveToState(cartFromLS));
  }

  /**
   * Remove from cart
   */
  @Saga(cart.remove)
  public *remove(payload: Payload<typeof cart.remove>) {
    let cartFromLS = this.getCartFromLS();
    let { products } = yield select((state: State) => state.cart);

    cartFromLS = cartFromLS.filter(item => item.path !== payload.path);
    products = products.filter(item => item.id !== payload.path);

    localStorage.setItem(LocalStorageKeys.cart, JSON.stringify(cartFromLS));
    yield put(cart.saveToState(cartFromLS));
    yield put(getProducts.success(products));
  }

  /**
   * Update item in cart
   */
  @Saga(cart.update)
  public *update(payload: Payload<typeof cart.update>) {
    let cartFromLS = this.getCartFromLS();

    cartFromLS = cartFromLS.map(item =>
      item.path === payload.path ? payload : item
    );

    localStorage.setItem(LocalStorageKeys.cart, JSON.stringify(cartFromLS));
    yield put(cart.saveToState(cartFromLS));
  }

  /**
   * Get products by ids
   */
  @Saga(getProducts)
  public *getProductsByIds(_, { api }: Context) {
    try {
      yield delay(1000);

      const {
        auth: {
          user: { language: locale }
        },
        cart: { cart }
      } = yield select((state: State) => state);

      const response = yield call(api.marketplace.fetchAnyProductsListByIds, {
        ids: cart.map(item => item.path),
        locale
      });

      console.log(response);

      yield put(getProducts.success(response.data.items));
    } catch (err) {
      yield put(handleError(err.response.data.message));
    }
  }
}

export { CartSaga };
