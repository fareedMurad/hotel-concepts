import { Session } from '@app/models/fastspring';
import { make } from 'redux-chill';

/**
 * Checkout
 */
const checkout = make('[checkout] checkout').stage(
  (product: Session) => product
);

export { checkout };
