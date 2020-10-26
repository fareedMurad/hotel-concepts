import { reducer } from 'redux-chill';
import { cart, getProducts, checkCart } from './actions';
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
  .on(cart.setCurrent, (state, payload) => {
    state.addedProduct = payload;
  })
  .on(cart.removeCurrent, state => (state.addedProduct = null));

export { cartReducer as cart };
