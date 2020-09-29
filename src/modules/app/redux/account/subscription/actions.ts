import { SubscriptionModel } from '@account/pages/subscription/models';
import { make } from 'redux-chill';

/**
 * Fetch subscription
 */
const fetchSubscription = make('[subscription] fetch').stage(
  'success',
  (payload: SubscriptionModel) => payload
);

/**
 * Buy subscription
 */
const buySubscripton = make('[subscription] buy').stage(
  'success',
  (payload: SubscriptionModel) => payload
);

export { fetchSubscription, buySubscripton };
