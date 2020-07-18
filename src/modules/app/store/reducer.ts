import { general } from '@general/store';
import { localization } from '@localization/store';
import { router } from '@router/store';
import { combineReducers } from 'redux';
import { ui } from '@ui';
import { profile } from '@profile/store';
import { jobs } from '@pages/jobs-list/store';
import { onlineCourses } from '@pages/homepage/sections/online-courses';

/**
 * App rd
 */
const app = combineReducers({
  router,
  localization,
  general,
  profile,
  ui,
  jobs,
  onlineCourses
});

export { app };
