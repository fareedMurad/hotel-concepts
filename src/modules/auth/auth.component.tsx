import * as React from 'react';
import * as styles from './auth.scss';
import { Route } from 'react-router';
import { Login, Register, Otp, UpdatePassword, ResetPassword } from './pages';

/**
 * Renders Auth
 */
const Auth: React.FC = () => (
  <div className={styles.auth}>
    <Route path='/auth/login' component={Login} />
    <Route path='/auth/register' component={Register} />
    <Route path='/auth/reset-password' component={ResetPassword} />
    <Route path='/auth/update-password' component={UpdatePassword} />
    <Route path='/auth/otp' component={Otp} />
  </div>
);

export { Auth };
