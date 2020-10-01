import { general } from '@general/store';
import { localization } from '@localization/store';
import { router } from '@router/store';
import { header } from '@core/components/header/store';
import { combineReducers } from 'redux';
import { ui } from '@ui';
import { auth } from './auth';
import { checkouts } from './checkout';
import { library, profile, programs, subscription } from './account';
import { marketplace } from './marketplace';
import { programsData } from './programs';

/**
 * App rd
 */
const app = combineReducers({
  router,
  auth,
  localization,
  general,
  ui,
  header,
  checkouts,
  profile,
  subscription,
  library,
  programs,
  marketplace,
  programsData
});

export { app };
