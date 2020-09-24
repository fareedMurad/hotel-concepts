import { general } from '@general/store';
import { localization } from '@localization/store';
import { router } from '@router/store';
import { header } from '@core/components/header/store';
import { combineReducers } from 'redux';
import { ui } from '@ui';
import { auth } from './auth';
import { account } from './account';
import { programs } from './programs';

/**
 * App rd
 */
const app = combineReducers({
  router,
  auth,
  account,
  localization,
  general,
  ui,
  header,
  programs
});

export { app };
