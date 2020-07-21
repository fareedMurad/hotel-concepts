import { Auth } from '@auth';
import { Profile } from '@profile';
import { Uikit } from '@uikit';
import * as React from 'react';
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
  useHistory
} from 'react-router-dom';
import * as styles from './routes.scss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '@app/store/state';
import { Toast } from '@core/components';
import {
  LearningApproach,
  Faq,
  Contributors,
  ContactsPage,
  ArticlePage
} from 'src/modules/pages';
import { JobsList } from '@pages/jobs-list';
import { JobDetails } from '@pages/job-details';
import { ForCompanies } from '@pages/for-companies';
import { Insights } from '@pages/insights';
import { Homepage } from '@pages/homepage';
import { Marketplace } from '@pages/marketplace';
import { StoryMission } from '@pages/story-mission';
import { Product } from '@pages/product';
import { CoursePartnership } from '@pages/course-partnership';
import { PrivacyPolicy } from '@pages/privacy-policy';
import { ProgramPage } from '@pages/program-page';
import { ProgramsCatalogue } from '@pages/programs-catalogue';
import { MentorModal } from '@pages/components/mentor-modal';
import { useMediaPoints } from '@core/shared';
import { toogleContributorModal } from '@ui/modal';
import { NotFound } from '@app/components';

/**
 * Renders Routes
 */
const Routes: React.FC = () => {
  const { isToastVisible } = useSelector((state: State) => state.ui.toast);
  const { mobile } = useMediaPoints();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={styles.routes}>
      {isToastVisible && <Toast />}
      <Switch>
        <Route path='/profile' component={Profile} />
        <Route path='/auth' component={Auth} />
        <Route path='/uikit' component={Uikit} />

        {/* ROUTES */}
        <Route path='/insights/article/:id' component={ArticlePage} />
        <Route path='/contact-us' component={ContactsPage} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Route path='/about-us' component={StoryMission} />

        {mobile && (
          //localhost:8289/program/financial-analysis-of-hotel-investments-course?programId=41UkbhJQC6KvxmJulXmKf3&/mentor/monica?&mentorId=0WJXIZoiz9R61ZwbJhVa3
          <Route
            path={['/contributors/mentor', '/mentor/:url?/:slug?/:mentorId', `/program/:slug?/mentor`]}

            render={() => (
              <MentorModal
                hideComponent={() => dispatch(toogleContributorModal(false))}
              />
            )}
          />
        )}
        <Route exact={mobile} path='/program/:slug' component={ProgramPage} />
        <Route exact={mobile} path='/contributors' component={Contributors} />
        <Route path='/faq' component={Faq} />

        <Route path='/programs-catalogue/:id' component={ProgramsCatalogue} />
        <Route path='/learning-approach' component={LearningApproach} />
        <Route path='/insights' component={Insights} />

        {/* JOB ROUTES */}
        <Route path='/jobs/job-details/:id' component={JobDetails} />
        <Route path='/jobs' component={JobsList} />
        {/* FOR_COMPANIES ROUTE */}
        <Route path='/for-companies' component={ForCompanies} />
        {/* MARKETPLACE ROUTE */}
        <Route path='/marketplace' component={Marketplace} />
        {/* PRODUCT ROUTE */}
        <Route path='/product/:id' component={Product} />
        {/* COURSE-PARTNERSHIP ROUTE */}
        <Route path='/course-partnership' component={CoursePartnership} />
        <Route exact={mobile} path='/' component={Homepage} />
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
export { Routes };
