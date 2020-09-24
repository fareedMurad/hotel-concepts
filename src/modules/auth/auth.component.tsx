import { usePrefixedRoutes } from '@core/shared';
import * as React from 'react';
import { Route } from 'react-router';
import { useAuthData } from './auth.hook';
import * as styles from './auth.scss';
import { ForgotPasswordModal } from './modals';
import {
  EmailVerification,
  Login,
  Otp,
  ResetPassword,
  SignUp,
  UpdatePassword
} from './pages';

/**
 * Renders Auth
 */
const Auth: React.FC = () => {
  const {} = useAuthData();
  const [
    login,
    register,
    resetPassword,
    updatePassword,
    emailVerification,
    otp
  ] = usePrefixedRoutes([
    'login',
    'register',
    'reset-password',
    'update-password',
    'email-verification',
    'otp'
  ]);

  return (
    <div className={styles.auth}>
      <ForgotPasswordModal />
      <Route path={register} component={SignUp} />
      <Route path={login} component={Login} />
      <Route path={resetPassword} component={ResetPassword} />
      <Route path={updatePassword} component={UpdatePassword} />
      <Route path={emailVerification} component={EmailVerification} />
      <Route path={otp} component={Otp} />
    </div>
  );
};

export { Auth };
