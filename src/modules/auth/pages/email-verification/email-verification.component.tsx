import { Button, Preloader } from '@core/components';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useEmailVerificationData } from './email-verification.hook';
import * as styles from './email-verification.scss';
import { VerifyPending } from './verify-pending';
import { VerifySuccess } from './verify-success';

/**
 * Renders EmailVerification
 */
const EmailVerification: React.FC = () => {
  const dispatch = useDispatch();
  const { emailVerified, token, isNewEmail } = useEmailVerificationData();

  return (
    <Preloader id={Preloaders.emailVerification}>
      <div className={styles.emailVerification}>
        {emailVerified ? (
          <VerifySuccess />
        ) : (
          <VerifyPending token={token} isNewEmail={isNewEmail} />
        )}
      </div>
    </Preloader>
  );
};

export { EmailVerification };
