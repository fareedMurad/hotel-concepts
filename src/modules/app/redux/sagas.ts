import { LocalizationSaga } from '@localization/store';
import { RouterSaga } from '@router/store';
import { GeneralSaga } from '@general/store';
import { ToastSaga } from '@ui/toast';
import { AuthSaga } from './auth';
import { CheckoutSaga } from './checkout';
import {
  LibrarySaga,
  ProfileSaga,
  ProgramsSaga as AccountProgramsSaga,
  SubscriptionSaga
} from './account';
import { MarketplaceSaga } from './marketplace';
import { ProgramsSaga } from './programs/saga';
import { CartSaga } from './cart';
import { FormSaga } from './form/saga';
import { ModalSaga } from '@ui/modal/saga';

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
  new MarketplaceSaga(),
  new AccountProgramsSaga(),
  new ProgramsSaga(),
  new CartSaga(),
  new FormSaga(),
  new ModalSaga()
];

export { sagas };
