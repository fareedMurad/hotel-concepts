import { usePrefixedRoutes } from '@core/shared';
import * as React from 'react';
import { Route } from 'react-router';
import * as styles from './auth.scss';
import {
  ForgotPassword,
  Login,
  Otp,
  Register,
  ResetPassword,
  UpdatePassword,
  EmailVerification
} from './pages';

/**
 * Renders Auth
 */
const Auth: React.FC = () => {
  const [
    login,
    register,
    forgotPassword,
    resetPassword,
    updatePassword,
    emailVerification,
    otp
  ] = usePrefixedRoutes([
    'login',
    'register',
    'forgot-password',
    'reset-password',
    'update-password',
    'email-verification',
    'otp'
  ]);

  return (
    <div className={styles.auth}>
      <Route path={login} component={Login} />
      <Route path={register} component={Register} />
      <Route path={forgotPassword} component={ForgotPassword} />
      <Route path={resetPassword} component={ResetPassword} />
      <Route path={updatePassword} component={UpdatePassword} />
      <Route path={emailVerification} component={EmailVerification} />
      <Route path={otp} component={Otp} />
    </div>
  );
};

export { Auth };
