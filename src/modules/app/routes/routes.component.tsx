import { Auth } from '@auth';
import { Profile } from '@profile';
import { Uikit } from '@uikit';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as styles from './routes.scss';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';
import { Toast } from '@core/components';
import { LearningApproach, Faq, Contributors } from 'src/modules/pages';
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
import { ContactsPage } from '@pages/contacts-page';
import { ProgramPage } from '@pages/program-page';

/**
 * Renders Routes
 */
const Routes: React.FC = () => {
  const { isToastVisible } = useSelector((state: State) => state.ui.toast);

  return (
    <div className={styles.routes}>
      {isToastVisible && <Toast />}
      <Switch>
        <Route path='/profile' component={Profile} />
        <Route path='/auth' component={Auth} />
        <Route path='/uikit' component={Uikit} />

        {/* ROUTES */}
        <Route path='/contact-us' component={ContactsPage} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Route path='/about-us' component={StoryMission} />
        <Route path='/contributors' component={Contributors} />
        <Route path='/faq' component={Faq} />
        <Route exact path='/learning-approach' component={LearningApproach} />
        <Route path='/insights' component={Insights} />
        <Route path='/program/:id' component={ProgramPage} />
        {/* JOB ROUTES */}
        <Route path='/jobs/job-details/:id' component={JobDetails} />
        <Route path='/jobs' component={JobsList} />
        {/* FOR_COMPANIES ROUTE */}
        <Route path='/for-companies' component={ForCompanies} />
        {/* MARKETPLACE ROUTE */}
        <Route path='/marketplace' component={Marketplace} />
        {/* PRODUCT ROUTE */}
        <Route path='/product' component={Product} />
        {/* PRODUCT ROUTE */}
        <Route path='/course-partnership' component={CoursePartnership} />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
};
export { Routes };
