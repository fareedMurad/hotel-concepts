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
import { Marketplace } from '@pages/marketplace';
import { Product } from '@pages/product';
import { Course } from '@pages/course-partnership';

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
        <Route path='/contributors' component={Contributors} />
        <Route path='/faq' component={Faq} />
        <Route exact path='/learning-approach' component={LearningApproach} />
        <Route path='/insights' component={Insights} />
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
        <Route path='/course' component={Course} />
      </Switch>
    </div>
  );
};
export { Routes };
