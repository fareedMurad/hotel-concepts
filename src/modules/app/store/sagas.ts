import { LocalizationSaga } from '@localization/store';
import { RouterSaga } from '@router/store';
import { GeneralSaga } from '@general/store';
import { ToastSaga } from '@ui/toast';
import { ProfileSaga } from '@profile/store';
import { JobsSaga } from '@pages/jobs-list/store/saga';
import { ContributorsSaga } from '@pages/contributors/store/saga';
import { OnlineCoursesSaga } from '@pages/homepage/sections/online-courses/store/saga';

/**
 * App sagas
 */
const sagas = [
  new LocalizationSaga(),
  new RouterSaga(),
  new GeneralSaga(),
  new ToastSaga(),
  new ProfileSaga(),
  new JobsSaga(),
  new ContributorsSaga(),
  new OnlineCoursesSaga()
];

export { sagas };
