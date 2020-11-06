import { reducer } from 'redux-chill';
import {
  getProducts,
  checkCart,
  handleNotifierCart,
  updateCartState,
  resetCartState
} from './actions';
import { CartState } from './state';

/**
 * Cart Reducer
 */
const cartReducer = reducer(new CartState())
  .on(checkCart.success, (state, payload) => {
    state.selectedProducts = payload;
  })
  .on(updateCartState, (state, payload) => {
    state.selectedProducts = payload;
  })
  .on(getProducts.success, (state, payload) => {
    state.products = payload;
  })
  /**
   * Handle notifier modal cart
   */
  .on(handleNotifierCart, (state, payload) => {
    state.addedProduct = payload;
    state.showDropdown = false;
    state.isProductInCart = true;
    state.products = [...state.products, payload.product];
  })
  .on(handleNotifierCart.showModal, state => {
    state.addedProduct.isVisible = true;
  })
  .on(handleNotifierCart.hideModal, state => {
    state.addedProduct.isVisible = false;
    state.showDropdown = false;
  })
  .on(
    handleNotifierCart.defaultClick,
    state => (state.showDropdown = !state.showDropdown)
  )
  .on(
    handleNotifierCart.removingProduct,
    state => (state.isProductInCart = false)
  )
  /**
   * Handle product for notirfier on remove from cart
   */
  .on(resetCartState.success, state => {
    if (state.selectedProducts.length === 0 || state.products.length === 0) {
      state.showDropdown = false;
      state.addedProduct = { product: null, isVisible: false };
    } else {
      state.addedProduct = {
        product: state.products[state.products.length - 1],
        isVisible: false
      };
    }
  });

export { cartReducer as cart };
