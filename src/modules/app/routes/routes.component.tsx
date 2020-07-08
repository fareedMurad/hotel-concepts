import { Auth } from '@auth';
import { Profile } from '@profile';
import { Uikit } from '@uikit';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as styles from './routes.scss';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';
import { Toast } from '@core/components';
import { LearningApproach } from 'src/modules/pages';
import { JobsList } from '@pages/jobs-list';
import { JobDetails } from '@pages/job-details';
import { ForCompanies } from '@pages/for-companies';
import { Insights } from '@pages/insights';
import { Homepage } from '@pages/homepage';

/**
 * Renders Routes
 */
const Routes: React.FC = () => {
  const { isToastVisible } = useSelector((state: State) => state.ui.toast);

  return (
    <div className={styles.routes}>
      {isToastVisible && <Toast />}
      <Route path='/profile' component={Profile} />
      <Route path='/auth' component={Auth} />
      <Route path='/uikit' component={Uikit} />
      <Switch>
        <Route path='/home' component={Homepage} />
        <Route path='/profile' component={Profile} />
        <Route path='/auth' component={Auth} />
        <Route path='/uikit' component={Uikit} />
        <Route exact path='/learning-approach' component={LearningApproach} />
        <Route path='/insights' component={Insights} />
        {/* JOB ROUTES */}
        <Route path='/jobs/job-details/:id' component={JobDetails} />
        <Route path='/jobs' component={JobsList} />
        {/* FOR_COMPANIES ROUTE */}
        <Route path='/for-companies' component={ForCompanies} />
      </Switch>
    </div>
  );
};
export { Routes };
