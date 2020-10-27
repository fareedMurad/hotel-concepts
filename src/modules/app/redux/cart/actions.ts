import { Book } from '@account/pages/library/models';
import { Program } from '@account/pages/my-programs/models';
import { Product } from '@app/models/fastspring';
import { InvoiceValues } from '@pages/cart/components/modal-invoice-request/models/invoice';
import { ProductModel } from '@pages/product/models/product.model';
import { make } from 'redux-chill';

/**
 * Check cart
 */
const checkCart = make('[cart] check').stage(
  'success',
  (payload: Product[]) => payload
);

// /**
//  * Add to cart
//  */
// const addToCart = make('[cart] add product')
//   .stage((payload: Product) => payload)
//   .stage('success', (payload: Product) => payload);

// /**
//  * Remove from cart
//  */
// const removeFromCart = make('[cart] remove product')
//   .stage((payload: { id: string }) => payload)
//   .stage('success', (payload: { id: string }) => payload);

/**
 * Cart add, get, remove, update
 */
const cart = make('[cart]')
  .stage('add', (product: Product) => product)
  .stage('setCurrent', (product: Book) => product)
  //this stage needs to prevent removing item before animation ends
  .stage('removing')
  //
  .stage('removeCurrent')
  .stage('getMany')
  .stage('remove', (id: string) => id)
  .stage('update', (payload: Product) => payload)
  .stage('clear')
  .stage('saveToState', (product: Product[]) => product);

/**
 * Get cart products
 */
const getProducts = make('[cart] get products').stage(
  'success',
  (products: (Program | Book)[]) => products
);

/*
 * Send invoice request
 */

const sendInvoiceRequest = make('[cart] send invoice request').stage(
  (payload: InvoiceValues) => payload
);

export { cart, getProducts, checkCart, sendInvoiceRequest };
