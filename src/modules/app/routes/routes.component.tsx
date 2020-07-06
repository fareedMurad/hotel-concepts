import { Auth } from '@auth';
import { Profile } from '@profile';
import { Uikit } from '@uikit';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home } from 'src/modules/home';
import * as styles from './routes.scss';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';
import { Toast } from '@core/components';

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
      <Route exact path='/' component={Home} />
    </div>
  );
};
export { Routes };
