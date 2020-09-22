import { usePrefixedRoutes } from '@core/shared';
import * as React from 'react';
import { Route } from 'react-router';
import { useAuthData } from './auth.hook';
import * as styles from './auth.scss';
import {
  EmailVerification,
  ForgotPassword,
  Interests,
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
    forgotPassword,
    resetPassword,
    updatePassword,
    emailVerification,
    interests,
    otp
  ] = usePrefixedRoutes([
    'login',
    'register',
    'forgot-password',
    'reset-password',
    'update-password',
    'email-verification',
    'interests',
    'otp'
  ]);

  return (
    <div className={styles.auth}>
      <Route path={register} component={SignUp} />
      <Route path={login} component={Login} />
      <Route path={forgotPassword} component={ForgotPassword} />
      <Route path={resetPassword} component={ResetPassword} />
      <Route path={updatePassword} component={UpdatePassword} />
      <Route path={emailVerification} component={EmailVerification} />
      <Route path={interests} component={Interests} />
      <Route path={otp} component={Otp} />
    </div>
  );
};

export { Auth };
