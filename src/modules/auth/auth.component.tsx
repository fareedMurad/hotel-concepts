import * as React from 'react';
import * as styles from './auth.scss';
import { Route } from 'react-router';
import { Login } from './login';
import { Register } from './register';

/**
 * Renders Auth
 */
const Auth: React.FC = () => (
  <div className={styles.auth}>
    <Route path='/auth/login' component={Login} />
    <Route path='/auth/register' component={Register} />
    <Route path='/auth/reset-password' />
    <Route path='/auth/update-password' />
    <Route path='/auth/otp' />
  </div>
);

export { Auth };
