import { Book } from '@account/pages/library/models';
import { Program } from '@account/pages/my-programs/models';
import { Product } from '@app/models/fastspring';
import { make } from 'redux-chill';

/**
 * Check cart
 */
const checkCart = make('[cart] check').stage(
  'success',
  (payload: string[]) => payload
);

/**
 * Add to cart
 */
const addToCart = make('[cart] add product')
  .stage((payload: { id: string }) => payload)
  .stage('success', (payload: { id: string }) => payload);

/**
 * Remove from cart
 */
const removeFromCart = make('[cart] remove product')
  .stage((payload: { id: string }) => payload)
  .stage('success', (payload: { id: string }) => payload);

/**
 * Cart add, get, remove, update
 */
const cart = make('[cart]')
  .stage('add', (product: Product) => product)
  .stage('getMany')
  .stage('remove', (product: Product) => product)
  .stage('update', (payload: Product) => payload)
  .stage('saveToState', (product: Product[]) => product);

/**
 * Get cart products
 */
const getProducts = make('[cart] get products').stage(
  'success',
  (products: (Program | Book)[]) => products
);

export { cart, getProducts, checkCart, addToCart, removeFromCart };
