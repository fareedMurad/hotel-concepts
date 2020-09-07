import { general } from '@general/store';
import { localization } from '@localization/store';
import { router } from '@router/store';
import { header } from '@core/components/header/store';
import { combineReducers } from 'redux';
import { ui } from '@ui';
import { profile } from '@profile/store';
import { auth } from './auth';

/**
 * App rd
 */
const app = combineReducers({
  router,
  auth,
  localization,
  general,
  profile,
  ui,
  header
});

export { app };
