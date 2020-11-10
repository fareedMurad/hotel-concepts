import { invoiceRequestModel } from '@app/models';
import { LocalStorageKeys } from '@app/models/enum';
import { Product } from '@app/models/fastspring';
import { handleError } from '@general/store';
import { closeModal, showModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { toggleToast } from '@ui/toast';
import { Payload, Saga } from 'redux-chill';
import { call, delay, put, select } from 'redux-saga/effects';
import { string } from 'yup';
import { Context } from '../context';
import { State } from '../state';
import {
  addProductToCart,
  checkCart,
  getProducts,
  handleNotifierCart,
  removeProductFromCart,
  resetCartState,
  sendInvoiceRequest,
  updateCartState,
  updateProductCart
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
  public *checkCart(_, { api }: Context) {
    const cartFromLS = localStorage.getItem('cart');

    const cartItems = JSON.parse(cartFromLS);

    yield put(checkCart.success(cartItems));

    const {
      localization: { language: localizationLanguage },
      cart: {
        addedProduct: { product }
      },
      auth: { user, authorized }
    } = yield select((state: State) => state);

    let locale = 'en-US';

    locale = authorized ? user?.language : localizationLanguage;

    if (cartItems.length > 0 && !product) {
      const lastProduct = cartItems[cartItems.length - 1];
      const { path } = lastProduct;

      try {
        const response = yield call(api.marketplace.fetchAnyProductsListByIds, {
          ids: [path],
          locale
        });

        const [productFromResponse] = response.data.items;
        yield put(
          handleNotifierCart({
            product: productFromResponse,
            isVisible: false
          })
        );
      } catch (err) {
        console.log(err);
        yield put(handleError(err.response.data.message));
      }
    }
  }
  /**
   * Add to cart
   */
  @Saga(addProductToCart)
  public *add(payload: Payload<typeof addProductToCart>) {
    const cartFromLS = this.getCartFromLS();

    const exists = cartFromLS.find(item => item.path === payload.path);

    if (exists) {
      yield put(
        toggleToast({
          status: 'info',
          description: 'Book already exists in your cart'
        })
      );
      yield put(updateCartState(cartFromLS));
      return;
    }
    cartFromLS.push(payload);

    localStorage.setItem(LocalStorageKeys.cart, JSON.stringify(cartFromLS));
    yield put(updateCartState(cartFromLS));
  }
  /**
   * Notification product added
   */
  @Saga(addProductToCart)
  public *setCurrent(
    payload: Payload<typeof addProductToCart>,
    { api }: Context
  ) {
    const { path } = payload;
    const {
      localization: { language: localizationLanguage },
      auth: { user, authorized }
    } = yield select((state: State) => state);

    let locale = 'en-US';

    locale = authorized ? user?.language : localizationLanguage;
    try {
      const response = yield call(api.marketplace.fetchAnyProductsListByIds, {
        ids: [path],
        locale
      });

      const [product] = response.data.items;

      yield put(handleNotifierCart({ product, isVisible: true }));
    } catch (err) {
      console.log(err);
      yield put(handleError(err.response.data.message));
    }
    yield delay(3000);
    yield put(handleNotifierCart.removingProduct());
    yield delay(1000);
    yield put(handleNotifierCart.hideModal());
  }
  /**
   * Clear cart
   */
  @Saga(resetCartState)
  public *clear() {
    localStorage.setItem(LocalStorageKeys.cart, JSON.stringify([]));

    yield put(updateCartState([]));
    yield put(resetCartState.success());
  }
  /**
   * Remove from cart
   */
  @Saga(removeProductFromCart)
  public *remove(payload: Payload<typeof removeProductFromCart>) {
    let cartFromLS = this.getCartFromLS();
    let { products } = yield select((state: State) => state.cart);

    cartFromLS = cartFromLS.filter(item => item.path !== payload);
    products = products.filter(item => item.id !== payload);

    localStorage.setItem(LocalStorageKeys.cart, JSON.stringify(cartFromLS));
    yield put(updateCartState(cartFromLS));
    yield put(getProducts.success(products));
    yield put(resetCartState.success());
  }
  /**
   * Update item in cart
   */
  @Saga(updateProductCart)
  public *update(payload: Payload<typeof updateProductCart>) {
    let cartFromLS = this.getCartFromLS();

    cartFromLS = cartFromLS.map(item =>
      item.path === payload.path ? payload : item
    );

    localStorage.setItem(LocalStorageKeys.cart, JSON.stringify(cartFromLS));
    yield put(updateCartState(cartFromLS));
  }
  /**
   * Get products by ids
   */
  @Saga(getProducts)
  public *getProductsByIds(_, { api }: Context) {
    yield put(preloaderStart(Preloaders.cart));

    try {
      const {
        localization: { language: localizationLanguage },
        auth: { user, authorized },
        cart: { selectedProducts }
      } = yield select((state: State) => state);

      let locale = 'en-US';

      locale = authorized ? user?.language : localizationLanguage;

      const response = yield call(api.marketplace.fetchAnyProductsListByIds, {
        ids: selectedProducts.map((item: Product) => item.path),
        locale
      });
      const fetchedProducts = response.data.items;
      const validOrderedProducts = [];

      for (let i = 0; i < selectedProducts.length; i++) {
        const foundProduct = fetchedProducts.find(
          item => item.id === selectedProducts[i].path
        );
        validOrderedProducts.push(foundProduct);
      }

      yield put(getProducts.success(validOrderedProducts));
    } catch (error) {
      console.log(error);
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.cart));
    }
  }
  /*
   * Saga send invoice request
   */
  @Saga(sendInvoiceRequest)
  public *sendInvoiceRequest(
    payload: Payload<typeof sendInvoiceRequest>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.sendForm));

    const productsNames = yield select((state: State) =>
      state.cart.products.map(el => el.name)
    );

    const data: invoiceRequestModel = {
      ...payload,
      products: productsNames,
      total: Number(productsNames.length)
    };
    try {
      yield call(api.checkout.sendInvoiceRequest, data);

      yield put(closeModal(Modals.invoiceRequest));
      yield put(showModal(Modals.success));
    } catch (error) {
      yield put(handleError(error.response.data.meassage));
    } finally {
      yield put(preloaderStop(Preloaders.sendForm));
    }
  }
}

export { CartSaga };
