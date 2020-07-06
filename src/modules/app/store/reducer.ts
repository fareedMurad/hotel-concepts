import { general } from '@general/store';
import { localization } from '@localization/store';
import { router } from '@router/store';
import { combineReducers } from 'redux';
import { ui } from '@ui';
import { profile } from '@profile/store';
/**
 * App rd
 */
const app = combineReducers({
  router,
  localization,
  general,
  profile,
  ui
});

export { app };
