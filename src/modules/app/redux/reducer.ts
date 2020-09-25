import { general } from '@general/store';
import { localization } from '@localization/store';
import { router } from '@router/store';
import { header } from '@core/components/header/store';
import { combineReducers } from 'redux';
import { ui } from '@ui';
import { auth } from './auth';
import { library, profile, programs, subscription } from './account';

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
  profile,
  subscription,
  library,
  programs
});

export { app };
