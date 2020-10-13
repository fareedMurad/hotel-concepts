import { verifyEmailResend } from '@app/redux/auth';
import { Button, Preloader } from '@core/components';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useEmailVerificationData } from './email-verification.hook';
import * as styles from './email-verification.scss';

/**
 * Renders EmailVerification
 */
const EmailVerification: React.FC = () => {
  const dispatch = useDispatch();
  const {
    emailVerified,
    token,
    authorized,
    isNewEmail
  } = useEmailVerificationData();

  return (
    <Preloader id={Preloaders.emailVerification}>
      <div className={styles.emailVerification}>
        {emailVerified ? (
          <div className={styles.success}>
            <div className={styles.successCaption}>
              Verification successfull
            </div>
            <Button
              onClick={() =>
                authorized
                  ? dispatch(navigate('/account/profile'))
                  : dispatch(navigate('/auth/login'))
              }
            >
              Go to login
            </Button>
          </div>
        ) : (
          <div className={styles.fail}>
            <div className={styles.failCaption}>Something went wrong...</div>
            <Button
              className={styles.failResend}
              onClick={() => {
                dispatch(verifyEmailResend({ token, isNewEmail }));
              }}
            >
              Resend confirmation
            </Button>
          </div>
        )}
      </div>
    </Preloader>
  );
};

export { EmailVerification };
