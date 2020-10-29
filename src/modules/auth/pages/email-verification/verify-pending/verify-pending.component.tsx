import { verifyEmailResend } from '@app/redux/auth';
import { NewEmailModal } from '@auth/modals/new-email-modal';
import { Button, Icon, Modal } from '@core/components';
import { showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
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
      <Button
        className={styles.button}
        arrow
        theme='secondary'
        onClick={() => dispatch(showModal(Modals.newEmail))}
      >
        Enter new e-mail
      </Button>
      <NewEmailModal />
    </div>
  );
};

export { VerifyPending };
