import { reducer } from 'redux-chill';
import { cart, getProducts, checkCart, cartClear } from './actions';
import { CartState } from './state';

/**
 * Cart Reducer
 */
const cartReducer = reducer(new CartState())
  .on(checkCart.success, (state, payload) => {
    state.selectedProducts = payload;
  })
  // .on(addToCart.success, (state, { id }) => {
  //   const match = state.selectedProducts.some(one => one == id);

  //   match
  //     ? state.selectedProducts.filter(one => one != id)
  //     : state.selectedProducts.push(id);
  // })
  // .on(removeFromCart.success, (state, { id }) => {
  //   state.selectedProducts.filter(item => item != id);
  // })
  .on(cart.saveToState, (state, payload) => {
    state.selectedProducts = payload;
  })
  .on(getProducts.success, (state, payload) => {
    state.products = payload;
  })
  .on(cart.addToNotifier, (state, payload) => {
    state.addedProduct = payload;
    state.showDropdown = false;
    state.isProductInCart = true;
    state.products = [...state.products, payload.product];
  })
  .on(cart.showNotifier, state => {
    state.addedProduct.isVisible = true;
  })
  .on(cart.removing, state => (state.isProductInCart = false))
  .on(cart.removeCurrent, state => (state.addedProduct.isVisible = false))
  .on(cart.showDropdown, state => (state.showDropdown = !state.showDropdown))
  .on(cartClear.success, state => {
    if (state.selectedProducts.length === 0 || state.products.length === 0) {
      state.addedProduct = { product: null, isVisible: false };
    } else {
      state.addedProduct = {
        product: state.products[state.products.length - 1],
        isVisible: false
      };
    }
  });

export { cartReducer as cart };
