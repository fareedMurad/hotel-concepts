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
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';
import { Modals } from '@ui/models';

/**
 * Renders Auth
 */
const Auth: React.FC = () => {
  const {} = useAuthData();
  const { active: activeModal } = useSelector((state: State) => state.ui.modal);
  console.log(activeModal);
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
      {/* modal olvays shows in mobile fix */}
      {activeModal.find(el => el === Modals.forgotPassword) && (
        <ForgotPasswordModal />
      )}
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
