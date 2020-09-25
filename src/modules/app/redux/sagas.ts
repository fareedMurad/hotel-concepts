import { LocalizationSaga } from '@localization/store';
import { RouterSaga } from '@router/store';
import { GeneralSaga } from '@general/store';
import { ToastSaga } from '@ui/toast';
import { AuthSaga } from './auth';
import { CheckoutSaga } from './checkout';
import {
  LibrarySaga,
  ProfileSaga,
  ProgramsSaga,
  SubscriptionSaga
} from './account';

/**
 * App sagas
 */
const sagas = [
  new LocalizationSaga(),
  new RouterSaga(),
  new GeneralSaga(),
  new ToastSaga(),
  new AuthSaga(),
  new CheckoutSaga(),
  new ProfileSaga(),
  new SubscriptionSaga(),
  new LibrarySaga(),
  new ProgramsSaga()
];

export { sagas };
