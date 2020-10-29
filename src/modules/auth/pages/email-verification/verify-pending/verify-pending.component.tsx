import { verifyEmailResend } from '@app/redux/auth';
import { Button, Icon } from '@core/components';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useEmailVerificationData } from '../email-verification.hook';
import { VerifyPendingProps } from './verify-pending-props';
import * as styles from './verify-pending.scss';

/**
 * Renders VerifyPending
 */
const VerifyPending: React.FC<VerifyPendingProps> = ({ isNewEmail, token }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.checkEmail}>
      <div className={styles.title}>One more thing…</div>
      <div className={styles.divider} />
      <div className={styles.icon}>
        <Icon name='verify-email' />
      </div>
      <div className={styles.notification}>
        'Check your email & click on the link to activate your account
      </div>

      <React.Fragment>
        <div className={styles.email}>Confirmation email has been sent to:</div>
        <div className={styles.hint}>
          Not receiving the email? Check your spam or:
        </div>
        <Button
          className={styles.button}
          arrow
          onClick={() => dispatch(verifyEmailResend({ token, isNewEmail }))}
        >
          Resend confirmation e-mail
        </Button>
        <Button className={styles.button} arrow theme='secondary'>
          Enter new e-mail
        </Button>
      </React.Fragment>
    </div>
  );
};

export { VerifyPending };
