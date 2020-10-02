import { Book } from '@account/pages/library/models';
import { Program } from '@account/pages/my-programs/models';
import { Product } from '@app/models/fastspring';
import { reducer } from 'redux-chill';
import { cart, getProducts } from './actions';

/**
 * Defaults
 */
const defaultState = {
  cart: [] as Product[],
  products: [] as (Program | Book)[]
};

/**
 * Cart Reducer
 */
const cartReducer = reducer(defaultState)
  .on(cart.saveToState, (state, payload) => {
    state.cart = payload;
  })
  .on(getProducts.success, (state, payload) => {
    state.products = payload;
  });

export { cartReducer as cart };
