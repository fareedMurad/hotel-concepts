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
import {
  addToCart,
  cart,
  checkCart,
  getProducts,
  removeFromCart
} from './actions';

/**
 * Cart saga
 */
class CartSaga {
  private getCartFromLS = (): Product[] =>
    JSON.parse(localStorage.getItem(LocalStorageKeys.cart)) || [];

  /**
   * Check cart
   */
  @Saga(checkCart)
  public *checkCart() {
    const cart = localStorage.getItem('cart');

    yield put(checkCart.success(JSON.parse(cart)));
  }

  /**
   * Add to cart
   */
  @Saga(addToCart)
  public *addToCart({ id }: Payload<typeof addToCart>) {
    const cart = localStorage.getItem('cart');

    if (cart?.length > 0) {
      const parsed = JSON.parse(cart);

      if (parsed.includes(id)) return;

      const newArr = [...parsed, id];
      localStorage.setItem('cart', JSON.stringify(newArr));
    } else {
      localStorage.setItem('cart', JSON.stringify([id]));
    }
    try {
      yield put(addToCart.success({ id }));
      yield put(
        toggleToast({
          status: 'success',
          description: 'Item was added to cart'
        })
      );
    } catch (error) {
      yield put(handleError(error.response.data.message));
    }
  }

  /**
   * Remove from cart
   */
  @Saga(removeFromCart)
  public *removeFromCart({ id }: Payload<typeof removeFromCart>) {
    const cart = localStorage.getItem('cart');
    yield put(preloaderStart(Preloaders.cart));

    try {
      const parsed = JSON.parse(cart);
      const filtered = parsed.filter(item => item != id);

      localStorage.setItem('cart', JSON.stringify(filtered));

      yield put(removeFromCart.success({ id }));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.cart));
    }
  }

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
    const cart = localStorage.getItem('cart');

    yield put(preloaderStart(Preloaders.cart));

    try {
      yield delay(1000);

      const {
        auth: {
          user: { language }
        }
      } = yield select((state: State) => state);

      const response = yield call(api.marketplace.fetchAnyProductsListByIds, {
        ids: JSON.parse(cart).map((item: string) => item),
        locale: language || 'en-US'
      });

      yield put(getProducts.success(response.data.items));
    } catch (error) {
      console.log(error);
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.cart));
    }
  }
}

export { CartSaga };
