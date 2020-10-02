import { Book } from '@account/pages/library/models';
import { Program } from '@account/pages/my-programs/models';
import { Product } from '@app/models/fastspring';
import { make } from 'redux-chill';

/**
 * Cart add, get, remove, update
 */
const cart = make('[cart]')
  .stage('add', (product: Product) => product)
  .stage('getMany')
  .stage('remove', (product: Product) => product)
  .stage('update', (payload: Product) => payload)
  .stage('saveToState', (product: Product[]) => product);

const getProducts = make('[cart] get products').stage(
  'success',
  (products: (Program | Book)[]) => products
);

export { cart, getProducts };
