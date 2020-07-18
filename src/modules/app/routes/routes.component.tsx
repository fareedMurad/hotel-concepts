import { Auth } from '@auth';
import { Profile } from '@profile';
import { Uikit } from '@uikit';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as styles from './routes.scss';
import { useSelector } from 'react-redux';
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
import { MentorModal } from '@pages/homepage/components/mentor-modal';
import { useMediaPoints } from '@core/shared';

/**
 * Renders Routes
 */
const Routes: React.FC = () => {
  const { isToastVisible } = useSelector((state: State) => state.ui.toast);
  const { mobile } = useMediaPoints();
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
          <Route
            path={['/contributors/mentor/:id', '/mentor/:id']}
            component={MentorModal}
          />
        )}
        <Route path='/contributors' component={Contributors} />
        <Route path='/faq' component={Faq} />
        <Route path='/programs-catalogue/:slug' component={ProgramsCatalogue} />
        <Route path='/learning-approach' component={LearningApproach} />
        <Route path='/insights' component={Insights} />
        <Route path='/program/:slug' component={ProgramPage} />
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
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
};
export { Routes };
