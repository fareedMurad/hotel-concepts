import { Session, Product } from '@app/models/fastspring';
import { make } from 'redux-chill';

/**
 * Checkout
 */
const checkout = make('[checkout] checkout').stage(
  (product: Product[]) => product
);

export { checkout };
