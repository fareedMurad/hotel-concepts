import { Auth } from '@auth';
import { Profile } from '@profile';
import { Uikit } from '@uikit';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as styles from './routes.scss';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';
import { Toast } from '@core/components';
import { Home } from 'src/modules/pages';
import { JobsList } from '@pages/jobs-list';
import { JobDetails } from '@pages/job-details';

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
      {/* <Route exact path='/' component={Home} /> */}
      <Route exact path='/' component={Home} />
      <Switch>
        <Route path='/profile' component={Profile} />
        <Route path='/auth' component={Auth} />
        <Route path='/uikit' component={Uikit} />
        <Route exact path='/' component={Home} />
        {/* JOB ROUTES */}
        <Route path='/jobs/job-details/:id' component={JobDetails} />
        <Route path='/jobs' component={JobsList} />
      </Switch>
    </div>
  );
};
export { Routes };
