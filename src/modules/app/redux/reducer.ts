import { general } from '@general/store';
import { localization } from '@localization/store';
import { router } from '@router/store';
import { combineReducers } from 'redux';
import { ui } from '@ui';
import { auth } from './auth';
import { checkouts } from './checkout';
import { library, profile, programs, subscription } from './account';
import { marketplace } from './marketplace';
import { programsData } from './programs';
import { cart } from './cart/reducer';
import { form } from './form/reducer';

/**
 * App rd
 */
const app = combineReducers({
  router,
  auth,
  localization,
  general,
  ui,
  checkouts,
  profile,
  subscription,
  library,
  programs,
  marketplace,
  programsData,
  cart,
  form
});

export { app };
