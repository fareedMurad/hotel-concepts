import { Button, Preloader } from '@core/components';
import { usePrefixedRoutes } from '@core/shared';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';
import { useEmailVerificationData } from './email-verification.hook';
import * as styles from './email-verification.scss';
import { VerifyPending } from './verify-pending';
import { VerifySuccess } from './verify-success';

/**
 * Renders EmailVerification
 */
const EmailVerification: React.FC = () => {
  const { emailVerified } = useEmailVerificationData();
  const [pending] = usePrefixedRoutes(['pending']);

  return (
    <Preloader id={Preloaders.emailVerification}>
      <div className={styles.emailVerification}>
        {emailVerified && <VerifySuccess />}
        <Route path={pending} component={VerifyPending} />
      </div>
    </Preloader>
  );
};

export { EmailVerification };
